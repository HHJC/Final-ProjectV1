import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import { FormControl } from "react-bootstrap";
//import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      
      </Navbar>
      </div>
    );
  }
}

export default NavBar;
