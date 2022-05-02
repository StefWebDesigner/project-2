import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {Col, Row} from "react-bootstrap";

const AdminReportReportViewer = (caseId) => {

    const [viewer, setViewer] = useState([])

    async function viewCaseId(caseId) {
        axios.get(`http://localhost:8080/report/{caseId}`)
            .then(response => {
                setViewer(response.data)
            })
    }
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
                    viewer.length!==0 ?
                        viewer.map((view, index) =>  {
                            return(
                                <div key={view.caseId}>
                                    <p>{view.caseId} </p>
                                    <p>{view.locationTypes} </p>
                                    <p>{view.bugTitle}</p>
                                    <p>{view.bugDescription}</p>
                                </div>
                            )
                        })

                        :

                        <aside>
                            <Row>
                                <Col xs={12}>
                                    <p className="text-center"> No Pending Reports</p>
                                </Col>
                            </Row>
                        </aside>


                }




            {/*    column of the type and when pressin button*/}


            </section>


        </>
    );
};

export default AdminReportReportViewer;