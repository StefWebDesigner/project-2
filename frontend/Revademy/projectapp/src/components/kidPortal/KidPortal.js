import React from 'react';
import './kidportal.css';
import AvatarSelector from './AvatarSelector';
import GameIcon from "../icons/game_icon.png";
import QuizIcon from "../icons/quiz_icon.png";
import MusicIcon from "../icons/music_icon.png";
import StoryIcon from "../icons/storytelling_icon.png";
import BackgroundColor from './BackgroundColor';
import {Container, Col, Row} from "react-bootstrap";


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
            <Container>
            

            <div className='kid-header'>
            <Row>
                <Col xs={3}>
                    <h3 className='kid-welcome'>Hello</h3>
                </Col>
                <Col xs={5}>
                    <BackgroundColor setColor={this.setColor.bind(this)} />
                </Col>
                <Col xs={4}>
                    <AvatarSelector />
                </Col>
            </Row>

            </div>
            
            
            <div className='kid-page-body'>
            <Row>
                <Col xs={3}>
                <a className='games-button'><img src={ GameIcon} alt="game button" /></a>
                </Col>
                <Col xs={3}>
                <a className='quizzes-button'><img src={ QuizIcon } alt="quiz button" /></a>
                </Col>
                <Col xs={3}>
                <a className='music-button'><img src={ MusicIcon} alt="music button" /></a>
                </Col>
                <Col xs={3}>
                <a className='storytelling-button'><img src={ StoryIcon} alt="story button" /></a>
                </Col>
            </Row>
            </div>
            </Container>
        </div>
        
    );
};
};
export default Portal;