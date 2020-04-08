import React from "react";
//import Card from "react-bootstrap/Card";
//import Container from "react-bootstrap/Container";
import Container from "react-bootstrap/Container";
import WordCard from "../Views/Words/WordCard";
//import Button from "react-bootstrap/Button";

class Words extends React.Component {
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
    "a",
    "and",
    "away",
    "big",
    "blue",
    "can",
    "come",
    "down",
    "find",
    "for",
    "funny",
    "go",
    "help",
    "here",
    "I",
    "in",
    "is",
    "it",
    "jump",
    "little",
    "look",
    "make",
    "me",
    "my",
    "not",
    "one",
    "play",
    "red",
    "run",
    "said",
    "see",
    "the",
    "three",
    "to",
    "two",
    "up",
    "we",
    "where",
    "yellow",
    "you",
    "all",
    "am",
    "are",
    "at",
    "ate",
    "be",
    "black",
    "brown",
    "but",
    "came",
    "did",
    "do",
    "eat",
    "four",
    "get",
    "good",
    "have",
    "he",
    "into",
    "like",
    "must",
    "new",
    "no",
    "now",
    "on",
    "our",
    "out",
    "please",
    "pretty",
    "ran",
    "ride",
    "saw",
    "say",
    "she",
    "so",
    "soon",
    "that",
    "there",
    "they",
    "this",
    "too",
    "under",
    "want",
    "was",
    "well",
    "went",
    "what",
    "white",
    "who",
    "will",
    "with",
    "yes"
  ];

  componentDidMount = () => {
    fetch(`https://owlbot.info/api/v4/dictionary/${this.wordArray}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 08b6d412d2a92b706161ecd99c49bc5197b0703a",
      },

      //body: JSON.stringify({type, word, definitions  })
    })
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  };

  render() {
    return (
      <Container className="main">
        <WordCard data={this.state.data} />
      </Container>
    );
  }
}
export default Words;
