import React from 'react';
// import { useHistory } from "react-router-dom";
import  Card  from 'react-bootstrap/Card';
//import  Link  from 'react-bootstrap/Link';
// import  Button  from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';



 const Continents = () =>  {

  return (
  
    <Container className="main row d-flex justify-content-center m-auto p-auto" style={{width:'100rem'}}>
   
<Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://online.seterra.com/mapimage/3287.png" style={{ height: '14rem' }} />
  <Card.Body>
    <Card.Title>Learn the Continents</Card.Title>
    <Card.Text>
      text here
    </Card.Text>
    {/* <Button className="btn btn-danger m-auto d-flex">Click here</Button> */}
  </Card.Body>
</Card>

</Container>
  );
  
}

export default Continents;
