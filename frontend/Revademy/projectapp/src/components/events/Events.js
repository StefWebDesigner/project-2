import React from 'react';
import NavbarMain from "../navbar/NavbarMain";
import {Link} from "react-router-dom";
const Events = () => {

    return (
        <>
            <NavbarMain/>
            <h1>Events</h1>
            <Link to="/recalendar"></Link>

        </>
    );
};

export default Events;