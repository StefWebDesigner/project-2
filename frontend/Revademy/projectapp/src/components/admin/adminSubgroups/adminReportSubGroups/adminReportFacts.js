import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
// import AdminReportDisplay from "./AdminReportDisplay";
import axios from "axios";
// import ReportCommonLocations from "../adminGraphs/ReportCommonLocations";

const AdminReportFacts = () => {

    const [allReport, setAllReport] = useState([]);
    const [bugLocation, setBugLocation] = useState([]);
    const [countLocation, setCountLocation] = useState([]);

    const getAllReportFact = () => {
        axios.get("http://localhost:8080/report/counttotalreport")
            .then(response => {
                setAllReport(response.data);
            })
    }

     const getMostBugByLocation = () => {
         axios.get("http://localhost:8080/report/commonlocation")
             .then(response => {
                 setBugLocation(response.data);
             })
     }

    const getMostCount = () => {
        axios.get("http://localhost:8080/report/countlocation")
            .then(response => {
                setCountLocation(response.data);
            })
    }


    useEffect(() => {
        getAllReportFact()
        getMostBugByLocation()
        getMostCount()

    })

    return (
        <>

            <Row>
                <Col>
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
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Most Reported Location :</h7>
                                <p className="fact-number">{bugLocation}</p>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>

                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Fixed Bugs :</h7>
                                <p className="fact-number">{countLocation}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


        </>
    );
};

export default AdminReportFacts;