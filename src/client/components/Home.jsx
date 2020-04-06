import React from 'react';
import { useHistory } from "react-router-dom";
import  Card  from 'react-bootstrap/Card';
//import  Link  from 'react-bootstrap/Link';
import  Button  from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';




 const Home = () =>  {
  const history = useHistory()



  return (
    <Container className="main row justify-content-center" style={{width:'90rem'}}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Story Books</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
      <Button onClick={()=>history.push('./Views/StoryBooks')} className="btn btn-warning mx-1">Pick your Story</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Learn Your ABC's</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn btn-warning mx-1">Flah Cards</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Learn Your Words</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn btn-warning mx-1">Say It With Me</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Learn Your Animals</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn btn-warning mx-1">What Creature Is That</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Fun Recipes</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn btn-warning mx-1">Lets Cook</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Learn Your Stars</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn btn-warning mx-1">Lets Star Gaze</Button>
  </Card.Body>
</Card>
</Container>
  );
  
}

export default Home;
