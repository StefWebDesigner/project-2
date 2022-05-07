import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import DataContext from "../../dataStore/dataStore";
import './user.css';
import { useTranslation } from 'react-i18next';

const LoginUser = () => {

    const {t}=useTranslation(["register", "common"]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(DataContext);

    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        //ADD VERIFICATION

        await axios.get(`http://localhost:8080/user/login?username=${username}&password=${password}`)
            .then(({data}) => {

                console.log(data);

                setUser(data);
                localStorage.setItem("user", JSON.stringify(data));
                alert("You login in successfully")
                navigate("/");
            })
    }

    return (
        <>
            <section className="fade-in-animation login-backgound">
                <Container className="login-container ">

                    <Card className="login-card">
                        <Form className="login-form-container">
                            <h1 className="login-title">{t("register:login")}</h1>
                            <Form.Group>
                                <Form.Label className="input-label-username">
                                    <h4> {t("register:enterusername")}</h4>
                                </Form.Label>
                                <Form.Control
                                    className="login-input"
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    onChange={(e) => {
                                        setUsername(e.target.value)
                                    }
                                    }
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="login-label">
                                    <h4>{t("register:enterpassword")}</h4>
                                </Form.Label>
                                <Form.Control
                                    className="login-input"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }
                                    }
                                    required
                                />
                            </Form.Group>
                            <div className="button-login-container">
                                <button className="button-login"onClick={login}>{t("common:submit")} </button>
                            </div>
                        </Form>
                        <div className="button-login-container">
                            <Row>
                                <Col>
                                    <Link to="/register" className="login-link"> {t("createaccount")}</Link>
                                </Col>
                                <Col>
                                    <Link to="/forgotPassword" className="login-link"> {t("forgotpassword")}?</Link>
                                </Col>
                            </Row>
                        </div>
                    </Card>

                    {/*<Link to="/forgotPassword" className="login-link"> Forgot Password?</Link>*/}
                </Container>
            </section>

        </>
    );
};

export default LoginUser;
