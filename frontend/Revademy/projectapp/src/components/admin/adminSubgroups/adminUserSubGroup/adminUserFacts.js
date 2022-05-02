import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import AdminReportDisplay from "../adminReportSubGroups/AdminReportDisplay";
import axios from "axios";

const AdminUserFacts = () => {

    const [allUsersFact, setAllUsersFact] = useState([]);

    const getAllUserFact = () => {
        axios.get("http://localhost:8080/user/all")
            .then(response => {
                setAllUsersFact(response.data);
            })
    }

    useEffect(() => {

        getAllUserFact();

    })


    return (
        <>

            <Row>
                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container flex-md-row">
                                <h7 className="fact-title">Total Users :</h7>
                                <p className="fact-number">{allUsersFact.length}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container flex-md-row">
                                <h7 className="fact-title">Total Admin :</h7>
                                <p className="fact-number">{allUsersFact.accountry}</p>
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
                                <h7 className="fact-title">Total User :</h7>
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

export default AdminUserFacts;