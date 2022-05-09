import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Card, Col, Row} from "react-bootstrap";

const AdminGameStats = () => {
    const [allEmailFact, setAllEmailFact] = useState([]);


    useEffect(() => {

        getAllEmailFact();

    })
    async function getAllEmailFact(){
        await axios.get("http://localhost:8080/emailsupport/all")
            .then(response => {
                setAllEmailFact(response.data);
            })
    }

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
                                <h7 className="fact-title">Total Feedback :</h7>
                                <p className="fact-number">{allEmailFact.length}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>




            </Row>

        </>
    );
};

export default AdminGameStats;