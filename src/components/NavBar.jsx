import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/images/logo/Woodz.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';

const NavBar = () => {
  return (
    <Container>
          <Navbar expand='xxxl' className='bg-primary py-3' data-bs-theme="dark">
          
                  <Navbar.Brand id='navBrand' className='mx-4'>
                    <img src={Logo} alt="Woodz Logo" className='img-fluid mx-auto d-block' />
                  </Navbar.Brand>
                  <Navbar.Toggle id='navToggle' aria-controls="basic-navbar-nav" className='me-4' />
                  <Navbar.Offcanvas>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Woodz Furniture
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Stack id="stack" gap={2}>
                    <div className="p-2"><a href='#'>Special Collections</a></div>
                    <div className="p-2"><a href='#'>Recent Items</a></div>
                    <div className="p-2"><a href='#'>FAQs</a></div>
                    <div className="p-2"><a href='#'>About</a></div>
                    <div className="p-2"><a href='#'>Contact</a></div>
                    <div className="p-2"><a href='#'>More</a></div>
                </Stack>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
           
          </Navbar>
    </Container>
  )
}

export default NavBar
