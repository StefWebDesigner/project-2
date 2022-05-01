import React, {useEffect, useState} from 'react';
import {Container, Row, Table} from "react-bootstrap";
import axios from "axios";


const AdminReportDisplay = () => {

    //FOR PENDING REPORTS
    const [showPendingReports, setShowPendingReports] = useState([]);



    //SHOW ALL PENDING CONTENT
    async function showAllPendingReports() {
        // e.preventDefault()

        axios.get("http://localhost:8080/report/all")
            .then(response => {
                console.log(response.data)
                setShowPendingReports(response.data)
            })
    }

    useEffect(() => {
        showAllPendingReports();

    }, []);

    return (
        <>
            <section>
                <Container>

                    <Row>
                        <h7 className="admin-sub-title">All Pending reports</h7>
                    </Row>

                    {/*SHOW PENDING COLUMNS */}
                    <Row>

                        {
                            showPendingReports ?

                                //SHOW REPORTS
                                showPendingReports.map((pendingReports, index) => {
                                    return (
                                        <div key={pendingReports.caseId}>

                                            <Table striped bordered hover>
                                                <thead>
                                                <tr>
                                                    <th className="report-td">View</th>
                                                    <th className="report-td">Case Id</th>
                                                    <th className="report-td">Location</th>
                                                    <th className="report-td">Subject</th>
                                                    <th className="report-td">Issue</th>
                                                    <th className="report-td">Resolved</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr>
                                                    <td className="report-td"> view</td>
                                                    <td className="report-td"> {pendingReports.caseId}</td>
                                                    <td className="report-td"> {pendingReports.locationTypes}</td>
                                                    <td className="report-td"> {pendingReports.bugTitle}</td>
                                                    <td className="report-td"> {pendingReports.bugDescription}</td>
                                                    <td className="report-td"> button</td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    )
                                })

                                //IF NO REPORTS PENDING
                                :

                                <aside>
                                    <p> No Pending Reports</p>
                                </aside>
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AdminReportDisplay;