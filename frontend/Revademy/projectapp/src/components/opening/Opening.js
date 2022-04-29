import React from 'react';
import spaceBackground from '../../kid_images/space_medium_long_rectangle.png';
import astronaut from '../../kid_images/astronaut_faceless.png';
import './opening.css';
import 'animate.css';

const OpeningAnimation = () => {
    return (
        <>  <div className="float-in-animation">
                <img src={spaceBackground} alt="animated space background" className='img-space' />
                <img src={astronaut} alt="faceless astronaut"className='img-astronaut' />
                <p className='company-name'>Revademy</p>
                <butoon className='enter-button'>Enter</butoon>
            </div>
        </>
    );
};

export default OpeningAnimation;