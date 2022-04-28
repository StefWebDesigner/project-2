import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import DataStore from "../../dataStore/dataStore";

const ExperimentalNav = () => {

    const {user, setUser} = useContext(DataStore)

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <>
            <section>
                <Container>
                <Row>
                    <Col className="background-home">
                        <div className="link-container">
                            <Link className="home-link" to="/">Home</Link>
                        </div>
                    </Col>

                        {/* GOING TO MAKE A USER CONDITION WHERE LOGIN FOR NULL AND
                        IF EXISTING USER IT SHOW UP THE PORTAL
                     */}

                    { user ? (
                        <Col className="background-credentials">
                            <div className="link-container">
                                <li className="credentials-link" onClick={logout}>Logout</li>
                            </div>
                        </Col>
                        ) : (

                        <Col className="background-credentials">
                            <div className="link-container">
                                <Link className="credentials-link" to="/login">Login</Link>
                            </div>
                        </Col>
                        )}

                    { user ? (

                            <Col className="background-credentials">
                        <div className="link-container">
                            <Link className="activites-link" to="/learningportal">Learning Portal</Link>
                        </div>
                    </Col>
                    ) : (

                        ""

                        )}

                    <Col className="background-activities">
                        <div className="link-container">
                            <Link className="home-link" to="/activities">Activities</Link>
                        </div>
                    </Col>

                    <Col className="background-events">
                        <div className="link-container">
                            <Link className="credentials-link" to="/">Events</Link>
                        </div>
                    </Col>

                    {
                        user && user.accountTypes === 'ADMIN' ? (
                        <Col className="background-credentials">
                            <div className="link-container">
                                <Link className="activites-link" to="/adminportal">Admin</Link>
                            </div>
                        </Col>
                        ) : ""
                    }


                </Row>
                </Container>
            </section>
        </>
    );
};

export default ExperimentalNav;
