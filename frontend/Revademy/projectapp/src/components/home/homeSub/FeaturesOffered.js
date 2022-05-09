import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import gameIcon from '../../../kid_images/gamer_bot_badge.svg'
import eventIcon from '../../../kid_images/spaceCityLarger.png'
import learningIcon from '../../../kid_images/alien.png'
import { useTranslation } from 'react-i18next';

// import gameIcon from '../../../kid_images/gamer_bot_badge.svg'

import {Link} from "react-router-dom";

const FeaturesOffered = () => {
    const {t}=useTranslation(["home", "common"]);
    return (
        <>
            <section className="offer-container">
            {/*<h1 className="text-center"> Class Selection</h1>*/}
                    <Card >
                        <Container>
                        <Row>
                            <Card.Header className="offer-backgound">
                                <h2 className="offer-title">{t("home:getoutthereandlearn")}</h2>
                            </Card.Header>

                            <Col xs={12} sm={12} md={4}>
                                {/*Game*/}

                                <Container>
                                    <Card className="offer-card-items">
                                        <Card.Body>
                                            <div className="overlay-container">
                                                <img src={gameIcon} alt='game icon'/>
                                                <div className="overlay">
                                                    <div className="overlay-text">
                                                        <p className="text-center">{t("home:checkoutthegames")}</p>
                                                    </div>
                                                    <div className="overlay-link">
                                                        <Link to="/activities">{t("common:games")}</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Col >

                            <Col xs={12} sm={12} md={4}>
                                {/*Events*/}
                                <Container>
                                    <Card className="offer-card-items">
                                        <Card.Body>
                                            <div className="overlay-container">
                                            <img src={eventIcon} alt='event icon'/>
                                            <div className="overlay">
                                                <div className="overlay-text">
                                                    <p className="text-center">{t("home:gotsomeevent")}</p>
                                                    {/*<p className="text-center">{t("home:signup")}</p>*/}
                                                </div>
                                                <div className="overlay-link">
                                                    <Link to="/events">{t("home:events")}</Link>
                                                </div>
                                            </div>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                {/*Progress*/}
                                <Container>
                                    <Card className="offer-card-items">
                                        <Card.Body>
                                            <div className="overlay-container">
                                                <img src={learningIcon} alt='learning icon'/>
                                                <div className="overlay">
                                                    <div className="overlay-text">
                                                        <p className="text-center">{t("home:viewyourprogress")}</p>
                                                    </div>
                                                    <div className="overlay-link">
                                                        <Link to="/opening">{t("home:kidportal")}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Container>
                            </Col>

                            <Card.Footer className="offer-backgound">
                            </Card.Footer>
                        </Row>
                        </Container>
                    </Card>
            </section>

        </>
    );
};

export default FeaturesOffered;
