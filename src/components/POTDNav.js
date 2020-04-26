import React from 'react'
import { Navbar, Form, Nav, FormControl, Button } from 'react-bootstrap'

const POTDNav = () => {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">POTD</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Info</Nav.Link>
        <Nav.Link href="#pricing">Crew</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default POTDNav;
