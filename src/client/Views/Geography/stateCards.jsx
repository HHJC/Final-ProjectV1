import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import { useHistory } from "react-router-dom";
// import { FaMapMarkerAlt } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import { GiPineTree } from 'react-icons/gi';
import { GiFlowerPot } from 'react-icons/gi';
import { GiEgyptianBird } from 'react-icons/gi';

const StateCards = () => {
    const [mdShowAL, setmdShowAL] = useState(false);
    const [mdShowAK, setmdShowAK] = useState(false);
    const [mdShowAZ, setmdShowAZ] = useState(false);



    return (

        <Container className="main row d-flex justify-content-center m-auto p-10" style={{ width: '100rem' }}>

            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147675/isolated/preview/3db339fd0ae12cb494ef2c41249c0c28-alabama-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowAL(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal
                size="md"
                show={mdShowAL}
                onHide={() => setmdShowAL(false)}
                aria-labelledby="example-modal-sizes-title-md"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="AL">
                <Modal.Body className="d-flex justify-content-center"><h3>State: Alabama (AL)</h3></Modal.Body>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center"><h3>Alabama state flag:</h3></Modal.Body>
                        <Card.Img className="d-flex justify-content-center m-auto" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/2560px-Flag_of_Alabama.svg.png" style={{ width: '20rem', margin: '5px'  }}/>
                <Card.Img className="d-flex justify-content-center m-auto" variant="top" src="https://i.pinimg.com/736x/d1/8a/19/d18a198739c697c1442fd80fefc5e365--flower-tree-alabama.jpg" style={{ width: '30rem' }}/>
                <Modal.Body className="d-flex justify-content-center m-0"><GiPineTree className="m-1 d-flex align-bottom"/> State tree: Southern Pine</Modal.Body>
                <Modal.Body className="d-flex justify-content-center m-0"><GiFlowerPot className="m-1 d-flex align-bottom"/> State flower: Camellia</Modal.Body>
                <Modal.Body className="d-flex justify-content-center m-0"><GiEgyptianBird className="m-1 d-flex align-bottom"/> State bird: Yellowhammer</Modal.Body>

            </Modal>

            {/* end alabama*/}


            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147677/isolated/preview/94de1721666d0ff4f6445ac0dd11d764-alaska-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowAK(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal
                size="md"
                show={mdShowAK}
                onHide={() => setmdShowAK(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="AK">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Alaska (AK)</h3></Modal.Body>


                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="d-flex justify-content-center"><h3>Alaska state flag:</h3></Modal.Body>
                <Card.Img className="d-flex justify-content-center m-auto" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/1920px-Flag_of_Alaska.svg.png" style={{ width: '20rem', margin: '5px' }} />

                <Card.Img className="d-flex justify-content-center m-auto" variant="top" src="https://i.pinimg.com/originals/42/6f/4b/426f4b3f5d176e7185bb9766ceb09258.gif" style={{ width: '30rem', margin: '5px'  }} />
                <Modal.Body className="d-flex justify-content-center"><GiEgyptianBird className="m-1 d-flex align-bottom"/> State bird: Willow Ptarmigan</Modal.Body>
                <Modal.Body className="d-flex justify-content-center"><GiFlowerPot className="m-1 d-flex align-bottom"/>State flower: Forget-me-not</Modal.Body>
                <Modal.Body className="d-flex justify-content-center"><GiPineTree className="m-1 d-flex align-bottom"/>State tree: Sitka Spruce</Modal.Body>
            </Modal>


            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147680/isolated/preview/cc9969a4d2a3ee79d59317cb9351a47d-arizona-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowAZ(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal
                size="md"
                show={mdShowAZ}
                onHide={() => setmdShowAZ(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="AZ">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Arizona (AZ)</h3></Modal.Body>


                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="d-flex justify-content-center"><h3>Arizona state flag:</h3></Modal.Body>
                <Card.Img className="d-flex justify-content-center m-auto" variant="top" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/1599px-Flag_of_Arizona.svg.png" style={{ width: '20rem', margin: '5px'  }} />

                <Card.Img className="d-flex justify-content-center m-auto" variant="top" src="https://i.pinimg.com/originals/a5/27/f0/a527f04e458e48f202ba74934d42863b.gif" style={{ width: '30rem', margin: '5px'  }} />
                <Modal.Body className="d-flex justify-content-center"><GiEgyptianBird className="m-1 d-flex align-bottom"/> State bird: Paloverde</Modal.Body>
                <Modal.Body className="d-flex justify-content-center"><GiFlowerPot className="m-1 d-flex align-bottom"/>State flower: Saguaro Cactus</Modal.Body>
                <Modal.Body className="d-flex justify-content-center"><GiPineTree className="m-1 d-flex align-bottom"/>State tree: Cactus Wren</Modal.Body>
            </Modal>



        </Container>
    );

}

export default StateCards;