import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

//IT WILL BE A SIDE BAR

const NavbarMain = () => {
    return (
        <>
            <Fragment>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/activites">Activities</Link>
                <Link to="/events">Events</Link>

            </Fragment>
        </>
    );
};

export default NavbarMain;
