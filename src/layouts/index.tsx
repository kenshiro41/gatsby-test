import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import 'semantic-ui-css/semantic.min.css'
import '../styles/normalize'

import Header from './Header'
import LayoutRoot from './LayoutRoot'
import LayoutMain from './LayoutMain'
import Page from './Page'
import Container from './Container'
import Right from './Right'
import Left from './Left'
import styled from '@emotion/styled'
import { dimensions } from '../styles/variables'

const PutHorizon = styled.div`
  display: inline-flex;
  padding: 0 ${dimensions.containerPadding}rem;
`

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const Layout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>
          <Page>
            <PutHorizon>
              {/* <Left>left</Left> */}
              <Container>{children}</Container>
              <Right>right</Right>
            </PutHorizon>
          </Page>
        </LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default Layout
