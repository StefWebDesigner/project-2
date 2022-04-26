import React, {useContext} from 'react';
import {FaSmileBeam} from "react-icons/fa";
import DataStore from "../../dataStore/dataStore";
import {Card, Col, Container, Row} from "react-bootstrap";
import Logo from "./homeSub/Logo";


const HomeHeader = () => {

    const {user} = useContext(DataStore)

    return (
        <>
            <section>
                <Container className="background-header-image">
                <Row>
                    <h1 className="home-header-title">Welcome to Revedamy!</h1>
                </Row>

                    <Row>
                    {/*    LOGO    */}
                        <Logo/>
                    </Row>
                <Row>
                    {  user ? <h2 className="home-header-user">Welcome {user} </h2> : ""}
                </Row>
                <Row>
                    <h4 className="home-header-title-subtitle"><FaSmileBeam/> Learning so fun you don't even notice!<FaSmileBeam/></h4>
                </Row>
                <Row>

                    <Col>
                        <Card className="home-header-card-values-1">
                            <h5 className="home-header-values-1">Tailor English Classes</h5>
                            <Card.Footer className="values-backgound">
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="home-header-card-values-2">
                            <h5 className="home-header-values-2">Dynamic English Learning</h5>
                            <Card.Footer className="values-backgound">
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="home-header-card-values-3">
                            <h5 className="home-header-values-3">Fun & Interactive</h5>
                            <Card.Footer className="values-backgound">
                            </Card.Footer>
                        </Card>
                    </Col>


                </Row>






                {/*<Row>*/}
                {/*    <p className="home-header-title-subtitle"><FaSmileBeam/> Where learning is FUN!<FaSmileBeam/></p>*/}
                {/*</Row>*/}
                </Container>
            </section>

        </>
    );
};

export default HomeHeader;
