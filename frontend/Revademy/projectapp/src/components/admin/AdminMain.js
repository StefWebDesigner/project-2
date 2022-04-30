import React from 'react';
import AdminDashBoard from "./adminSubgroups/adminDashBoard";
import AdminEmailSupport from "./adminSubgroups/adminEmailSupport";
import AdminReport from "./adminSubgroups/AdminReport";

const AdminMain = () => {
    return (
        <>


            <h1>Admin Portal</h1>
            <AdminDashBoard/>
            <AdminEmailSupport/>
            <AdminReport/>

        </>
    );
};

export default AdminMain;