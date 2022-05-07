import React from 'react';
import {Col, Container, Row, Table} from "react-bootstrap";
import AdminReportReportViewer from "../adminReportSubGroups/AdminReportReportViewer";
import {BsDash} from "react-icons/bs";
import {useEffect, useState} from "@types/react";
import axios from "axios";

const AdminHomeContentDisplay = () => {


    //FOR PENDING REPORTS
    const [showPendingReports, setShowPendingReports] = useState([]);
    const [deteteReport, setDeleteReport] = useState([])
    const [pendingReports, setPendingReports] = useState([])
    const [viewer, setViewer] = useState(null)



    //SHOW ALL PENDING CONTENT
    const showAllPendingReports = () => {
        // e.preventDefault()
        axios.get("http://localhost:8080/report/all")
            .then(response => {
                const reports = response.data
                console.log(reports)
                setShowPendingReports(response.data)
            })
    }

    const deleteReport = (caseId) => {

        axios.delete(`http://localhost:8080/report/delete?caseId=${caseId}`)
            .then(response => {
                setDeleteReport(response.data)
            })

        alert("Successfully deleted")
        showAllPendingReports()
    }


    async function viewCaseId(caseId) {
        axios.get(`http://localhost:8080/report/${caseId}`)
            .then(response => {
                setViewer(response.data)
            })
    }


    // const viewButton = (case_id) => {
    //     console.log(case_id)
    //
    //     axios.get(`http://localhost:8080/report/${caseId}`)
    //         .then(response => {
    //             setViewer(response.data)
    //         })
    // }

    useEffect(() => {
        showAllPendingReports();
    }, []);





    return (
        <>
            <section>
                <Container>

                    <Row>
                        <h7 className="admin-sub-title"> All Announcements</h7>
                    </Row>

                    <Row>
                        <Table striped bordered hover className="admin-tables">
                            <thead>
                            <tr>
                                <th className="report-td">Case Id</th>
                                <th className="report-td">Location</th>
                                <th className="report-td">Resolved</th>
                            </tr>
                            </thead>

                            <tbody>

                            {
                                showPendingReports.length !== 0 ?

                                    //SHOW REPORTS
                                    showPendingReports.map((pendingReports, index) => {
                                        return (
                                            <tr key={pendingReports.caseId}>
                                                <td className="report-td">
                                                    {/*<button className="table-button" onClick={() => {*/}
                                                    {/*    viewButton(pendingReports.caseId)*/}
                                                    {/*}}>view*/}
                                                    {/*</button>*/}
                                                    <button
                                                        className="table-button"
                                                        onClick={() => viewCaseId(pendingReports.caseId)}
                                                    >view
                                                    </button>
                                                </td>
                                                <td className="report-td"> {pendingReports.caseId}</td>
                                                <td className="report-td"> {pendingReports.locationTypes}</td>
                                                <td className="report-td"> {pendingReports.bugTitle}</td>
                                                <td className="report-td"> {pendingReports.bugDescription}</td>
                                                <td className="report-td">
                                                    <button
                                                        className="table-button"
                                                        onClick={() => {deleteReport(pendingReports.caseId)}}
                                                    >
                                                        <BsDash/>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })

                                    //IF NO REPORTS PENDING
                                    :

                                    <aside>
                                        <Row>
                                            <Col xs={12}>
                                                <p className="text-center"> No Pending Reports</p>
                                            </Col>
                                        </Row>
                                    </aside>
                            }
                            </tbody>
                        </Table>
                    </Row>

                </Container>
            </section>

        </>
    );
};

export default AdminHomeContentDisplay;