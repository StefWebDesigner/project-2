import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Button, Container, Form} from "react-bootstrap";
import axios from "axios";
import DataContext from "../../dataStore/dataStore";

const LoginUser = () => {

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
            <section className="fade-in-animation">
                <Container>
                <Form>
                        <h2 className="login-title">Login in</h2>
                    <Form.Group>
                        <Form.Label>
                            <h3> Enter Username</h3>
                        </Form.Label>
                        <Form.Control
                            name="username"
                            type="text"
                            onChange={(e) => {
                                setUsername(e.target.value)}
                        }
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            <h3> Enter Password</h3>
                        </Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            onChange={(e) =>  {
                                setPassword(e.target.value)}
                            }
                            required
                        />
                    </Form.Group>
                    <Button className="login-button"
                        onClick={login}
                    >
                        <h4>Sumbit</h4>
                    </Button>


                </Form>

                <Link to="/register" className="login-link"> Create an Account</Link>
                <Link to="/forgotPassword" className="login-link"> Forgot Password?</Link>
                </Container>
            </section>

        </>
    );
};

export default LoginUser;
