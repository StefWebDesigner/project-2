import React from 'react';
import ReactDOM from "react-dom";
// import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import './kidportal.css';
import AvatarSelector from './AvatarSelector';
import GirlAvatar from "../avatars/girl_avatar.png";
import BoyAvatar from "../avatars/boy_avatar.png";
import DuckAvatar from "../avatars/duck_avatar.png";
import GameIcon from "../icons/game_icon.png";
import QuizIcon from "../icons/quiz_icon.png";
import MusicIcon from "../icons/music_icon.png";
import StoryIcon from "../icons/storytelling_icon.png";
import BackgroundColor from './BackgroundColor';
import Color from './BackgroundColor';


const Portal = (color) => {

    return (
        <div className="kid-page-main">
            <div className='kid-header'>
                <h3 className='kid-welcome'>Hello</h3>
                <BackgroundColor />
                { <img src={GirlAvatar} className="kid-avatar" />  }
            </div>
            <div className='kid-page-body'>
                <a className='games-button'><img src={ GameIcon} alt="game button" /></a>
                <a className='quizzes-button'><img src={ QuizIcon } alt="quiz button" /></a>
                <a className='music-button'><img src={ MusicIcon} alt="music button" /></a>
                <a className='storytelling-button'><img src={ StoryIcon} alt="story button" /></a>
            </div>
        </div>
    );
};

export default Portal;