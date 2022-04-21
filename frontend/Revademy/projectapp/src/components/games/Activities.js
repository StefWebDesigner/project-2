import React from 'react';
import NavbarMain from "../navbar/NavbarMain";
import {Link} from "react-router-dom";

const Activities = () => {

    return (
        <>
            <NavbarMain/>
            <h1>Games</h1>
            <Link to="/matchingGame">Matching Game</Link>
            <p>------------------------------------</p>
            <Link to="/hangman">Hangman</Link>

        </>
    );
};

export default Activities;
