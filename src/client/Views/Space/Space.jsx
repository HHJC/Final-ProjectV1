import * as React from "react";
// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
//import Carousel from "react-bootstrap/Carousel";
//import Button from "react-bootstrap/Button";
import SpaceSingle from "./SpaceSingle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Space extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      current: 0,
    };
  }

  nextIndex = () => {
    this.setState({ current: this.state.current + 1 });
  };

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
        <Container>
          <Row>
            <Col>
              <SpaceSingle
                key={this.state.images[this.state.current].id}
                image={this.state.images[this.state.current]}
                callback={this.nextIndex}
              />
            </Col>
          </Row>
        </Container>
      );
    } else {
      console.log("got here");
      return null;
    }
  }
}

export default Space;
