import React from 'react';
import { Link } from "react-router-dom";
import spaceBackground from '../../kid_images/space_medium_long_rectangle.png';
import astronaut from '../../kid_images/astronaut_duck.png';
import './opening.css';
import 'animate.css';

const OpeningAnimation = () => {
    return (
        <>  <div className="float-in-animation">
                <img src={spaceBackground} alt="animated space background" className='img-space' />
                <img src={astronaut} alt="faceless astronaut"className='img-astronaut' />
                <p className='company-name'>Revademy</p>
                <Link to="/kidportal" className='enter-button'>Enter</Link>
                
            </div>
        </>
    );
};

export default OpeningAnimation;