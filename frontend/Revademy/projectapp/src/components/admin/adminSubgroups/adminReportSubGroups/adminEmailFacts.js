import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
// import AdminReportDisplay from "./AdminReportDisplay";
import axios from "axios";

const AdminEmailFacts = () => {

    const [allEmailFact, setAllEmailFact] = useState([]);

    const getAllEmailFact = () => {
        axios.get("http://localhost:8080/emailsupport/all")
            .then(response => {
                setAllEmailFact(response.data);
            })
    }

    useEffect(() => {

        getAllEmailFact();

    })

    return (
        <>

            <Row>
                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Feedback :</h7>
                                <p className="fact-number">{allEmailFact.length}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Most Reported Location :</h7>
                                <p className="fact-number">#</p>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>

                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Fixed Bugs :</h7>
                                <p className="fact-number">#</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </>
    );
};

export default AdminEmailFacts;