import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Content2 = () => {
  return (
   <Row>
     <Col className='text-center my-4' style={{color: '#343434'}}>
       <h2 className='fw-bold display-6'>A PROPER CHOICE</h2>
       <p className='fs-2'>
        for you and your living
       </p>
       <p>
        Shop outdoor at Woodz<br />
        Woodz offers new products to fit every style at affordable prices
       </p>
       <p className='fw-bold fs-6'>
        <a href='#' style={{color: "darkgreen", textUnderlineOffset: '3.5px'}}>
            BUY WOODZ FURNITURE
        </a>
       </p>
     </Col>
   </Row>
  )
}

export default Content2
