import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
// import AdminReportDisplay from "../adminReportSubGroups/AdminReportDisplay";
import axios from "axios";

const AdminUserFacts = () => {

    const [allUsersFact, setAllUsersFact] = useState([]);
    const [totalAdmin, setTotalAdmin] = useState([]);
    const [totalUsers, setTotalUsers] = useState([]);



    const getAllUserFact = () => {
        axios.get("http://localhost:8080/user/all")
            .then(response => {
                setAllUsersFact(response.data);
            })
    }


    const getTotalAdmin = () => {
        axios.get("http://localhost:8080/user/admin")
            .then(response => {
                setTotalAdmin(response.data);
            })
    }

    const getTotaUsers = () => {
        axios.get(" http://localhost:8080/user/userCount")
            .then(response => {
                setTotalUsers(response.data);
            })
    }






    useEffect(() => {

        getAllUserFact();
        getTotalAdmin();
        getTotaUsers();

    })


    return (
        <>

            <Row>
                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container ">
                                <h7 className="fact-title">Total Users :</h7>
                                <p className="fact-number">{allUsersFact.length}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Admin :</h7>
                                <p className="fact-number">{totalAdmin}</p>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>

                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total User :</h7>
                                <p className="fact-number">{totalUsers}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


        </>
    );
};

export default AdminUserFacts;