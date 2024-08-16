import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import  Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/carousels/img1.jpg';
import img2 from '../../assets/images/carousels/img2.jpg';
import img3 from '../../assets/images/carousels/img3.jpg';
import img4 from '../../assets/images/carousels/img4.jpg';




const Content1 = () => {
  return (
          <Carousel id='carousel'>
            
                    <Carousel.Item interval={1700}>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Image 1"
                            style={{filter: 'brightness(80%)'}}
                        />
                        <Carousel.Caption>
                            <h2>Our Newest Arrivals</h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1700}>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Image 2"
                            style={{filter: 'brightness(87%)'}}
                        />
                        <Carousel.Caption>
                            <h2>Various different furnitures available here</h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1700}>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Image 3"
                            style={{filter: 'brightness(87%)'}}
                        />
                        <Carousel.Caption>
                            <h2>Also, get discounts by us</h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1700}>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Image 4"
                            style={{filter: 'brightness(80%)'}}
                        />
                        <Carousel.Caption className='mx-auto'>
                            <h2>You are at right place</h2>
                        </Carousel.Caption>
                    </Carousel.Item>

          </Carousel>

  )
}

export default Content1
