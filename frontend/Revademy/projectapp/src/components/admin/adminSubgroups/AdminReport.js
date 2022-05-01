import React from 'react';
import AdminNav from "./AdminNav";
import {Container, Row} from "react-bootstrap";
import AdminReportFacts from "./adminReportSubGroups/adminReportFacts";
import AdminReportDisplay from "./adminReportSubGroups/AdminReportDisplay";

const AdminReport = () => {
    return (
        <>
        <section>
            <Container>

            <section>
                <AdminNav/>
            </section>

            <section>
                <Row>
                    <h1 className="report-title">Admin Report</h1>
                </Row>
                    <AdminReportFacts/>
                    <AdminReportDisplay/>

            </section>

            </Container>
        </section>




        </>
    );
};

export default AdminReport;