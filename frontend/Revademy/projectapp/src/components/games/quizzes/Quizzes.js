import React from 'react';
import {Link} from "react-router-dom";
import ExperimentalNav from '../../navbar/ExperimentalNav';

const Quizzes = () => {

    return (
        <>
            <ExperimentalNav/>
            <h1>Quizzes</h1>
            <Link to="/colorQuiz">Color Quiz</Link>
            <p>---------------------------------------</p>
            <Link to="/animalQuiz">Animal Quiz</Link>
            <p>---------------------------------------</p>
            <Link to="/soundQuiz">Sound Quiz</Link>
            

        </>
    );
};

export default Quizzes;