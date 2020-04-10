import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import  Container  from 'react-bootstrap/Container';
import {GiSpellBook} from 'react-icons/gi'
import { useHistory } from "react-router";


const StoryBooks = () => {

  const history = useHistory()

  return (
    <Container className="main m-5 row justify-content-center"style={{ width: "90rem" }}>
      <Card className="mt-4 ml-4 mr-4 mt-4"  style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Story Book One</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={()=>history.push('/Views/StoryBookView/StoryBook')} className="btn btn-warning mx-1"><GiSpellBook/>Start your Story</Button>
        </Card.Body>
      </Card>

      <Card className="mt-4 ml-4 mr-4 mt-4"  style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Story Book Two</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn btn-warning mx-1"><GiSpellBook/>Start your Story</Button>
        </Card.Body>
      </Card>

      <Card className="mt-4 ml-4 mr-4 mt-4"  style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Story Book Three</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn btn-warning mx-1"><GiSpellBook/>Start your Story</Button>
        </Card.Body>
      </Card>

      <Card className="mt-4 ml-4 mr-4 mt-4"  style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Story Book Four</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn btn-warning mx-1"><GiSpellBook/>Start your Story</Button>
        </Card.Body>
      </Card>

     
    </Container>
  );
};

export default StoryBooks;
