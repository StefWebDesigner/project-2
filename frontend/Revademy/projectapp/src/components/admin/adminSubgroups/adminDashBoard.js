import React from 'react';
import AdminNav from "./AdminNav";
import AdminReportFacts from "./adminReportSubGroups/adminReportFacts";
import {Container} from "react-bootstrap";
import AdminUserFacts from "./adminUserSubGroup/adminUserFacts";
import AdminEmailFacts from "./adminReportSubGroups/adminEmailFacts";
// import ReportCommonLocations from "./adminGraphs/ReportCommonLocations";

const AdminDashBoard = () => {
    return (
        <>
            <section>
                <Container>
                    <AdminNav/>
                    <h1 className="admin-main-title">DashBoard</h1>

                    {/* REPORT DASHBOARD*/}
                    <h2 className="admin-sub-title">Report DashBoard</h2>
                    <AdminReportFacts/>

                    {/*<ReportCommonLocations/>*/}

                    {/* REPORT DASHBOARD*/}
                    <h2 className="admin-sub-title">User DashBoard</h2>
                    <AdminUserFacts/>
                    <p>Add grpahs here</p>

                    {/* REPORT DASHBOARD*/}
                    <h2 className="admin-sub-title">Email DashBoard</h2>
                    <AdminEmailFacts/>
                    <p>Add grpahs here</p>


                </Container>
            </section>




        </>
    );
};

export default AdminDashBoard;