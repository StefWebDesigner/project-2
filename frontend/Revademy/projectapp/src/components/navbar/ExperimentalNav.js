import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import DataStore from "../../dataStore/dataStore";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import axios from "axios";

const ExperimentalNav = () => {

    const [logout, setLogout] = useState([])

    const { i18n, t } = useTranslation(["home"]);

    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en");
        }
    }, []);

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    const {user, setUser} = useContext(DataStore)
    let navigate = useNavigate();

    // function logout() {
    //     setUser(null);
    //     localStorage.removeItem("user");
    //     navigate('/');
    // }

    async function logoutUser(username){
       await axios.get(`http://localhost:8080/user/logout?username=${user.username}`)
            .then(response => {
                setLogout(response.data);
                setUser(null);
                localStorage.removeItem("user")
                alert("successfully logout out")
            })
    }

    return (
        <>
            <section>
                <Container className='navbar-container'>
                <Row>
                    <Col className="background-home">
                        <div className="link-container">
                            <Link className="home-link" to="/">{t("home")}</Link>
                        </div>
                    </Col>

                        {/* GOING TO MAKE A USER CONDITION WHERE LOGIN FOR NULL AND
                        IF EXISTING USER IT SHOW UP THE PORTAL
                     */}

                    { user ? (
                        <Col className="background-credentials">
                            <div className="link-container">
                                <li className="credentials-link" onClick={logoutUser}>{t("logout")}</li>
                            </div>
                        </Col>
                        ) : (

                        <Col className="background-credentials">
                            <div className="link-container">
                                <Link className="credentials-link" to="/login">{t("login")}</Link>
                            </div>
                        </Col>
                        )}

                    { user ? (

                            <Col className="background-credentials">
                        <div className="link-container">
                            <Link className="activites-link" to="/userportal">{t("userportal")}</Link>
                        </div>
                    </Col>
                    ) : (

                        ""

                        )}

                    <Col className="background-activities">
                        <div className="link-container">
                            <Link className="home-link" to="/opening">{t("kidportal")}</Link>
                        </div>
                    </Col>
                    
                    
                    <Col className="background-events">
                        <div className="link-container">
                            <Link className="credentials-link" to="/events">{t("events")}</Link>
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

                    <Col className="background-credentials">
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav-item'>
                                    <select className='nav-link  border-0 ml-1 mr-2'
                                    value={localStorage.getItem("i18nextLng")}
                                    onChange={handleLanguageChange}>
                                        <option value="en">English</option>
                                        <option value="es">Español</option>
                                        <option value="fr">Français</option>
                                    </select>
                                </li>    
                            </ul>
                    </Col>
                </Row>
                </Container>
            </section>
        </>
    );
};

export default ExperimentalNav;
