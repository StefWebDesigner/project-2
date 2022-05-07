import React from 'react';
import {Link} from "react-router-dom";
import ExperimentalNav from '../navbar/ExperimentalNav';
import HangmanPreview from './hangman/HangmanPreview';

const Activities = () => {

    return (
        <>
            <ExperimentalNav/>
            <div>
            <h1>Games</h1>
            
            <div> 
            < HangmanPreview />
            <Link to="/matchingGame">Matching Game</Link>
            </div>
            
            <div>
            
            <Link to="/hangman">Hangman</Link>
            </div>
            </div>

        </>
    );
};

export default Activities;
