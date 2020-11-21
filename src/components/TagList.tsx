import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Link, useNavigate } from '@reach/router'
import { Grid, Label } from 'semantic-ui-react'
import { TagsQuery } from '../../types/graphql-types'

export const getAllTags = graphql`
  query Tags {
    allContentfulBlogPost {
      nodes {
        id
        tags
      }
    }
  }
`

const TagList = () => (
  <>
    <h2>Tags</h2>
    <StaticQuery
      query={getAllTags}
      render={(data: TagsQuery) =>
        data.allContentfulBlogPost.nodes.map(({ id, tags }) => (
          <React.Fragment key={id}>
            {tags?.map((tag, key: number) => (
              <Link key={key} to={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </React.Fragment>
        ))
      }
    />
  </>
)

export default TagList
