import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import axios from "axios";

const AdminReportFacts = () => {

    const [allReport, setAllReport] = useState([]);

    const getAllReportFact = () => {
        axios.get("http://localhost:8080/report/counttotalreport")
            .then(response => {
                setAllReport(response.data);
            })
    }

    useEffect(() => {
        getAllReportFact()

    })

    return (
        <>
            <Row>
                <Col>
                </Col>
                <Col xs={6}>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Reports Pending :</h7>
                                <p className="fact-number">{allReport}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                </Col>
            </Row>
        </>
    );
};

export default AdminReportFacts;