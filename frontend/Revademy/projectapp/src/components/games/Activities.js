import React from 'react';
import {Link} from "react-router-dom";
import ExperimentalNav from '../navbar/ExperimentalNav';
import { Col, Image, Row } from 'react-bootstrap';
import "./Activities.css";
import MatchingGamePic from "../../kid_images/MatchingGamePic.jpg";
import HangmanPic from "../../kid_images/HangmanPic.jpg";

const Activities = () => {

    return (
        <>
        <section className='activity-section'>
            <ExperimentalNav/>
            <Row className='activity-title' xs="12">
            
            <h1>Games</h1>
            
            
            </Row>

            <Row className='activity-main'>
                <Col xs="6">
                    <div>
                        <a href="/matchingGame"><img src={MatchingGamePic} /></a> <br />
                        <p>MatchingGame</p>
                    </div>
                </Col>
                <Col xs="6">
                    <div>
                        <a href=" /hangman"><img src={HangmanPic} /></a> <br />
                        <p>Hangman</p>
                    </div>
            
                </Col>
            </Row>
        </section>
        </>
    );
};

export default Activities;
