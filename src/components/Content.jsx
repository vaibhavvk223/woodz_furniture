import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Content1 from './Contents/Content1'
import Content2 from './Contents/Content2'
import Content3 from './Contents/Content3'
import Content4 from './Contents/Content4'

const Content = () => {
  return (
      <Container>
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
      </Container>
  )
}

export default Content
