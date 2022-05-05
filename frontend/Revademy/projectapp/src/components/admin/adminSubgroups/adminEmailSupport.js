import React from 'react';
import AdminNav from "./AdminNav";
import AdminEmailDisplay from "./adminEmailSubGroups/AdminEmailDisplay";

const AdminEmailSupport = () => {
    return (
        <>
            <AdminNav/>
            <h1 className="admin-main-title">Email Support</h1>

            <AdminEmailDisplay/>


        </>
    );
};

export default AdminEmailSupport;