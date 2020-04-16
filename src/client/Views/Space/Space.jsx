/* import * as React from "react";
// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import SpaceSingle from './SpaceSingle'

class Space extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      previous: [74, 205, 171, 188, 199, 172, 174]
    };
  }

  generateId = (previous) => {
    //generate random id from 1 to 204
    let result = Math.floor(Math.random() * 203) + 1;
    //if in previous, generate again
    if (previous.includes(result)) {
      return this.generateId(previous);
    }
    //else return result
    return result;
  };

  loadComponent = () => {
    let temp = this.generateId(this.state.previous);
    this.setState()
  }

  async componentDidMount() {
    try {
      let r = await fetch("/api/images");
      let images = await r.json();
      this.setState({ images });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // console.log(this.state.images);
    if (this.state.images != null) {
      return (
        <div>
        {this.state.images.map(image => {
          // console.log(image.link)
          return (
            <div key={image.id}>
              <h1>ID: {image.id}</h1>
              <h2>TITLE: {image.title}</h2>
              <p>EXPLANATION: {image.explanation}</p>
              <img src={`${image.link}`} alt={`${image.title}`} />
            </div>
          )
        })}
      </div>
      );
    } else {
      console.log("got here");
      return null;
    }
  }
}

export default Space;
 */