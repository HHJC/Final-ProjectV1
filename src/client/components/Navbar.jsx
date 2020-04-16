import React from "react";
import { useHistory } from "react-router-dom";
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import  Button  from "react-bootstrap/Button";
import  {FaUserAlt}  from "react-icons/fa";
import  {FaHome}  from "react-icons/fa";
import  {GiCupcake}  from "react-icons/gi";
// import { Form } from "react-bootstrap";
// import { FormControl } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();


    return (
        
        <Navbar bg="info" variant="light">
        <Navbar.Brand href="#home">Learn & Play</Navbar.Brand>
        <Nav className="mr-auto ">
        <Button onClick={() => history.push("/")} className="btn-lg btn-warning mx-1 "><FaHome/></Button>
        <Button onClick={() => history.goBack()} className="btn-lg btn-warning mx-1 "><FaUserAlt/></Button>
        <Button onClick={() => history.push("/Recipes")} className="btn-lg btn-warning mx-1 "><GiCupcake/></Button>
        </Nav>
        </Navbar>
    
    );
  
}

export default NavBar;
