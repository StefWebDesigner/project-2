import React from 'react';
import NavbarMain from '../../navbar/NavbarMain';
import {Link} from "react-router-dom";

const Quizzes = () => {

    return (
        <>
            {/* <NavbarMain/> */}
            <h1>Quizzes</h1>
            <Link to="/colorQuiz">Color Quiz</Link>
            

        </>
    );
};

export default Quizzes;