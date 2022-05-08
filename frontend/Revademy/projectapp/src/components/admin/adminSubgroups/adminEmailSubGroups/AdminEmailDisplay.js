import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Col, Container, Row, Table} from "react-bootstrap";
import {BsDash} from "react-icons/bs";
import AdminEmailViewer from "./AdminEmailViewer";
import AdminEmailFacts from "../adminReportSubGroups/adminEmailFacts";

const AdminEmailDisplay = () => {

    //FOR PENDING REPORTS
    const [showAllEmails, setShowAllEmails] = useState([]);
    const [deteteEmail, setDeteteEmail] = useState([])
    const [emailViewer, setEmailViewer] = useState(null)



    //SHOW ALL PENDING CONTENT
    const showAllEmailsFunction = () => {
        // e.preventDefault()
        axios.get("http://localhost:8080/emailsupport/all")
            .then(response => {
                const reports = response.data
                console.log(reports)
                setShowAllEmails(response.data)
            })
    }

    const deleteEmails = (emailId) => {

        axios.delete(`http://localhost:8080/emailsupport/delete?emailId=${emailId}`)
            .then(response => {
                setDeteteEmail(response.data)
            })

        alert("Successfully deleted")
        showAllEmailsFunction()
    }


    async function viewEmailId(emailId) {
        axios.get(`http://localhost:8080/emailsupport/id=${emailId}`)
            .then(response => {
                setEmailViewer(response.data)
            })
    }

    useEffect(() => {
        showAllEmailsFunction();
    }, []);

    return (
        <>
            <section>
                <Container>

                    <AdminEmailFacts/>

                    <AdminEmailViewer emailViewer={emailViewer}/>

                    {/*SHOW PENDING COLUMNS */}
                    <Row>
                        <h7 className="admin-sub-title"> All Feedback Forms</h7>
                    </Row>

                    <Row>
                        <Table striped bordered hover className="email-admin-tables">
                            <thead>
                            <tr>
                                <th className="report-td">View</th>
                                <th className="report-td">Id</th>
                                <th className="report-td">From</th>
                                <th className="report-td">Recipient</th>
                                <th className="report-td">Subject</th>
                                <th className="report-td">Resolved</th>
                            </tr>
                            </thead>

                            <tbody>

                            {
                                showAllEmails.length !== 0 ?

                                    //SHOW REPORTS
                                    showAllEmails.map((emails, index) => {
                                        return (
                                            <tr key={emails.emailId}>
                                                <td className="report-td">

                                                    <button
                                                        className="table-button"
                                                        onClick={() => viewEmailId(emails.emailId)}
                                                    >view
                                                    </button>
                                                </td>
                                                <td className="report-td"> {emails.emailId}</td>
                                                <td className="report-td"> {emails.fromEmail}</td>
                                                <td className="report-td"> {emails.recipient}</td>
                                                <td className="report-td"> {emails.subject}</td>
                                                <td className="report-td">
                                                    <button
                                                        className="table-button"
                                                        onClick={() => {deleteEmails(emails.emailId)}}
                                                    >
                                                        <BsDash/>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })

                                    //IF NO EMAIL PENDING
                                    :
                                    ""

                                    // <aside>
                                    //     <Row>
                                    //         <Col xs={12}>
                                    //             <p className="text-center"> No Emails</p>
                                    //         </Col>
                                    //     </Row>
                                    // </aside>
                            }
                            </tbody>
                        </Table>
                        { showAllEmails.length === 0?
                            <aside>
                                <Row>
                                    <Col xs={12}>
                                        <p className="text-center"> No Emails</p>
                                    </Col>
                                </Row>
                            </aside>:
                            ""

                        }

                    </Row>

                </Container>
            </section>
        </>
    );
};

export default AdminEmailDisplay;