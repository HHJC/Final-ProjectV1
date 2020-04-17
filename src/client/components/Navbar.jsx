import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
//import  {FaUserAlt}  from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";
// import { Form } from "react-bootstrap";
// import { FormControl } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  return (
    <Navbar bg="info" variant="light">
      <Navbar.Brand href="#home">Learn & Play</Navbar.Brand>
      <Nav className="mr-auto ">
        <Button
          onClick={() => history.push("/")}
          className="btn btn-warning m-2 d-flex"
        >
          <FaHome className="m-1 d-flex align-bottom" /> Home
        </Button>
        <Button
          onClick={() => history.push("/Recipes")}
          className="btn btn-warning m-2 d-flex"
        >
          <GiCupcake className="m-1 d-flex align-bottom" /> Recipes
        </Button>
        <Button
          onClick={() => history.goBack()}
          className="btn btn-warning m-2 d-flex "
        >
          <IoMdArrowRoundBack className="m-1 d-flex align-bottom" /> Go Back
        </Button>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
