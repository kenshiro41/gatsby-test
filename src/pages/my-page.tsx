import { Link } from 'gatsby'
import React from 'react'
import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'

const MyPage = () => {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>mypage</h1>
          <Link to="/my">my</Link>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default MyPage
