import React from 'react';
//import Button from 'react-bootstrap/Button';
//import    from 'react-bootstrap/';
import { Accordion, Card, Button, Container, Row, Col} from 'react-bootstrap';

const RecipeVideos = () => {

    return (


        <Container className= "d-flex flex-column" style={{width:'100rem', justifyContent: "space-around"}}>  
            {/* <div style={{ width: 'auto', height: 'auto' }}> */}
            {/* <div style={{ width: 'auto', height: 'auto' }}> */}
            {/* <div style={{ width: 'auto', height: 'auto' }}> */}
     {/* <div className="mx-auto">   */}    
        <Row>
             <iframe className="mr-4 ml-4" title="Cooking" width="400" height="315" src="https://www.youtube.com/embed/DqhqIfHww7g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
              <Accordion>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Instructions and Ingredients
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Scrambled eggs
                                    <hr />
                                    Take 3 eggs, 2 tbsp of milk
                                    combine and wisk
                                    stove to light heat
                                    pour eggs onto pan
                                    scramble eggs
                                    <hr />
                                    2 Ingredient Banana Pancakes
                                    <hr />
                                       Take 1 banana and mash into a bowl with 2 eggs. Wisk and scoop into a hot pan. Flip when ready, enjoy!
                                       <hr />
                                       Semi-Homemade Sticky Buns
                                       <hr />
                                       Take a muffin tin, place 1 slice of butter, 1 tbsp of brown sugar and a handful of chopped pecans in each tin. Add 1 biscuit from a can of niscuits into each tin, press firmly. Bake at 350 degrees for 8 minutes.

                                    </Card.Body>
                    </Accordion.Collapse>
                </Card></Accordion> </Row>{/*} </div>*/}
                  
                <Row>
                    <div className="mx-auto">
                    {/* <Button className="btn btn-warning mx-1">Recipe</Button>
            </div>
            <div style={{ width: 'auto', height: 'auto' }}> */}
            <iframe className="mr-4 ml-4" title="Cooking" width="400" height="315" src="https://www.youtube.com/embed/FcKvYl-GaAA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Instructions and Ingredients
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            </div> </Row> {/* <Button className="btn btn-warning mx-1">Recipe</Button>
            </div>
            <div style={{ width: 'auto', height: 'auto' }}> */}
            <Row>
            <div className="mx-auto">
                
                


<iframe className="mr-4 ml-4" title="Cooking" width="400" height="315" src="https://www.youtube.com/embed/vrpof_QQUe0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Instructions and Ingredients
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

               

</div>
            </Row>
            {/* <Button className="btn btn-warning mx-1">Recipe</Button>
            </div>
            <div style={{ width: 'auto', height: 'auto' }}> */}
            <iframe className="mr-4 ml-4" title="Cooking" width="400" height="315" src="https://www.youtube.com/embed/fuEkA9rG_nI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Instructions and Ingredients
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        
            <div style={{ width: 'auto', height: 'auto' }}> */}
            <iframe className="mr-4 ml-4" title="Cooking" width="400" height="315" src="https://www.youtube.com/embed/zrXWIWlF5_M" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Instructions and Ingredients
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>

                    </Card.Body>
                </Accordion.Collapse>
            </Card> </div>
            {/* <Button className="btn btn-warning mx-1">Recipe</Button>
            </div>
             <div style={{ width: 'auto', height: 'auto' }}> */}
            <iframe className="mr-4 ml-4" title="Cooking" width="400" height="315" src="https://www.youtube.com/embed/CpDqOH3uyAI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Instructions and Ingredients
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>{/* <Button className="btn btn-warning mx-1">Recipe</Button>
            </div> */}
            </Container>
    )}
export default RecipeVideos;