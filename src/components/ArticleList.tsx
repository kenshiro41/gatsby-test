import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { ArticlesQuery } from '../../types/graphql-types'
import { type } from 'os'

export const getAllArticlesData = graphql`
  query articles {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`

const ArticleList = () => (
  <>
    <h2>Articles</h2>
    <StaticQuery
      query={getAllArticlesData}
      render={(data: ArticlesQuery) =>
        data.allContentfulBlogPost.edges.map((article) => {
          const { id, slug, title } = article.node
          return (
            <p key={id}>
              <Link to={`/articles/${slug}`}>{title}</Link>
            </p>
          )
        })
      }
    />
  </>
)

export default ArticleList
