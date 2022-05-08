import React from 'react';
import {Link} from "react-router-dom";
import ExperimentalNav from '../../navbar/ExperimentalNav';

const Quizzes = () => {

    return (
        <>
             <ExperimentalNav/>
            <div>
            <h1>Quizzes</h1>
            
            <div> 
            
            <Link to="/soundquiz">Sound Quiz</Link>
            </div>
            
            <div>
            
            <Link to="/colorquiz">Color Quiz</Link>
            </div>
            </div>

            <div> 
    
            <Link to="/animalquiz">Animal Quiz</Link>
            </div>
            

        </>
    );
};

export default Quizzes;