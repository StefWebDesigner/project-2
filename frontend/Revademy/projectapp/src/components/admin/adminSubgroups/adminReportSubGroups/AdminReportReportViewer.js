import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {Col, Row} from "react-bootstrap";

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
                                <Fragment>
                                    <p>{viewer.caseId} </p>
                                    <p>{viewer.locationTypes} </p>
                                    <p>{viewer.bugTitle}</p>
                                    <p>{viewer.bugDescription}</p>
                                </Fragment>
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