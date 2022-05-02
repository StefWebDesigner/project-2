import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const AdminNav = () => {
    return (
        <>

            <Fragment>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Admin Home</Link>
                <Link to="/emailsupport">Email Support</Link>
                <Link to="/adminevents">Event</Link>
                <Link to="/reports">Report</Link>
                <Link to="/adminhomepanel">Home</Link>
                <Link to="/adminuserpannel">User</Link>
            </Fragment>

        </>
    );
};

export default AdminNav;