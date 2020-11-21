import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layouts'

interface TagsTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    allContentfulBlogPost: {
      nodes: [
        {
          id: string
          title: string
          slug: string
          createdAt: string
        }
      ]
    }
  }
}

const Tag: React.FC<TagsTemplateProps> = ({ data }) => {
  return (
    <Layout>
      {data.allContentfulBlogPost.nodes.map((article) => (
        <div key={article.id}>
          <time>{article.createdAt}</time>
          <Link to={`/articles/${article.slug}`}>{article.title}</Link>
        </div>
      ))}
    </Layout>
  )
}

export default Tag

export const query = graphql`
  query($tag: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    allContentfulBlogPost(filter: { tags: { eq: $tag } }) {
      nodes {
        id
        title
        slug
        createdAt(formatString: "YYYY/MM/DD hh:mm")
      }
    }
  }
`
