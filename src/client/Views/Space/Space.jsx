import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class Space extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: {
        
      }
    }
  }


// calls api and saves to state. how to save this to DB or reduce number of hits / make this more user friendly?

componentDidMount = () => { 
  fetch("https://images-api.nasa.gov/search?media_type=image&year_start=2019&year_end=2020")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({data: data})
    })};
  // ,
  // {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json', "Authorization": "Token 08b6d412d2a92b706161ecd99c49bc5197b0703a" },
  // }

    




render(){
  console.log(this.state.data)
  return ( <Container>
    placeholder
  </Container>
  )
}
}
export default Space;