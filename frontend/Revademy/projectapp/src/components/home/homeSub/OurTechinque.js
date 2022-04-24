import React from 'react';
import {Card, Row} from "react-bootstrap";

const OurTechinque = () => {
    return (
        <>

            <section>

                <h2 className="techinque-title">What We Do :</h2>

                <Card>
                    <Row>
                        <Card.Body>
                            <section>
                                <img
                                    className="techinque-images"
                                    src="img/distance-learning.png"
                                />
                                <p className="tecnique-item">We are experts in working with distance learning</p>
                            </section>
                            <section>
                                <img
                                className="techinque-images"
                                src="img/forEveryone.png"
                                />
                                <p className="tecnique-item">A learning program for all children </p>
                            </section>
                            <section>
                                <img
                                    className="techinque-images"
                                    src="img/onlineCall.png"
                                />
                                <p className="tecnique-item">We make eLearning simple and easy</p>
                            </section>
                        </Card.Body>
                </Row>
                </Card>
            </section>


            
        </>
    );
};

export default OurTechinque;
