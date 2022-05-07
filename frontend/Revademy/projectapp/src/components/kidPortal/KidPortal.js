import React from 'react';
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons'; 
import './kidportal.css';
import AvatarSelector from './AvatarSelector';
import GameIcon from "../icons/game_icon.png";
import QuizIcon from "../icons/quiz_icon.png";
import MusicIcon from "../icons/music_icon.png";
import StoryIcon from "../icons/storytelling_icon.png";
import BackgroundColor from './BackgroundColor';
import Color from './BackgroundColor';


class Portal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          color: "white"
        };
    }
    setColor(input) {
        this.setState({
            color: input
          });
    }

    render () {

    return (
        <div style={{backgroundColor: this.state.color, height: '100vh', width: '100vw' } }>
            
            <div className='kid-header'>
                <h3 className='kid-welcome'>Hello</h3>
                <BackgroundColor setColor={this.setColor.bind(this)} />
                <AvatarSelector />
            </div>
                <div>
                <value />
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
};
export default Portal;