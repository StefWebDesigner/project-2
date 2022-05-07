import React, {useContext} from 'react';
import {FaSmileBeam} from "react-icons/fa";
import DataStore from "../../dataStore/dataStore";
import {Card, Col, Container, Row} from "react-bootstrap";
import Logo from "./homeSub/Logo";
import { useTranslation } from 'react-i18next';


const HomeHeader = () => {

    const {t} = useTranslation(["home", "common"]);

    const {user} = useContext(DataStore)

    return (
        <>
            <section className="background-header-image">
                {/*<Container className="background-header-image">*/}
                <Row>
                    <h1 className="home-header-title">{t("welcometorevademy")}</h1>
                </Row>

                    <Row>
                    {/*    LOGO    */}
                        <Logo/>
                    </Row>
                <Row>
                    {  user ? <h2 className="home-header-user">{t("welcome")} {user.username} </h2> : ""}
                </Row>
                <Row>
                    <h4 className="home-header-title-subtitle"><FaSmileBeam/> {t("learningsofunyoudontnotice")}<FaSmileBeam/></h4>
                </Row>
                <Row>

                    <Col>
                        <Card className="home-header-card-values-1">
                            <h5 className="home-header-values-1">{t("tailorenglishclasses")}</h5>
                            <Card.Footer className="values-backgound">
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="home-header-card-values-2">
                            <h5 className="home-header-values-2">{t("dynamicenglishlearning")}</h5>
                            <Card.Footer className="values-backgound">
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="home-header-card-values-3">
                            <h5 className="home-header-values-3">{t("funandinteractive")}</h5>
                            <Card.Footer className="values-backgound">
                            </Card.Footer>
                        </Card>
                    </Col>


                </Row>






                {/*<Row>*/}
                {/*    <p className="home-header-title-subtitle"><FaSmileBeam/> Where learning is FUN!<FaSmileBeam/></p>*/}
                {/*</Row>*/}
                {/*</Container>*/}
            </section>

        </>
    );
};

export default HomeHeader;
