import React, {useContext} from 'react';
import {FaSmileBeam} from "react-icons/fa";
import DataStore from "../../dataStore/dataStore";
import {Col, Container, Row} from "react-bootstrap";


const HomeHeader = () => {

    const {user} = useContext(DataStore)

    return (
        <>
            <section>
                <Container>
                <Row>
                    <h1 className="home-header-title">Welcome to Revedamy!</h1>
                </Row>
                <Row>
                    {  user ? <h2 className="home-header-user">Welcome {user} </h2> : ""}
                </Row>
                <Row>
                    <p className="home-header-title-subtitle"><FaSmileBeam/> Where learning is FUN!<FaSmileBeam/></p>
                </Row>
                </Container>
            </section>

        </>
    );
};

export default HomeHeader;
