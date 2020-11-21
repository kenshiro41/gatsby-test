import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts'

const MyPage = () => {
  return (
    <Layout>
      <h1>mypage</h1>
      <Link to="/my">my</Link>
    </Layout>
  )
}

export default MyPage
