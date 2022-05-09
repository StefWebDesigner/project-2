import React from 'react';
import AdminNav from "./AdminNav";
import AdminEmailDisplay from "./adminEmailSubGroups/AdminEmailDisplay";

const AdminEmailSupport = () => {
    return (
        <>
            <section className="fade-in-animation admin-background">
            <AdminNav/>
            <h1 className="admin-main-title">Feedback</h1>

            <AdminEmailDisplay/>
        </section>


        </>
    );
};

export default AdminEmailSupport;