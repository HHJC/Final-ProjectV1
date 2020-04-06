
import React from "react";
//import { useHistory } from "react-router-dom";
import InputGroup  from "react-bootstrap/InputGroup";
import DropdownButton  from "react-bootstrap/DropdownButton";
import FormControl  from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
// import { FormControl } from "react-bootstrap";
//import { NavLink } from "react-router-dom";

const User = () => {
  //const history = useHistory();


    return (
        <>
        <InputGroup className="mb-3">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-describedby="basic-addon1" />
      </InputGroup>
    
      <InputGroup>
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        </InputGroup>
        </>
      
    );
  
}

export default User;
