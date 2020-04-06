import React from 'react';
import { useHistory } from "react-router-dom";
import  Card  from 'react-bootstrap/Card';
//import  Link  from 'react-bootstrap/Link';
import  Button  from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';




 const Home = () =>  {
  const history = useHistory()



  return (
    <Container className="main m-5 row justify-content-center" style={{width:'100rem'}}>
    <Card className="mt-4 ml-4 mr-4 mt-4" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Story Books</Card.Title>
    <Card.Text>
     Find a story Book and read along with them.
    </Card.Text>
      <Button onClick={()=>history.push('./Views/StoryBooks')} className="btn btn-warning mx-1">Pick your Story</Button>
  </Card.Body>
</Card>

<Card className="mt-4 ml-4 mr-4 mt-4" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Learn Your ABC's</Card.Title>
    <Card.Text>
      Digital Flash Cards to help you teach your child there ABC's.
    </Card.Text>
    <Button /* onClick={()=>history.push('./Views/StoryBooks')} */ className="btn btn-warning mx-1">Flah Cards</Button>
  </Card.Body>
</Card>

<Card className="mt-4 ml-4 mr-4 mt-4" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Learn Your Words</Card.Title>
    <Card.Text>
     A way to teach your kids words with flash cards
    </Card.Text>
    <Button className="btn btn-warning mx-1">Say It With Me</Button>
  </Card.Body>
</Card>

<Card className="mt-4 ml-4 mr-4 mt-4" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Learn Your Animals</Card.Title>
    <Card.Text>
      Have fun with these pictures an desriptions of Animals.
    </Card.Text>
    <Button className="btn btn-warning mx-1">What Creature Is That</Button>
  </Card.Body>
</Card>

<Card className="mt-4 ml-4 mr-4 mt-4" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Fun Recipes</Card.Title>
    <Card.Text>
      Fun videos of recipes and a list of ingredients.
    </Card.Text>
    <Button onClick={()=>history.push('./Views/RecipeVideos')} className="btn btn-warning mx-1">Lets Cook</Button>
  </Card.Body>
</Card>

<Card className="mt-4 ml-4 mr-4 mt-4" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Learn Your Stars</Card.Title>
    <Card.Text>
      Gaze at the stars with you little ones and learn there stories.
    </Card.Text>
    <Button className="btn btn-warning mx-1">Lets Star Gaze</Button>
  </Card.Body>
</Card>
</Container>
  );
  
}

export default Home;
