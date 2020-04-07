import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class Animals extends React.Component {
 constructor(props){
    super(props)
    this.state = {
        word:"",
        type:"",
        definitions:[],
        definition:"",
        image_url:""

    }
 }




 componentDidMount = () => {fetch("https://owlbot.info/api/v4/dictionary/dog",
  {
     method: 'GET',
     headers: { 'Content-Type': 'application/json', "Authorization": "Token 08b6d412d2a92b706161ecd99c49bc5197b0703a" },

     //body: JSON.stringify({type, word, definitions  })
 })
 .then(res => res.json())
 .then(data => this.setState({word: data.word, type: data.definitions.type ,definition: data.definitions.definition, image_url: data.definitions.image_url}))}
 
 
 

 render(){
  return (
    <Container
      className="main m-5 row justify-content-center"
      style={{ width: "100rem" }}
    >
      <Card className="mt-4 ml-4 mr-4 mt-4" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
  <Card.Title>{this.state.word}</Card.Title>
          <Card.Text>
           {this.state.definitions.definition}
           
         
           
          </Card.Text>
          <Button
            /* onClick={()=>history.push('./Views/StoryBooks')} */ className="btn btn-warning mx-1"
          >
            Flah Cards
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
  }
}
export default Animals;
 

// {definitions:
// [ { type: 'noun',
//     definition:
//      'a nocturnal bird of prey with large eyes, a facial disc, a hooked beak, and typically a loud hooting call.',
//     example:
//      'I love reaching out into that absolute silence, when you can hear the owl or the wind.',
//     image_url:
//      'https://media.owlbot.info/dictionary/images/owl.jpg.400x400_q85_box-403,83,960,640_crop_detail.jpg',
//     emoji: '🦉' } ],
// word: 'owl',
// pronunciation: 'oul' }

 //curl --header "Authorization: Token 08b6d412d2a92b706161ecd99c49bc5197b0703a" https://owlbot.info/api/v4/dictionary/owl -s | json_pp
//var Owlbot = require('owlbot-js');
  
//var client = Owlbot("Authorization: Token 08b6d412d2a92b706161ecd99c49bc5197b0703a");
