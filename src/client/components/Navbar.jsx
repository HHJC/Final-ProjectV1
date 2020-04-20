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
<<<<<<< HEAD
        <Button onClick={() => history.push("/")} className="btn-md btn-warning mx-1 "><FaHome className="m-1 d-flex justify-content-center m-auto"/> Home</Button>
        <Button onClick={() => history.push("/About")} className="btn-md btn-warning mx-1 "><GiShinyApple className="m-1 d-flex justify-content-center m-auto"/> About</Button>
        <Button onClick={() => history.goBack()} className="btn-md btn-warning mx-1 "><IoMdArrowRoundBack className="m-1 d-flex justify-content-center m-auto"/> Go Back</Button>
=======
        <Button onClick={() => history.push("/")} className="btn-md btn-warning mx-1 justify-content-end "><FaHome className="m-1 d-flex justify-content-center m-auto"/> Home</Button>
        <Button onClick={() => history.push("/Recipes")} className="btn-md btn-warning mx-1 justify-content-end"><GiShinyApple className="m-1 d-flex justify-content-center m-auto"/> About Me</Button>
        <Button onClick={() => history.goBack()} className="btn-md btn-warning mx-1 justify-content-end"><IoMdArrowRoundBack className="m-1 d-flex justify-content-center m-auto"/> Go Back</Button>
>>>>>>> 4f357c035cc6f97892e1e9bcf05ca3b7ecfae8b9
        </Nav>
        <Navbar.Brand href="#home" cl><h2>Learn & Play</h2></Navbar.Brand>
        </Navbar>
    
    );
  
}

export default NavBar;
