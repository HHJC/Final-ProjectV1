import * as React from "react";
// import TestGrid from "./TestGrid";
// import { render } from "@testing-library/react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

// class Space extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: null,
//       formatted: null,
//     };
//   }

//   async componentDidMount() {
//     try {
//       let r = await fetch("/api/images");
//       let images = await r.json();
//       //map images to gallery format
//       let formatted = images.map((image) => {
//         let temp = {};
//         temp.src = image.link;
//         temp.thumbnail = image.link;
//         temp.caption = image.explanation;
//         temp.customOverlay = (
//           <span className={"text-white"}>{image.title}</span>
//         );
//         return temp;
//       });
//       this.setState({ images, formatted });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   render() {
//     // console.log(this.state.images);
//     if (this.state.images != null) {
//       return <TestGrid images={this.state.formatted} />;
//     } else {
//       console.log("got here");
//       return null;
//     }
//   }
// }
const Space = () => {
  return (
    <Container>
      <Card
        className="main color-black row d-flex justify-content-center text-center mt-3 m-auto p-auto"
        style={{ width: "50rem" }}
      >
        <Card.Body>
          <Card.Title><h1>COMING SOON</h1></Card.Title>
          <Card.Text>
            <h1>
             UNDER CONSTRUCTION
             </h1>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Space;
