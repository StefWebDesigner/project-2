import React from 'react';
import AdminNav from "./AdminNav";
import {Container, Row} from "react-bootstrap";
import AdminReportFacts from "./adminReportSubGroups/adminReportFacts";

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

            </section>

            </Container>
        </section>




        </>
    );
};

export default AdminReport;