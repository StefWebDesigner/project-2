import React from 'react';
import {Card, Col, Row} from "react-bootstrap";

const AdminReportFacts = () => {
    return (
        <>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Reports Pending :</h7>
                                <p className="fact-number">#</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Most Reported Location :</h7>
                                <p className="fact-number">#</p>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>

                {/*<Col>*/}
                {/*    <div className="color-verticle">*/}
                {/*        <span className=""></span>*/}
                {/*    </div>*/}
                {/*</Col>*/}

                <Col>
                    <Card>
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Fixed Bugs :</h7>
                                <p className="fact-number">#</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/*<div className="color-line">*/}
                {/*    <span></span>*/}
                {/*</div>*/}
            </Row>


        </>
    );
};

export default AdminReportFacts;