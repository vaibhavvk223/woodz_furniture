import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import img1 from '../../assets/images/section1/img1.jpg'
import img2 from '../../assets/images/section1/img2.jpg'
import img3 from '../../assets/images/section1/img3.jpg'
import img4 from '../../assets/images/section1/img4.jpg'


const data = 
[
    {
        name: 'SHOP WOODZ NEW ARRIVALS',
        src: img1
    }, 
    {
        name: 'SHOP PATIO',
        src: img2
    }, 
    {
        name: 'SHOP HOME DECOR',
        src: img3
    }, 
    {
        name: 'SHOP FURNITURE',
        src: img4
    }
]

const Content3 = () => {
  return (
    <Row>
          {
              data.map((e, i) => {
                  return (
                      <Col lg={6} className='my-4' key={i}>
                          <Card id='content3' className="mx-auto img-fluid" style={{ backgroundImage: `url(${e.src})`, filter: '', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
                              <p>{e.name}</p>
                          </Card>
                      </Col>
                  )
              })
          }
    </Row>
  )
}

export default Content3
