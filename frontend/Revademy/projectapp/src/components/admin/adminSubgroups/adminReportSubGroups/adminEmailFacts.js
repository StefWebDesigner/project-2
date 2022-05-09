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

                <Col></Col>

                <Col xs={6}>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Feedback :</h7>
                                <p className="fact-number">{allEmailFact.length}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col></Col>



            </Row>

        </>
    );
};

export default AdminEmailFacts;