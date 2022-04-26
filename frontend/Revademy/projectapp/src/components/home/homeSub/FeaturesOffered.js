import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import gameIcon from '../../../kid_images/gamer_bot_badge.svg'

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
                                            <img src={gameIcon}/>
                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Col >

                            <Col xs={12} sm={12} md={4}>
                                {/*Events*/}
                                <Container>
                                    <Card className="offer-card-items">
                                        <Card.Body>
                                            <img src={gameIcon}/>
                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                {/*Progress*/}
                                <Container>
                                    <Card className="offer-card-items">
                                        <Card.Body>
                                            <img src={gameIcon}/>
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
