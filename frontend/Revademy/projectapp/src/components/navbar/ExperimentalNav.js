import React from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

const ExperimentalNav = () => {
    return (
        <>
            <section>
                <Row>
                    <Col className="background-one">
                        <div className="link-container">
                            <Link className="link-one" to="/">Home</Link>
                        </div>
                    </Col>
                    <Col className="background-two">
                        <div className="link-container">
                            <Link className="link-two" to="/">Login/Register</Link>
                        </div>
                    </Col>
                    <Col className="background-three">
                        <div className="link-container">
                            <Link className="link-three" to="/">About US</Link>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default ExperimentalNav;
