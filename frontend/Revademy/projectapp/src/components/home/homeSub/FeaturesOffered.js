import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import gameIcon from '../../../kid_images/gamer_bot_badge.svg'
import {Link} from "react-router-dom";

const FeaturesOffered = () => {
    return (
        <>
            <section className="offer-container">
            {/*<h1 className="text-center"> Class Selection</h1>*/}
                    <Card >
                        <Container>
                        <Row>
                            <Card.Header className="offer-backgound">
                                <h2 className="offer-title">Get Out There & Learn!</h2>
                            </Card.Header>

                            <Col xs={12} sm={12} md={4}>
                                {/*Game*/}

                                <Container>
                                    <Card className="offer-card-items">
                                        <Card.Body>
                                            <div className="overlay-container">
                                                <img src={gameIcon}/>
                                                <div className="overlay">
                                                    <div className="overlay-text">
                                                        <p className="text-center">Checkout out the latest Games</p>
                                                    </div>
                                                    <div className="overlay-link">
                                                        <Link to="/activities">Games</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Col >

                            <Col xs={12} sm={12} md={4}>
                                {/*Events*/}
                                <Container>
                                    <Card className="offer-card-items">
                                        <Card.Body>
                                            <div className="overlay-container">
                                            <img src={gameIcon}/>
                                            <div className="overlay">
                                                <div className="overlay-text">
                                                    <p className="text-center">Got Some Exciting Event Lined up</p>
                                                    <p className="text-center">SIGN UP NOW!</p>
                                                </div>
                                                <div className="overlay-link">
                                                    <Link to="/events">Events</Link>
                                                </div>
                                            </div>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                {/*Progress*/}
                                <Container>
                                    <Card className="offer-card-items">
                                        <Card.Body>
                                            <div className="overlay-container">
                                                <img src={gameIcon}/>
                                                <div className="overlay">
                                                    <div className="overlay-text">
                                                        <p className="text-center">View Your progress!</p>
                                                    </div>
                                                    <div className="overlay-link">
                                                        <Link to="/learningportal">Learning Portal</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Col>

                            <Card.Footer className="offer-backgound">
                            </Card.Footer>
                        </Row>
                        </Container>
                    </Card>
            </section>

        </>
    );
};

export default FeaturesOffered;
