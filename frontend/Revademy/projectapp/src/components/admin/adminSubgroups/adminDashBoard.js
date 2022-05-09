import React from 'react';
import AdminNav from "./AdminNav";
import AdminReportFacts from "./adminReportSubGroups/adminReportFacts";
import {Container} from "react-bootstrap";
import AdminUserFacts from "./adminUserSubGroup/adminUserFacts";
import AdminEmailFacts from "./adminReportSubGroups/adminEmailFacts";
import ReportCommonLocations from "./adminGraphs/ReportCommonLocations";
import FeedbackOverallFeedback from "./adminGraphs/FeedbackOverallFeedback";
import UserAcountGraph from "./adminGraphs/UserAcountGraph";
import AdminGameStats from "../AdminGameStats";

const AdminDashBoard = () => {
    return (
        <>
            <section className="fade-in-animation admin-background">
                <Container>
                    <AdminNav/>
                    <h1 className="admin-main-title">DashBoard</h1>


                    {/* REPORT DASHBOARD*/}
                    <h2 className="admin-sub-title">Report DashBoard</h2>
                    <AdminReportFacts/>
                    <ReportCommonLocations/>

                    {/*<ReportCommonLocations/>*/}

                    {/* User DASHBOARD*/}
                    <h2 className="admin-sub-title">User DashBoard</h2>
                    <AdminUserFacts/>
                    <UserAcountGraph/>

                    {/* REPORT DASHBOARD*/}
                    <h2 className="admin-sub-title">Email DashBoard</h2>
                    <AdminEmailFacts/>
                    <FeedbackOverallFeedback/>

                    {/* Game DASHBOARD*/}
                    <h2 className="admin-sub-title">Game DashBoard</h2>
                    <AdminGameStats/>

                    {/*<h2 className="admin-sub-title">Email DashBoard</h2>*/}
                    {/*<AdminEmailFacts/>*/}


                </Container>
            </section>




        </>
    );
};

export default AdminDashBoard;