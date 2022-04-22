import React from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

const ExperimentalNav = () => {
    return (
        <>
            <section>
                <Row>
                    <Col className="background-home">
                        <div className="link-container">
                            <Link className="home-link" to="/">Home</Link>
                        </div>
                    </Col>
                    <Col className="background-credentials">
                        <div className="link-container">
                            <Link className="credentials-link" to="/">Login/Register</Link>
                        </div>
                    </Col>
                    <Col className="background-activities">
                        <div className="link-container">
                            <Link className="activites-link" to="/">Activites</Link>
                        </div>
                    </Col>
                    <Col className="background-activities">
                        <div className="link-container">
                            <Link className="activites-link" to="/">Events</Link>
                        </div>
                    </Col>
                    <Col className="background-activities">
                        <div className="link-container">
                            <Link className="activites-link" to="/">Learning Portal</Link>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default ExperimentalNav;
