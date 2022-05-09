import React from 'react';
import {Link} from "react-router-dom";
import ExperimentalNav from '../../navbar/ExperimentalNav';
import SoundQuizPic from "../../../kid_images/SoundQuizPic.jpg";
import AnimalQuizPic from "../../../kid_images/AnimalQuizPic.jpg";
import ColorQuizPic from "../../../kid_images/ColorQuizPic.jpg";
import { Col, Row } from 'react-bootstrap';
import "./Quizzes.css";

const Quizzes = () => {

    return (
        <>
        <section className='quizzes-section'>
            <ExperimentalNav/>
            <Row className='quizzes-title' xs="12">
            
            <h1>Quizzes</h1>
            
            
            </Row>

            <Row className='quizzes-main'>
                <Col xs="4">
                    <div>
                        <a href="/soundquiz"><img src={SoundQuizPic} /></a> <br />
                        <p>Sound Quiz</p>
                    </div>
                </Col>
                <Col xs="4">
                    <div>
                        <a href=" /animalquiz"><img src={AnimalQuizPic} /></a> <br />
                        <p>Animal Quiz</p>
                    </div>
            
                </Col>
                <Col xs="4">
                    <div>
                        <a href=" /colorquiz"><img src={ColorQuizPic} /></a> <br />
                        <p>Color Quiz</p>
                    </div>
            
                </Col>

            </Row>
        </section>
        </>
    );
};

export default Quizzes;