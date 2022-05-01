import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

function ResetPassword() {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    

    const params  = useParams();
    const token = params.id;

    let navigate = useNavigate();
    const passwordChange = (e) =>{
        let path = '/login';
        e.preventDefault();
        if(password1 === password2 && password1 !== ''){
            axios.post(`http://localhost:8080/forgot/reset?password=${password1}&token=${token}`)
            .then(({data}) => {
                console.log(data);
            }
    
        
            ).catch(
                err => {
                    console.log(err)
                }
            )
            navigate(path);
           } else{
            alert("Passwords do not match")
        }
    }
  return (
    <>
    <section className="fade-in-animation login-backgound">
                <Container className="login-container ">
                    <Card className="login-card">
            <Form className="login-form-container">
                <h1 className="login-title">Reset Password</h1>
                <Form.Group>
                    <Form.Label className="login-label">Enter New Password:</Form.Label>
                    <Form.Control className="login-input" type='password' placeholder='password' value={password1} onChange={e => setPassword1(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="login-label">Confirm New Password:</Form.Label>
                    <Form.Control className="login-input" type='password' placeholder='password' value={password2} onChange={e => setPassword2(e.target.value)}/>
                </Form.Group>
                <div className="button-login-container">
                <button className="button-login" onClick={passwordChange}>Submit</button>
                </div>
                </Form>
            </Card>
            </Container>
            </section>
            </>
  )
}

export default ResetPassword