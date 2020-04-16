import React from 'react';
import  Card  from 'react-bootstrap/Card';
import  Container  from 'react-bootstrap/Container';
import  Button  from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import { FaMapMarkerAlt } from 'react-icons/fa';


const States = () =>  {
  const history = useHistory()



  return (
  
    <Container className="main row d-flex justify-content-center m-auto p-auto" style={{width:'100rem'}}>
   
<Card className="m-3 mt-5 shadow border align-items-center" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147813/isolated/preview/5988bedc8ec7b42d0d999d3c0dc350cd-illionois-state-plain-map-by-vexels.png" />
  <Card.Body>
    <Card.Title>Here is a map of the United States of America!</Card.Title>
    <Button onClick={()=>history.push('/Views/Geography/StateCards')}  className="btn btn-danger m-auto d-flex"><FaMapMarkerAlt className="m-1 d-flex align-bottom"/> Click me</Button>
  </Card.Body>
</Card>


</Container>
  );
  
}

export default States;