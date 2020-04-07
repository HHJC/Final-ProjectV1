import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import AnimalCard from "./../Views/Animalsview/AnimalCard";
//import Button from "react-bootstrap/Button";

class Animals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        definitions: [
          {
            type: "",
            definition: "",
            example: "",
            image_url: "",
            emoji: "",
          },
        ],
      },
    };
  }

  wordArray = [
    "dog",
    "cat",
    "owl",
    "frog",
    "tiger",
    "lion",
    "cow",
    "horse",
    "chicken",
    "zebra",
    "monkey",
    "butterfly",
    "giraffe",
    "elephant",
    "goose",
    "flamingo",
    "hippopotamus",
    "leopard",
    "wolf",
    "finch",
    "pig",
    "ostrich",
    "penguin",
    "lizard",
    "snake",
    "gorilla",
    "fish",
    "duck",
  ];

  componentDidMount = () => {
    fetch(`https://owlbot.info/api/v4/dictionary/dog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 08b6d412d2a92b706161ecd99c49bc5197b0703a",
      },

      //body: JSON.stringify({type, word, definitions  })
    })
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }))
      .then(console.log(this.state.data + "This is not being executed."));
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
        <div>
        <p>
          This is the correct component.
        </p>
      </div>
          <AnimalCard data={this.state.data} />
        </div>
      </React.Fragment>
    );
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
