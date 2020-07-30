import React from 'react'
import { Navbar, Form, Nav, FormControl, Button } from 'react-bootstrap'
import compass from '../compass.png'
const POTDNav = () => {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">POTD <img src={compass} className="logo" alt="logo"/>
</Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Info</Nav.Link>
        <Nav.Link href="#pricing">Crew</Nav.Link> */}
      </Nav>
    </Navbar>
  )
}

export default POTDNav;
