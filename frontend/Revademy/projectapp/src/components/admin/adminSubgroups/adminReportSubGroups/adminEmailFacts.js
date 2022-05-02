import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import AdminReportDisplay from "./AdminReportDisplay";

const AdminReportFacts = () => {



    return (
        <>

            <Row>
                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container flex-md-row">
                                <h7 className="fact-title">Total Reports Pending :</h7>
                                <p className="fact-number">#</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container flex-md-row">
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
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container flex-md-row">
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