import React from 'react';
import  Card  from 'react-bootstrap/Card';
import  Container  from 'react-bootstrap/Container';
import  Button  from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';


const States = () =>  {
  const history = useHistory()



  return (
  
    <Container className="main row d-flex justify-content-center m-auto p-auto" style={{width:'100rem'}}>
   
<Card className="m-3 mt-5 shadow border align-items-center" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.britannica.com/59/89959-004-732AD68F.gif" />
  <Card.Body>
    <Card.Title>Here is a map of the 7 continents of the world!</Card.Title>
    <Button onClick={()=>history.goBack()}  className="btn btn-danger m-auto d-flex"><IoIosArrowBack className="m-1 d-flex align-bottom"/> Go back</Button>
  </Card.Body>
</Card>

<Card className="m-3 mt-5 shadow border align-items-center" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.britannica.com/59/89959-004-732AD68F.gif" />
  <Card.Body>
    <Card.Title>Here is a map of the 7 continents of the world!</Card.Title>
    <Button onClick={()=>history.goBack()}  className="btn btn-danger m-auto d-flex"><IoIosArrowBack className="m-1 d-flex align-bottom"/> Go back</Button>
  </Card.Body>
</Card>


</Container>
  );
  
}

export default States;