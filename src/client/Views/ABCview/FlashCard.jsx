import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


const FlashCard = () => {
  const [smShow, setSmShow] = useState(false);
  return (
    <Container className="main row d-flex justify-content-center m-auto p-10" style={{ width: '100rem' }}>

      <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-a-apple.jpg" />
        <Card.Body className="d-flex justify-content-center">
          <Button className="btn btn-danger mx-1 mt-auto"> Click to enlarge</Button>
        </Card.Body>
      </Card>

 

      <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-b-ball.jpg" />
        <Card.Body className="d-flex justify-content-center">
          <Button className="btn btn-danger mx-1 mt-auto">Click to enlarge</Button>
        </Card.Body>
      </Card>

      <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
        <Card.Body className="d-flex justify-content-center">
          <Button className="btn btn-danger mx-1 mt-auto">Click to enlarge</Button>
        </Card.Body>
      </Card>

    </Container>

  );
}


export default FlashCard;