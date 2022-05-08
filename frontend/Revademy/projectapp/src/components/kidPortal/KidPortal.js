import React from 'react';
import 'antd/dist/antd.css';
<<<<<<< HEAD
import {Avatar, Row} from 'antd';
import { UserOutlined } from '@ant-design/icons'; 
=======
>>>>>>> e25555b4db8052a9d2394bc1e95a1009c5ecff73
import './kidportal.css';
import AvatarSelector from './AvatarSelector';
import GameIcon from "../icons/game_icon.png";
import QuizIcon from "../icons/quiz_icon.png";
import MusicIcon from "../icons/music_icon.png";
import StoryIcon from "../icons/storytelling_icon.png";
import BackgroundColor from './BackgroundColor';
<<<<<<< HEAD
import Color from './BackgroundColor';
import {Container, Col } from "react-bootstrap";
=======
>>>>>>> e25555b4db8052a9d2394bc1e95a1009c5ecff73


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
        <div style={{backgroundColor: this.state.color} }>
            
            <div className='kid-header'>
                <h3 className='kid-welcome'>Hello</h3>
                <BackgroundColor setColor={this.setColor.bind(this)} />
                <AvatarSelector />
            </div>
                <div>
                <value />
                </div>
            <div className='kid-page-body'>
                <Container>
                    <Row>
                        <Col>
                            <a className='games-button'><img src={ GameIcon} alt="game button" /></a>
                        </Col>
                <a className='quizzes-button'><img src={ QuizIcon } alt="quiz button" /></a>
                <a className='music-button'><img src={ MusicIcon} alt="music button" /></a>
                <a className='storytelling-button'><img src={ StoryIcon} alt="story button" /></a>
                    </Row>
                </Container>
            </div>
        </div>
    );
};
};
export default Portal;