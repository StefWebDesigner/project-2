import React from 'react';
import {Link} from "react-router-dom";
import ExperimentalNav from '../navbar/ExperimentalNav';

const Activities = () => {

    return (
        <>
            <ExperimentalNav/>
            <h1>Games</h1>
            <Link to="/matchingGame">Matching Game</Link>
            <p>------------------------------------</p>
            <Link to="/hangman">Hangman</Link>
            <p>------------------------------------</p>
            <Link to="/quizzes">Quizzes</Link>
            <p>------------------------------------</p>

        </>
    );
};

export default Activities;
