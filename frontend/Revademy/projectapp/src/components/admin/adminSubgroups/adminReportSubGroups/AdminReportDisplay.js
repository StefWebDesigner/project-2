import React, {useEffect, useState} from 'react';
import {Container, Row, Table} from "react-bootstrap";
import axios from "axios";


const AdminReportDisplay = () => {

    // const [NotAvaiableContent, setNotAvailableContent] = useState(false)
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

    // function contentAvailable() {
    //     if (showAllPendingReports() == 0) {
    //         setNotAvailableContent(true)
    //     }
    //
    // }

    useEffect(() => {
        showAllPendingReports();

    }, []);


    return (
        <>
            <section>
                <Container>

                    <Row>
                        <h7>All Pending reports</h7>
                    </Row>

                    {/*SHOW PENDING COLUMNS */}
                    <Row>
                        {
                            showPendingReports ?

                                //SHOW REPORTS
                                showPendingReports.map((pendingReports, index) => {
                                    // <div key={pendingReports.caseId}>
                                    return (
                                        <div key={pendingReports.caseId}>

                                            <Table striped bordered hover>
                                                <thead>
                                                <tr>
                                                    <th>Case Id</th>
                                                    <th>Location</th>
                                                    <th>Subject</th>
                                                    <th>Issue</th>
                                                    <th>Ignore</th>
                                                    <th>Resolved</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td> {pendingReports.caseId}</td>
                                                    <td> {pendingReports.locationTypes}</td>
                                                    <td> {pendingReports.bugTitle}</td>
                                                    <td> {pendingReports.bugDescription}</td>
                                                    <td> button</td>
                                                    <td> button</td>
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