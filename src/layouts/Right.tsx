import styled from '@emotion/styled'
import React from 'react'
import TagList from '../components/TagList'

const RightStyle = styled.div`
  position: sticky;
`

const Right: React.FC = () => (
  <RightStyle>
    <TagList />
  </RightStyle>
)

export default Right
