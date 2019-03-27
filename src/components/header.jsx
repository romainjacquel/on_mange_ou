import React, { Component } from 'react'
import {Navbar, Nav,Button,FormControl,Form} from "react-bootstrap"

class Header extends Component  {
render () {
return (
    <header>
       <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">On mange ou ?</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/appli">L'Application</Nav.Link>
      <Nav.Link href="/google-map">Google Map</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>  
    </header>
)
}
}

export default Header