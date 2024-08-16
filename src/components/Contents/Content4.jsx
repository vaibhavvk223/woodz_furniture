import React from 'react'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import img1 from '../../assets/images/section2/img1.jpg'
import img2 from '../../assets/images/section2/img2.jpg'
import img3 from '../../assets/images/section2/img3.jpg'
import img4 from '../../assets/images/section2/img4.jpg'
import img5 from '../../assets/images/section2/img5.jpg'
import img6 from '../../assets/images/section2/img6.jpg'

const data = 
[
    {
        name: 'Shop Rugs',
        src: img1,
    }, 
    {
        name: 'Shop Bath',
        src: img2,
    }, 
    {
        name: 'Shop Bedding',
        src: img3,
    },
    {
        name: 'Shop Sofa',
        src: img4,
    },
    {
        name: 'Shop Sectional',
        src: img5,
    },
    {
        name: 'Shop All',
        src: img6,
    }
]

const Content4 =() => {
  return (
    <>
    <Row className='px-4 pt-4'>
        <h2>SHOP ITEMS</h2>
    </Row>
    <Row>
              {data.map((e, i) => {
                  return (
                      <Col id='col' className='my-2 mx-auto' key={i}>
                          <Card id='content4_1' className='mx-auto img-fluid' style={{ backgroundImage: `url(${e.src})`, backgroundRepeat: 'no-repeat', border: 'none', width: '20rem', height: '17rem', cursor: 'pointer' }}>
                        
                          </Card>
                          <p id='content4' className='py-3 fs-5 text-center fw-bold me-4'><a href="#" style={{textDecoration: 'none', color: 'black'}}>{e.name}</a></p>
                      </Col>
                  );
              })}

    </Row>
    </>
    
  )
}

export default Content4
