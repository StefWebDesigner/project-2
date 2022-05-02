import React from 'react';
import AdminNav from "./AdminNav";
import AdminUserAllUsers from "./adminUserSubGroup/AdminUserAllUsers";
import {Container, Row} from "react-bootstrap";
import AdminReportFacts from "./adminReportSubGroups/adminReportFacts";
import AdminReportDisplay from "./adminReportSubGroups/AdminReportDisplay";
import AdminUserAdd from "./adminUserSubGroup/AdminUserAdd";

const AdminUser = () => {





    return (
        <>

            <section className="admin-backgound">
                <Container>

                    <section>
                        <AdminNav/>
                    </section>

                    <section>
                        <Row>
                            <h1 className="admin-main-title"> User Panel</h1>
                        </Row>
                        <AdminUserAllUsers/>
                        <p>Add view User here</p>
                        <AdminUserAdd/>


                    </section>

                </Container>
            </section>









        </>
    );
};

export default AdminUser;