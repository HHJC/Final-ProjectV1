import React from 'react';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';




 class Home extends React.Component  {
  render(){
  return (
    <container className="main row">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Story Books</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
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
    <Button variant="primary">Go somewhere</Button>
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
    <Button variant="primary">Go somewhere</Button>
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
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Recipes</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
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
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</container>
  );
  }
}

export default Home;
