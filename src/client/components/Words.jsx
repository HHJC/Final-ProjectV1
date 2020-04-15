import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
//import Container from "react-bootstrap/Container";
//import WordCard from "../Views/Words/WordCard";
//import Button from "react-bootstrap/Button";

class Words extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: {
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
      allWords: [],
    };
  }

  wordArray = [
    "at",
    "all",
    "away",
    "big",
    "blue",
    "be",
    "black",
    "brown",
    "but",
    "can",
    "down",
    "find",
    "funny",
    "go",
    "help",
    "here",
    "I",
    "in",
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
    "what",
    "white",
    "who",
    "will",
    "with",
    "yes",
  ];

  fetchWords(url) {
    fetch(`https://owlbot.info/api/v4/dictionary/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 3ec95eb2727f567db0786d8806fdd6f32a001f1a",
      },

      //body: JSON.stringify({type, word, definitions  })
    })
      .then((res) => res.json())
      .then((currentWord) => this.setState({ currentWord }))
      .then(() =>
        this.setState({
          allWords: [...this.state.allWords, this.state.currentWord],
        })
      )
      .catch((err) => console.log(err));
  }

  componentDidMount = () => {
    for (let i = 0; i < this.wordArray.length; i++) {
      const url = this.wordArray[i];
      this.fetchWords(url);
    }
  };

