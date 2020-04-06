import React from 'react';
import  Card  from 'react-bootstrap/Card';
import  Container  from 'react-bootstrap/Container';
import  Button  from 'react-bootstrap/Button';

const Animals = () => {
/*   var Owlbot = require('owlbot-js');
  
  var client = Owlbot("Authorization: Token 08b6d412d2a92b706161ecd99c49bc5197b0703a");

  //curl --header "Authorization: Token 08b6d412d2a92b706161ecd99c49bc5197b0703a" https://owlbot.info/api/v4/dictionary/owl -s | json_pp
   
  client.define('owl').then(function(result){
     console.log(result);
  });
  movWatch = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(obj => this.setState({ movies: obj, movieShown: true, pplShown:false }))
  }
 */

    return(
        <Container className="main m-5 row justify-content-center" style={{width:'100rem'}}>
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
        </Container>
    )
}
export default Animals;