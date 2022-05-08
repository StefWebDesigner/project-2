import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com"
import axios from 'axios';
import ExperimentalNav from '../navbar/ExperimentalNav';
import {Card, Container, Form} from "react-bootstrap";
import { useTranslation } from 'react-i18next';

export default function ForgotPassword() {

    const {t}=useTranslation(["register", "common"]);

    const form = useRef();
    const [email, setEmail] = useState("");
    
    let tempData='';
    const sendEmail = (e) => {
        e.preventDefault();

        
      axios.post(`http://localhost:8080/forgot?email=${email}`)
      .then(({data}) => {
              
               if(data==="No User Matches This Email" || email===""){
                   alert(window.t("nousermatches"))
               } else{
               tempData = data.token;
               
               var templateParams = {
                email: email,
                message: `http://localhost:3000/resetPassword/${tempData}`
            };
            emailjs.send('service_g35quvf', 'template_su0e0vu', templateParams, 'MM-Fl5TdQ9ZHirR5H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
               alert(window.t("checkyouremail"))
           }}
       ).catch(
           err => {
               console.log(err)
           }
       )
    
     e.target.reset()
    }
 
    
        return(
            <>
            <section className="fade-in-animation login-backgound">
            <ExperimentalNav/>
            <Container className="login-container ">
            <Card className="login-card">
            <Form ref={form} className="login-form-container" onSubmit={sendEmail}>
                <h1 className="login-title">{t("register:forgotpassword")}</h1>
                <Form.Group>
                <Form.Label className="login-label"> <h4>{t("enteremail")}</h4></Form.Label>
                    <Form.Control className="login-input" type='email' placeholder='Email Address' name='email' onChange={e => setEmail(e.target.value)}/>
                </Form.Group>
                <div className="button-login-container">
                <button className="button-login">
                <span>
                    <h4>{t("common:submit")}</h4>
                </span>
                </button>
                </div>
            </Form>
            </Card>
            </Container>
            </section>
            </>
        )
   
}

