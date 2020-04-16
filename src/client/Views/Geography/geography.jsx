import React from 'react';
import { useHistory } from "react-router-dom";
import  Card  from 'react-bootstrap/Card';
//import  Link  from 'react-bootstrap/Link';
import  Button  from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';




 const GeographyHome = () =>  {
  const history = useHistory()



  return (
  
    <Container className="main row d-flex justify-content-center m-auto p-auto" style={{width:'100rem'}}>
   
<Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://online.seterra.com/mapimage/3287.png" style={{ height: '14rem' }} />
  <Card.Body>
    <Card.Title>Learn the Continents</Card.Title>
    <Card.Text>
      text here
    </Card.Text>
    <Button onClick={()=>history.push('../../components/Continents')}  className="btn btn-danger m-auto d-flex">Click here</Button>
  </Card.Body>
</Card>

<Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.maps-of-the-usa.com/maps/usa/detailed-cartoon-map-of-the-usa.jpg" style={{ height: '14rem' }} />
  <Card.Body>
    <Card.Title>Learn the 50 States </Card.Title>
    <Card.Text>
     text here
    </Card.Text>
    <Button onClick={()=>history.push('../../components/50States')} className="btn btn-warning m-auto d-flex"> Click here</Button>
  </Card.Body>
</Card>

<Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/happy-cute-kids-play-solve-puzzle-together-happy-cute-kids-play-solve-puzzle-together-activity-background-boy-brain-cartoon-160886054.jpg" style={{ height: '14rem' }}  />
  <Card.Body>
    <Card.Title>United States Map Puzzle</Card.Title>
    <Card.Text>
      text here
    </Card.Text>
    <Button onClick={()=>history.push('../../components/Puzzle.jsx')} className="btn btn-primary m-auto d-flex">Click here </Button>
  </Card.Body>
</Card>
       
</Container>
  );
  
}

export default GeographyHome;
