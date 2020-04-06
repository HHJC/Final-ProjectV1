
import React from "react";
import { useHistory } from "react-router-dom";
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import  Button  from "react-bootstrap/Button";
// import { Form } from "react-bootstrap";
// import { FormControl } from "react-bootstrap";
//import { NavLink } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();


    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Learn & Play</Navbar.Brand>
        <Nav className="mr-auto">
        <Button onClick={() => history.push("/User")} className="btn btn-warning mx-1">User</Button>
        <Button onClick={() => history.push("/")} className="btn btn-warning mx-1">Home</Button>
        <Button onClick={() => history.push("/Recipes")} className="btn btn-warning mx-1">Recipes</Button>
        </Nav>
      
      </Navbar>
      </div>
    );
  
}

export default NavBar;
