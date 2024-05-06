import React from 'react'
import logo from "../images/LOGO SHOP UNITY-1.png"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Footer"
function Navigation() {
  return (
    <div id='navfixed' className=''>
    <Navbar className="">
    <Container>
      <Navbar.Brand href="#home">      <img className='w-25' src={logo}></img>      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
      
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navigation
