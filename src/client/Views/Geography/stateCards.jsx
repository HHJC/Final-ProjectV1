import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'

const StateCards = () => {
    const [mdShowAL, setmdShowAL] = useState(false);
    const [mdShowAK, setmdShowAK] = useState(false);
    const [mdShowAZ, setmdShowAZ] = useState(false);
    const [mdShowAR, setmdShowAR] = useState(false);
    const [mdShowCA, setmdShowCA] = useState(false);
    const [mdShowCO, setmdShowCO] = useState(false);
    const [mdShowCT, setmdShowCT] = useState(false);
    const [mdShowDE, setmdShowDE] = useState(false);
    const [mdShowFL, setmdShowFL] = useState(false);
    const [mdShowGA, setmdShowGA] = useState(false);
    const [mdShowHI, setmdShowHI] = useState(false);
    const [mdShowID, setmdShowID] = useState(false);
    const [mdShowIL, setmdShowIL] = useState(false);
    const [mdShowIN, setmdShowIN] = useState(false);
    const [mdShowIA, setmdShowIA] = useState(false);
    const [mdShowKS, setmdShowKS] = useState(false);
    const [mdShowKY, setmdShowKY] = useState(false);
    const [mdShowLA, setmdShowLA] = useState(false);
    const [mdShowME, setmdShowME] = useState(false);
    const [mdShowMD, setmdShowMD] = useState(false);
    const [mdShowMA, setmdShowMA] = useState(false);
    // const [mdShowMI, setmdShowMI] = useState(false);
    // const [mdShowMN, setmdShowMN] = useState(false);
    // const [mdShowMS, setmdShowMS] = useState(false);
    // const [mdShowMO, setmdShowMO] = useState(false);
    // const [mdShowMT, setmdShowMT] = useState(false);
    // const [mdShowNE, setmdShowNE] = useState(false);
    // const [mdShowNV, setmdShowNV] = useState(false);
    // const [mdShowNH, setmdShowNH] = useState(false);
    // const [mdShowNJ, setmdShowNJ] = useState(false);
    // const [mdShowNM, setmdShowNM] = useState(false);
    // const [mdShowNY, setmdShowNY] = useState(false);
    // const [mdShowNC, setmdShowNC] = useState(false);
    // const [mdShowND, setmdShowND] = useState(false);
    // const [mdShowOH, setmdShowOH] = useState(false);
    // const [mdShowOK, setmdShowOK] = useState(false);
    // const [mdShowOR, setmdShowOR] = useState(false);
    // const [mdShowPA, setmdShowPA] = useState(false);
    // const [mdShowRI, setmdShowRI] = useState(false);
    // const [mdShowSC, setmdShowSC] = useState(false);
    // const [mdShowSD, setmdShowSD] = useState(false);
    // const [mdShowTN, setmdShowTN] = useState(false);
    // const [mdShowTX, setmdShowTX] = useState(false);
    // const [mdShowUT, setmdShowUT] = useState(false);
    // const [mdShowVT, setmdShowVT] = useState(false);
    // const [mdShowVA, setmdShowVA] = useState(false);
    // const [mdShowWA, setmdShowWA] = useState(false);
    // const [mdShowWV, setmdShowWV] = useState(false);
    // const [mdShowWI, setmdShowWI] = useState(false);
    // const [mdShowWY, setmdShowWY] = useState(false);



    return (

        <Container className="main row d-flex justify-content-center m-auto p-10" style={{ width: '100rem' }}>

            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147675/isolated/preview/3db339fd0ae12cb494ef2c41249c0c28-alabama-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowAL(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowAL}
                onHide={() => setmdShowAL(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="AL">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Alabama (AL)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/2560px-Flag_of_Alabama.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Alabama.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.aces.edu/wp-content/uploads/2019/02/shutterstock_611375129-2.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Alabama is the Camellia.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://mrdehnefourthgradeclassalabama.weebly.com/uploads/1/1/7/6/117631801/longleafpine1_orig.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Alabama is the Southern Longleaf Pine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/NorthernFlickerMaleALbirdsymbol.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Alabama is the Yellowhammer.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>

            {/* end alabama*/}



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147677/isolated/preview/94de1721666d0ff4f6445ac0dd11d764-alaska-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowAK(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowAK}
                onHide={() => setmdShowAK(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="AK">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Alaska (AK)</h3></Modal.Body>




                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '43rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/1920px-Flag_of_Alaska.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Alaska.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2017/08/fmt-division.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Alaska is the Forget-me-not.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.alaska.org/assets/content/cache/made/assets/content/advice/Alaska_Species_Guide/Tree%20Species/580_387_c1/Sitka_SpruceSitkaSpruce.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Alaska is the Sitka Spruce.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Lagopus_lagopus_-_adult_%28Denali%2C_2010%29.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Alaska is the Willow Ptarmigan.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>
            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src=" https://images.vexels.com/media/users/3/147680/isolated/preview/cc9969a4d2a3ee79d59317cb9351a47d-arizona-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowAZ(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowAZ}
                onHide={() => setmdShowAZ(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="AK">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Arizona (AZ)</h3></Modal.Body>




                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/1599px-Flag_of_Arizona.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Arizona.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.nps.gov/sagu/getinvolved/images/Photo-1-Saguaro-flowers-and-buds-T-Foley.jpg?maxwidth=1200&autorotate=false" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Arizona is the Saguaro Cactus.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn2.hubspot.net/hubfs/1546852/AAA%20Social%202019/palo%20verde%20landscape%20AZ.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Arizona is the Palo Verde.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn.mos.cms.futurecdn.net/Yuh2DryHnoVRB3ZsB2hxpk-1200-80.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Arizona is the Cactus Wren.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>
            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src=" https://images.vexels.com/media/users/3/147682/isolated/preview/1b5e92d1fb0706466541c0372ed49c26-arkansas-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowAR(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowAR}
                onHide={() => setmdShowAR(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="AR">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Arkansas (AR)</h3></Modal.Body>
                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/1200px-Flag_of_Arkansas.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Arkansas.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Apple_blossom_02B.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Arkansas is the Apple Blossom.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2015/04/white-pine.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Arkansas is the Pine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.allaboutbirds.org/guide/assets/og/75712191-1200px.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Arkansas is the Mockingbird.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>
            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147702/isolated/preview/2095f15fc1d24a7e474b47109ce3fd97-california-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowCA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowCA}
                onHide={() => setmdShowCA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="CA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: California (CA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/1200px-Flag_of_California.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of California.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}

                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/golden-poppy-square-saija-lehtonen.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of California is the Golden Poppy.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.tripsavvy.com/thmb/QaQy6Yq1MVQYj_B4hrHDN7z2tIs=/2121x1414/filters:fill(auto,1)/SequoiatreeinYosemitePark-5bc6aca44cedfd0026930ea8.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of California is the California Redwood.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://live.staticflickr.com/4542/26517504769_b09ea93357_b.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of California is the California Valley Quail.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>
            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147737/isolated/preview/cd95c483d08cb8b067e1b32c654a633a-colorado-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowCO(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowCO}
                onHide={() => setmdShowCO(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="CO">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Colorado (CO)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg/2650px-Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Colorado.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.pinimg.com/originals/3a/af/22/3aaf2265c792c0e9f4c5e75407c7c182.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Colorado is the Rocky Mountain Columbine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn.shopify.com/s/files/1/0947/8766/products/12_d024af9c-fadc-4f2b-a9d9-7e8f7da86fb1.jpeg?v=1512518046" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Colorado is the Blue Pruce.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.thespruce.com/thmb/rm6XHF0EfQ_zM-867ENKJyPTcNw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/colorado-bird-58963e915f9b5874ee498360.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Colorado is the Lark Bunting.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src=" https://images.vexels.com/media/users/3/147742/isolated/preview/c10422c88250670b51f7fab5c587ea1f-connecticut-state-plain-map-by-vexels.png
" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowCT(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowCT}
                onHide={() => setmdShowCT(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="CT">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Connecticut (CT)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/1200px-Flag_of_Connecticut.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Connecticut.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://live.staticflickr.com/55/179861099_f676600670_b.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Connecticut is the Mountain Laurel.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Connecticut is the White Oak.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://audubonportland.org/wp-content/uploads/2019/01/American-Robin-5D3_8701_filtered-SC.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Connecticut is the American Robin.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147747/isolated/preview/4f0a6fa02d31d7f2d7114630b83a6186-delaware-state-plain-map-by-vexels.png
" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowDE(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowDE}
                onHide={() => setmdShowDE(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="DE">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Delaware (DE)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/1200px-Flag_of_Delaware.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Delaware.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/peachblossomspeachflowers.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Delaware is the Apple Blossom.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/Holly-Berries.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Delware is the American Holly.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.backyardchickens.com/reviews/blue-hen-of-delaware.10845/cover-image" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Delaware is the Delaware Blue Hen.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147768/isolated/preview/7d2520e0b7c496da9bdd00373a3170cb-florida-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowFL(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowFL}
                onHide={() => setmdShowFL(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="FL">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Florida (FL)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/1200px-Flag_of_Florida.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Florida.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.familyhandyman.com/wp-content/uploads/2019/06/shutterstock_256959421-Flower.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Florida is the Orange Blossom.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Spalmetto2.JPG/1200px-Spalmetto2.JPG" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Florida is the Sabal Palm.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i1.wp.com/einfon.com/wp-content/uploads/2019/05/State-Bird-Of-Florida.jpg?fit=945%2C531&ssl=1" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Florida is the Northern Mockingbird.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147779/isolated/preview/bd1cceb587c3df66bbc272f6ae4abbf2-georgia-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowGA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowGA}
                onHide={() => setmdShowGA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="GA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Georgia (GA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/1200px-Flag_of_Georgia_%28U.S._state%29.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Georgia.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/CherokeeRoseFlower.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Georgia is the Cherokee Rose.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/The_Big_Oak.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Georgia is the Live Oak.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://einfon.com/wp-content/uploads/2019/05/State-Bird-Of-Georgia.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Georgia is the Brown Thrasher.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147789/isolated/preview/ba1098fdab68b5315a4a79ff2e5dedfe-hawaii-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowHI(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowHI}
                onHide={() => setmdShowHI(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="HI">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Hawaii (HI)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/250px-Flag_of_Hawaii.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Hawaii.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://traveltoparadise.com/wp-content/uploads/2018/03/Hibiscus-720x380.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Hawaii is the Yellow Hibiscus.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/KukuitreeAleuritesmoluccana.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Hawaii is the Candlenut Tree</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/32/7f/af/shutterstock-346387145.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Hawaii is the Nene.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147811/isolated/preview/141e96fb35bbc618a0b2f48308f4427a-idaho-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowID(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowID}
                onHide={() => setmdShowID(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="ID">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Idaho (ID)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/1200px-Flag_of_Idaho.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Idaho.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.proplants.com/blog/wp-content/uploads/2012/08/idaho-hero.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Idaho is the Syringa.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://mtc.farm/wp-content/uploads/2018/01/western-white-pine-tree.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Idaho is the Western White Pine</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/symbol-place-images/mountainbluebirdonpine2.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Idaho is the Mountain Bluebird.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147813/isolated/preview/5988bedc8ec7b42d0d999d3c0dc350cd-illionois-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowIL(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowIL}
                onHide={() => setmdShowIL(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="IL">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Illinois (IL)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/1200px-Flag_of_Illinois.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Illinois.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.pinimg.com/originals/4c/13/d6/4c13d62d9437ce6d3dac87d6e7b3ce15.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Illinois is the Violet.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn11.bigcommerce.com/s-999jbj41m8/products/161/images/2929/swamp_white_oak__06607.1509382312.1280.1280__93452.1514168717.1280.1280.jpg?c=2" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Illinois is the White Oak</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/northerncardinalbird-7.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Illinois is the Northern Cardinal.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147816/isolated/preview/371651d9731cca71b710ee10add076cc-indiana-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowIN(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowIN}
                onHide={() => setmdShowIN(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="IN">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Indiana (IN)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/1200px-Flag_of_Indiana.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Indiana.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.gannett-cdn.com/-mm-/72d7a379e79c1e2d3c2cb6f4c6c56235a664d809/c=0-373-4032-2651/local/-/media/2017/05/19/INGroup/Indianapolis/636308061642087706-peony.jpg?width=3200&height=1680&fit=crop" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Indiana is the Peony.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://1.bp.blogspot.com/-NsYe-KaNaaQ/XPpKswwekbI/AAAAAAAAjNY/txG22tuyO3wC7fIUIUZLoah9jKM-PO_CwCLcBGAs/s1600/DSCF4417.JPG" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Indiana is the Tulip Poplar</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.wthr.com/sites/default/files/styles/article_image/public/images/2016/05/21/10609549_G.jpg?itok=FMlnfQ9C" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Indiana is the Cardinal.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147823/isolated/preview/1666aa2c3c0f773154fbde2ec2af141a-iowa-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowIA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowIA}
                onHide={() => setmdShowIA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="IA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Iowa (IA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/1200px-Flag_of_Iowa.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Indiana.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.proplants.com/blog/wp-content/uploads/2012/08/iowa-hero.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Iowa is the Wild Rose.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.thetreefarm.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/u/bur_oak_quercus_macrocarpa.png" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Iowa is the Bur Oak</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://einfon.com/wp-content/uploads/2019/03/State-Animal-Iowa.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Iowa is the American Goldfinch.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147827/isolated/preview/e4a5f81b7bdf6a7fb20f0599bf61b9f2-kansas-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowKS(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowKS}
                onHide={() => setmdShowKS(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="KS">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Kansas (KS)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/1200px-Flag_of_Kansas.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Kansas.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/symbol-place-images/PerfectSunflower.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Kansas is the Wild Sunflower.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.homestratosphere.com/wp-content/uploads/2019/05/Cottonwood-Trees-1-27-5.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Kansas is the Aigeiros</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://einfon.com/wp-content/uploads/2019/06/State-Bird-Of-Kansas.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Kansas is the Western Meadowlark.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src=" https://images.vexels.com/media/users/3/147829/isolated/preview/8491a9e473ce16b0cbfc6438eb22cf6b-kentucky-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowKY(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowKY}
                onHide={() => setmdShowKY(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="KY">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Kentucky (KY)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/1200px-Flag_of_Kentucky.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Kentucky.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/stateflowergoldenrod-bloom.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Kentucky is the Goldenrod.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.pinimg.com/originals/de/2c/b8/de2cb809859ddd403d37d151e46d0e6b.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Kentucky is the Tulip Tree</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/34695420214_ce86aa8b89_o.jpg?crop=0,0,2955,1846&wid=1640&hei=1025&scl=1.8018292682926829" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Kentucky is the Northern Cardinal.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://static.wixstatic.com/media/b5a7b9_034c0c6e17ab45bd9f91ab9e1a5c1eee~mv2.png/v1/fill/w_506,h_508,al_c,q_85,usm_0.66_1.00_0.01/lousiana-state-plain-map-by-Vexels.webp" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowLA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowLA}
                onHide={() => setmdShowLA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="LA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Louisiana (LA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/250px-Flag_of_Louisiana.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Louisiana.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://1.bp.blogspot.com/-5LLSH1jZn5A/UJx7akoKu_I/AAAAAAAANiU/kxn34hTfkb0/s1600/Southern+Magnolia+Flower+Wallpapers+01.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Louisiana is the Magnolia.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn.britannica.com/14/74914-050-03E81BCE/cypresses-swamp.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Louisiana is the Bald Cypress</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/7/79/Brown_pelican_-_natures_pics.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Kentucky is the Brown Pelican.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>


            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147838/isolated/preview/06d52e19429f8b9ed83a7c5d72a0b096-maine-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowME(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowME}
                onHide={() => setmdShowME(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="ME">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Maine (ME)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/1200px-Flag_of_Maine.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Maine.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.maine.gov/sos/kids/themes/kids/images/pinecone-tassel.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Maine is the White Pine Cone.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/whitepinemalecones.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Maine is the White Pine</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://townsquare.media/site/696/files/2019/02/Chickadee.jpg?w=980&q=75" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Maine is the Black-capped Chickadee.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>



            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147841/isolated/preview/660fe800f099cc70f2971a3537518f6b-maryland-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowMD(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowMD}
                onHide={() => setmdShowMD(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="MD">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Maryland (MD)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/1200px-Flag_of_Maryland.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Maryland.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/6d/e5/d9/shutterstock-614578205.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Maryland is the Black-Eyed Susan.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://blog.davey.com/media/984429/white_oak-aug.jpg" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Maryland is the White Oak</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://www.allaboutbirds.org/guide/assets/og/75258971-1200px.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Maryland is the Baltimore Oriole.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>




            <Card className="m-3 mt-5 shadow border" style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/147843/isolated/preview/cacc49bbbc348eae7c5d81845c5a9ade-massachusetts-state-plain-map-by-vexels.png" />
                <Card.Body className="d-flex justify-content-center">
                    <Button className="btn btn-danger mx-1 mt-auto" onClick={() => setmdShowMA(true)}>State flag & facts</Button>
                </Card.Body>
            </Card>
            <Modal className='d-flex justify-content-center'
                size="lg"
                show={mdShowMA}
                onHide={() => setmdShowMA(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="MA">
                        <Modal.Body className="d-flex justify-content-center"><h3>State: Massachusetts (MA)</h3></Modal.Body>

                        <>

                            {['bottom'].map((placement) => (
                                <>

                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flag'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/1200px-Flag_of_Massachusetts.svg.png" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">This is the state flag of Massachusetts.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flag</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Flower'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://amc-nh.org/resources/guides/wildflowers/images/Epigaea%20repens_Trailing%20Arbutus,%20Mayflower_primary_1_NH_20110514_Beth%20Zimmer_Trailing%20Arbutus%2001.jpg" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state flower of Massachusetts is the Trailing arbutus.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>

                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Flower</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>


                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Tree'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://cdn11.bigcommerce.com/s-f74ff/products/10228/images/26849/american-elm-1a__89057.1538766773.1280.1280.jpg?c=2" style={{ width: '40rem', height: '28rem' }}></img> <h4 className="d-flex justify-content-center">The state tree of Massachusetts is the American Elm.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Tree</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                        <>
                            {['bottom'].map((placement) => (
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover style={{ width: '43rem' }} id={`popover-positioned-${placement}`} >
                                                <Popover.Title className="d-flex justify-content-center" style={{ width: '43rem' }} as="h3">{'State Bird'}</Popover.Title>
                                                <Popover.Content style={{ width: '40rem' }}>
                                                    <img alt="" src="https://i.insider.com/5c1d361901c0ea4775113172?width=1300&format=jpeg&auto=webp" style={{ width: '40rem', height: '28rem' }}></img><h4 className="d-flex justify-content-center">The state bird of Massachusetts is the Black-capped Chickadee.</h4><p className="d-flex justify-content-center">(click the button again to close window)</p>
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="primary m-2">Click for State Bird</Button>
                                    </OverlayTrigger>{' '}
                                </>
                            ))}
                        </>

                    </Modal.Title>
                </Modal.Header>

            </Modal>





        </Container>
    );

}

export default StateCards;
