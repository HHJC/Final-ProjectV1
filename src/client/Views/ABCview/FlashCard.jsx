import React, { useState } from 'react';
import  Card  from 'react-bootstrap/Card';
import  Container  from 'react-bootstrap/Container';
import  Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const FlashCard = () => {
  const [smShowA, setSmShowA] = useState(false);
  const [smShowB, setSmShowB] = useState(false);
  const [smShowC, setSmShowC] = useState(false);
  const [smShowD, setSmShowD] = useState(false);
  const [smShowE, setSmShowE] = useState(false);
  const [smShowF, setSmShowF] = useState(false);
  const [smShowG, setSmShowG] = useState(false);
  const [smShowH, setSmShowH] = useState(false);
  const [smShowI, setSmShowI] = useState(false);
  const [smShowJ, setSmShowJ] = useState(false);
  const [smShowK, setSmShowK] = useState(false);
  const [smShowL, setSmShowL] = useState(false);
  const [smShowM, setSmShowM] = useState(false);
  const [smShowN, setSmShowN] = useState(false);
  const [smShowO, setSmShowO] = useState(false);
  const [smShowP, setSmShowP] = useState(false);
  const [smShowQ, setSmShowQ] = useState(false);
  const [smShowR, setSmShowR] = useState(false);
  const [smShowS, setSmShowS] = useState(false);
  const [smShowT, setSmShowT] = useState(false);
  const [smShowU, setSmShowU] = useState(false);
  const [smShowV, setSmShowV] = useState(false);
  const [smShowW, setSmShowW] = useState(false);
  const [smShowX, setSmShowX] = useState(false);
  const [smShowY, setSmShowY] = useState(false);
  const [smShowZ, setSmShowZ] = useState(false);
 
  

  return (
    <Container className="main row d-flex justify-content-center m-auto p-10" style={{width:'100rem'}}>
   
    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-a-apple.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowA(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowA}
        onHide={() => setSmShowA(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="A">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-a-apple.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=" justify-content-center">A is for APPLE</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-b-ball.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowB(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowB}
        onHide={() => setSmShowB(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="B">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-b-ball.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>B is for BALL</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowC(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowC}
        onHide={() => setSmShowC(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="C">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for CAR</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-d-dog.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowD(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowD}
        onHide={() => setSmShowD(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="D">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-d-dog.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>D is for DOG </Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-e-egg.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowE(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowE}
        onHide={() => setSmShowE(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="E">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-e-egg.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-f-flower.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowF(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowF}
        onHide={() => setSmShowF(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="F">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-f-flower.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowG(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowG}
        onHide={() => setSmShowG(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="G">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowH(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowH}
        onHide={() => setSmShowH(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="H">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowI(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowI}
        onHide={() => setSmShowI(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="I">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowJ(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowJ}
        onHide={() => setSmShowJ(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="J">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowK(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowK}
        onHide={() => setSmShowK(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="K">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowL(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowL}
        onHide={() => setSmShowL(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="L">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowM(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowM}
        onHide={() => setSmShowM(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="M">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowN(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowN}
        onHide={() => setSmShowN(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="N">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowO(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowO}
        onHide={() => setSmShowO(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="O">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowP(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowP}
        onHide={() => setSmShowP(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="P">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowQ(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowQ}
        onHide={() => setSmShowQ(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="Q">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowR(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowR}
        onHide={() => setSmShowR(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="R">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowS(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowS}
        onHide={() => setSmShowS(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="S">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowT(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowT}
        onHide={() => setSmShowT(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="T">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowU(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowU}
        onHide={() => setSmShowU(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="U">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowV(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowV}
        onHide={() => setSmShowV(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="V">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowW(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowW}
        onHide={() => setSmShowW(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="W">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowX(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowX}
        onHide={() => setSmShowX(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="X">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowY(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowY}
        onHide={() => setSmShowY(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="Y">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>


    <Card className="m-3 mt-5 shadow border" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
      <Card.Body className="d-flex justify-content-center">
        <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setSmShowZ(true)}>Click to enlarge</Button>
      </Card.Body>
    </Card>
    <Modal
        size="sm"
        show={smShowZ}
        onHide={() => setSmShowZ(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="Z">
          <Card.Img variant="top" src="http://thelearningsite.info/wp-content/uploads/2013/11/flashcard-alphabet-letter-c-car.jpg" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>C is for Cat</Modal.Body>
      </Modal>

   
   </Container>
    
  );
}


export default FlashCard;