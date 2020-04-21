import React from "react";
import  {GiGiftOfKnowledge}  from "react-icons/gi";
import  {GiAnarchy}  from "react-icons/gi";
import  {GiOwl}  from "react-icons/gi";
import  {GiByzantinTemple}  from "react-icons/gi";
import  {FaHatWizard}  from "react-icons/fa";
import {Container,Jumbotron,Card,} from "react-bootstrap";


const About = () => {
return (
    <Container>

<div className="text-center" >
  <Card className="main row d-flex justify-content-center m-auto p-auto" style={{ width: '70rem',  height:'45rem' }}>
  
 <Card.Body>
    <Card.Title>
<Jumbotron fluid className="main row d-flex justify-content-center m-auto p-auto vertical-center" style={{ backgroundColor: "#FFC107", width: '60rem' , height:'10rem'}}>
  <Container>
    <h1 className="text-center">About <GiGiftOfKnowledge/> <GiOwl/> <GiAnarchy/> <GiByzantinTemple/> <FaHatWizard/>Mim</h1>
    
  </Container>
</Jumbotron>

    </Card.Title>
    <Card.Text>
   <h5>
  As there are parents in our development team, we know how hard it can be to make sure our kids are getting the enrichment they need
  to succeed in school. With the current pandemic, many children will struggle with getting the educational stimulation they need from home.
  We developed Learn and Play to be a tool parents could use to bridge that gap. All of our lessons have been currated by parents. We look forward to building a relationship with our audience so that we can bring many new features 
  to our program, so that we can further serve your family. 


   </h5>
    </Card.Text>
     </Card.Body>
     <div class="card-footer text-muted text-center">
      
    Contact Us  <br/>
    Email Address: Team@learnandplay.com
  </div>
</Card>
</div>





    </Container>
  );
};

export default About;
