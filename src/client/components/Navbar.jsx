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
        
        <Navbar bg="info" variant="light">
        <Navbar.Brand href="#home">Learn & Play</Navbar.Brand>
        <Nav className="mr-auto ">
        <Button onClick={() => history.push("/")} className="btn-md btn-warning mx-1 "><FaHome className="m-1 d-flex justify-content-center m-auto"/> Home</Button>
        <Button onClick={() => history.push("/About")} className="btn-md btn-warning mx-1 "><GiShinyApple className="m-1 d-flex justify-content-center m-auto"/> About</Button>
        <Button onClick={() => history.goBack()} className="btn-md btn-warning mx-1 "><IoMdArrowRoundBack className="m-1 d-flex justify-content-center m-auto"/> Go Back</Button>
        </Nav>
        </Navbar>
    
    );
  
}

export default NavBar;
