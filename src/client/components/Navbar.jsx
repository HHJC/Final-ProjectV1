import React from "react";
import { useHistory } from "react-router-dom";
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import  Button  from "react-bootstrap/Button";
import  {FaHome}  from "react-icons/fa";
import  {GiShinyApple}  from "react-icons/gi";
import { IoMdArrowRoundBack} from "react-icons/io";
// import { Form } from "react-bootstrap";
// import { FormControl } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();


    return (
        
        <Navbar bg="info" variant="light" sticky="top" className="">
        <Nav className="mr-auto ">
        <Button onClick={() => history.push("/")} className="btn-md btn-warning mx-1 justify-content-end "><FaHome className="m-1 d-flex justify-content-center m-auto"/> Home</Button>
        <Button onClick={() => history.push("/Recipes")} className="btn-md btn-warning mx-1 justify-content-end"><GiShinyApple className="m-1 d-flex justify-content-center m-auto"/> About Me</Button>
        <Button onClick={() => history.goBack()} className="btn-md btn-warning mx-1 justify-content-end"><IoMdArrowRoundBack className="m-1 d-flex justify-content-center m-auto"/> Go Back</Button>
        </Nav>
        <Navbar.Brand href="#home" cl><h2>Learn & Play</h2></Navbar.Brand>
        </Navbar>
    
    );
  
}

export default NavBar;
