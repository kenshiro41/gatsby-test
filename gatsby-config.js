require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'エンジニア備忘録',
    description: '自分用の備忘録です!!!',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://blog.ken41.com',
    author: {
      name: 'Kenshiro Sugiura',
      url: 'https://twitter.com/kenshiro0401',
      email: 'ken41shiro@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: './types/graphql-types.d.ts',
        codegenConfig: { maybeValue: 'T | undefined' }
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://ken41.netlify.com'
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
