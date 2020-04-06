import React from "react";
import Card from "react-bootstrap/Card";
//import  Link  from 'react-bootstrap/Link';
import Button from "react-bootstrap/Button";
import  Container  from 'react-bootstrap/Container';
const StoryBooks = () => {
  return (
    <Container className="main row justify-content-center"style={{ width: "90rem" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Story Book One</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn btn-warning mx-1">Start your Story</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Story Book Two</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn btn-warning mx-1">Start your Story</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Story Book Three</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn btn-warning mx-1">Start your Story</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Story Book Four</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn btn-warning mx-1">Start your Story</Button>
        </Card.Body>
      </Card>

     
    </Container>
  );
};

export default StoryBooks;
