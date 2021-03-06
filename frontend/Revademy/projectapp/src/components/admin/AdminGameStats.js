import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Card, Col, Row} from "react-bootstrap";

const AdminGameStats = () => {
    const [allAnimals, setAllAnimals] = useState([]);
    const [allColor, setAllColor] = useState([]);
    const [allSound, setAllSound] = useState([]);
    const [allHangman, setAllHangman] = useState([]);
    const [allMatching, setAllMatching] = useState([]);


    useEffect(() => {

        getTotalAnimalCount();
        getTotalColorCount();
        getTotalSoundCount();
        getTotalHangmanCount();
        getTotalMatchingCount();

    })
    async function getTotalAnimalCount(){
        await axios.get("http://localhost:8080/gameplays/totalanimalscore")
            .then(response => {
                setAllAnimals(response.data);
            })
    }

    async function getTotalColorCount(){
        await axios.get("http://localhost:8080/gameplays/totalcolorscore")
            .then(response => {
                setAllColor(response.data);
            })
    }

    async function getTotalSoundCount(){
        await axios.get("http://localhost:8080/gameplays/totalsoundscore")
            .then(response => {
                setAllSound(response.data);
            })
    }

    async function getTotalHangmanCount(){
        await axios.get("http://localhost:8080/gameplays/totalhangmanscore")
            .then(response => {
                setAllHangman(response.data);
            })
    }

    async function getTotalMatchingCount(){
        await axios.get("http://localhost:8080/gameplays/totalmatchingscore")
            .then(response => {
                setAllMatching(response.data);
            })
    }

    return (
        <>

            <Row>

                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Animal Quiz Played :</h7>
                                <p className="fact-number">{allAnimals}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Color Quiz Played :</h7>
                                <p className="fact-number">{allColor}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="fact-card">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Sound Quiz Played :</h7>
                                <p className="fact-number">{allSound}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="fact-card mt-4">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Hangman Played:</h7>
                                <p className="fact-number">{allHangman}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={1}></Col>

                <Col>
                    <Card className="fact-card mt-4">
                        <Card.Body>
                            <div className="fact-container">
                                <h7 className="fact-title">Total Matching Played :</h7>
                                <p className="fact-number">{allMatching}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    );
};

export default AdminGameStats;