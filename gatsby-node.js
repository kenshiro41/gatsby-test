const path = require('path')

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   // Sometimes, optional fields tend to get not picked up by the GraphQL
//   // interpreter if not a single content uses it. Therefore, we're putting them
//   // through `createNodeField` so that the fields still exist and GraphQL won't
//   // trip up. An empty string is still required in replacement to `null`.

//   switch (node.internal.type) {
//     case 'MarkdownRemark':
//       {
//         const { permalink, layout } = node.frontmatter
//         const { relativePath } = getNode(node.parent)

//         let slug = permalink

//         if (!slug) {
//           slug = `/${relativePath.replace('.md', '')}/`
//         }

//         // Used to generate URL to view this content.
//         createNodeField({
//           node,
//           name: 'slug',
//           value: slug || ''
//         })

//         // Used to determine a page layout.
//         createNodeField({
//           node,
//           name: 'layout',
//           value: layout || ''
//         })
//       }
//       break
//     default:
//   }
// }

const blogPagePath = path.resolve(`./src/templates/page.tsx`)
const tagsPagePath = path.resolve('./src/templates/tag.tsx')
const getAllBlogPosts = `
query {
  allContentfulBlogPost {
    edges {
      node {
        slug
      }
    }
  }
}
`
const getAllTags = `
query {
  allContentfulBlogPost {
    nodes {
      id
      tags
    }
  }
}`

const fetchPageData = async (graphql, gql, fn) => {
  const res = await graphql(gql)
  if (res.errors) {
    console.error(res.errors)
    throw new Error(res.errors)
  }
  fn(res)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await fetchPageData(graphql, getAllBlogPosts, (res) => {
    res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      const { slug } = node

      createPage({
        path: `/articles/${slug}`,
        component: blogPagePath,
        context: {
          slug
        }
      })
    })
  })

  await fetchPageData(graphql, getAllTags, (res) => {
    res.data.allContentfulBlogPost.nodes.forEach(({ tags }) => {
      tags.forEach((tag) => {
        createPage({
          path: `/tags/${tag}`,
          component: tagsPagePath,
          context: {
            tag
          }
        })
      })
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  console.log(page)
  if (page.path.match(/^\/articles/)) {
    // eslint-disable-next-line no-param-reassign
    page.matchPath = '/articles/*'

    // Update the page.
    createPage(page)
  }
}

// Webpack Config
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}
