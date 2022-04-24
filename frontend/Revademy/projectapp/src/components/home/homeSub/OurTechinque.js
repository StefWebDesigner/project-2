import React from 'react';
import {Card, Col, Row} from "react-bootstrap";

const OurTechinque = () => {
    return (
        <>

            <section>
                <Card>

                    <Card.Header className="custom-backgound">
                        <h2 className="techinque-title">What We Do :</h2>
                    </Card.Header>

                    <Row>
                        <Col xs={12} sm={4} md={4}>
                            <Card.Body className="mb-3">
                                <section>
                                    <img
                                        className="techinque-images"
                                        src="img/distance-learning.png"
                                    />
                                    <p className="tecnique-item">We are experts in working with distance learning</p>
                                </section>
                            </Card.Body>
                        </Col>

                        <Col xs={12} sm={4} md={4}>
                            <Card.Body className="mb-3">
                                <section>
                                    <img
                                        className="techinque-images"
                                        src="img/forEveryone.png"
                                    />
                                    <p className="tecnique-item">A learning program for all children </p>
                                </section>
                            </Card.Body>
                        </Col>

                        <Col xs={12} sm={4} md={4}>
                            <Card.Body className="mb-3">
                                <section>
                                    <img
                                        className="techinque-images"
                                        src="img/onlineCall.png"
                                    />
                                    <p className="tecnique-item">We make eLearning simple and easy</p>
                                </section>
                            </Card.Body>
                        </Col>

                    </Row>


                    <Card.Footer className="custom-backgound">
                    </Card.Footer>
                </Card>
            </section>


        </>
    );
};

export default OurTechinque;
