import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import gameIcon from '../../../kid_images/gamer_bot_badge.svg'

const FeaturesOffered = () => {
    return (
        <>
            <section>
                <Container className="offer-container">
            {/*<h1 className="text-center"> Class Selection</h1>*/}
                    <Card >
                        <Row>
                            <Card.Header className="offer-backgound">
                                <h2 className="offer-title">Our Activities</h2>
                            </Card.Header>


                            <Col xs={12} sm={12} md={4}>
                                {/*Game*/}
                                <Card className="offer-card-items">
                                    <Card.Body>
                                        <img src={gameIcon}/>
                                    </Card.Body>
                                </Card>
                            </Col >

                            <Col xs={12} sm={12} md={4}>
                                {/*Events*/}
                                <Card className="offer-card-items">
                                    <Card.Body>
                                        <img src={gameIcon}/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                {/*Progress*/}
                                <Card className="offer-card-items">
                                    <Card.Body>
                                        <img src={gameIcon}/>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Card.Footer className="offer-backgound">
                            </Card.Footer>
                        </Row>

                    </Card>
                </Container>
            </section>

        </>
    );
};

export default FeaturesOffered;
