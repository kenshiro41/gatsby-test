import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts'

interface PageTemplateProps {
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
    contentfulBlogPost: {
      title: string
      slug: string
      createdAt: string
      fromNow: string
      tags: string[]
      id: string
      body: {
        childMarkdownRemark: {
          html: string
        }
      }
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>{data.contentfulBlogPost.title}</h1>
      <time>{data.contentfulBlogPost.createdAt}</time>
      <time>{data.contentfulBlogPost.fromNow}</time>
      <p
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: data.contentfulBlogPost.body.childMarkdownRemark.html
        }}
      />
    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query($slug: String!) {
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
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      createdAt(formatString: "YYYY/MM/DD hh:mm")
      fromNow: createdAt(fromNow: true)
      tags
      id
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
