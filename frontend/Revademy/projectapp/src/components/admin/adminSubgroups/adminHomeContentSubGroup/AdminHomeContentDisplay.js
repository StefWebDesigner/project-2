import React from 'react';
import {Col, Container, Row, Table} from "react-bootstrap";
// import AdminReportReportViewer from "../adminReportSubGroups/AdminReportReportViewer";
import {BsDash} from "react-icons/bs";
import {useEffect, useState} from "react";
import axios from "axios";

const AdminHomeContentDisplay = () => {

    const [showAnnouncements, setShowAnnouncements] = useState([]);
    const [deteteAnnouncement, setDeteteAnnouncement] = useState([])
    // const [pendingReports, setPendingReports] = useState([])
    // const [viewer, setViewer] = useState(null)



    //SHOW ALL PENDING CONTENT
    const showAllAnnouncement = () => {
        axios.get("http://localhost:8080/announcement/all")
            .then(response => {
                const reports = response.data
                console.log(reports)
                setShowAnnouncements(response.data)
            })
    }

    const deleteAccouncementFunction = (contentId) => {
        axios.delete(`http://localhost:8080/announcement/delete/contentId=${contentId}`)
            .then(response => {
                setDeteteAnnouncement(response.data)
            })

        alert("Successfully deleted")
        showAllAnnouncement()
    }


    useEffect(() => {
        showAllAnnouncement();
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
                                <th className="report-td">Id</th>
                                <th className="report-td">Content</th>
                                <th className="report-td">Remove</th>
                            </tr>
                            </thead>

                            <tbody>

                            {
                                showAnnouncements.length !== 0 ?

                                    //SHOW REPORTS
                                    showAnnouncements.map((news, index) => {
                                        return (
                                            <tr key={news.contentId}>
                                                <td className="report-td"> {news.contentId}</td>
                                                <td className="report-td"> {news.contentBody}</td>
                                                <td className="report-td">
                                                    <button
                                                        className="table-button"
                                                        onClick={() => {deleteAccouncementFunction(news.contentId)}}
                                                    >
                                                        <BsDash/>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :

                                    <aside>
                                        <Row>
                                            <Col xs={12}>
                                                <p className="text-center"> No Pending Announcement</p>
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