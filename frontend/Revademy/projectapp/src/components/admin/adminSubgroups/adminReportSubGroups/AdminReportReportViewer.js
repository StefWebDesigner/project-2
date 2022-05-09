import React, {Fragment} from 'react';
// import axios from "axios";
import {Col, Row, Card} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const AdminReportReportViewer = ({viewer}) => {
    console.log(viewer)
    //
    //     useEffect((caseId) => {
    //
    //     viewCaseId(caseId)
    //
    // },[])

    return (
        <>
            <section>
                {/*REPORT VIEWER*/}

                <Row>
                    <h7 className="admin-sub-title"> Report Viewer</h7>
                </Row>


                {
                    viewer ?

                        <Card className="admin-email-card">
                            <Card.Header>
                                <p className="admin-report-viewer-item viewer-header">{viewer.locationTypes} </p>
                            </Card.Header>
                            <Card.Body>
                                <p className="admin-report-viewer-item viewer-title">{viewer.bugTitle}</p>
                                <p className="admin-report-viewer-item">{viewer.bugDescription}</p>
                            </Card.Body>
                            <Card.Footer></Card.Footer>

                        </Card>

                        :

                        <aside>
                            <Row>
                                <Col xs={12}>
                                    <p className="text-center"> No Pending Reports</p>
                                </Col>
                            </Row>
                        </aside>


                }

            </section>


        </>
    );
};

export default AdminReportReportViewer;