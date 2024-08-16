import React from 'react'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'



const Footer = () => 
{
    return (
        <Container>
            <Row>
                <nav className='nav py-4 text-center'>
                    <a className='mx-4 px-4 mx-auto my-2' href='#'>Special Collections</a>
                    <a className='mx-4 px-4 mx-auto my-2' href='#'>Recent Items</a>
                    <a className='mx-4 px-4 mx-auto my-2' href='#'>FAQs</a>
                    <a className='mx-4 px-4 mx-auto my-2' href='#'>About</a>
                    <a className='mx-4 px-4 mx-auto my-2' href='#'>Contact</a>
                    <a className='mx-4 px-4 mx-auto my-2' href='#'>More</a>
                </nav>
            </Row>
            <Row className='text-center pt-4' style={{backgroundColor: 'pink'}}>
                <p className='fs-5'>We have all kinds of furniture !</p>
            </Row>
        </Container>
    )
}

export default Footer
