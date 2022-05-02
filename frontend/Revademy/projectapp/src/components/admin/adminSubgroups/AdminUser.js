import React from 'react';
import AdminNav from "./AdminNav";
import AdminUserAllUsers from "./adminUserSubGroup/AdminUserAllUsers";

const AdminUser = () => {





    return (
        <>
            <AdminNav/>

            <h1 className="admin-main-title"> User Panel</h1>

            <h2 className="admin-sub-title"> User Details</h2>

            <h2 className="admin-sub-title"> Show All User</h2>

            <AdminUserAllUsers/>



        </>
    );
};

export default AdminUser;