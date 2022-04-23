import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import LoginStepTwo from "./LoginStepTwo";
import LoginFinal from "./LoginFinal";
import LoginStepOne from "./LoginStepOne";

const Login = () => {

    //STATE FOR THE STEPS
    const [step, setStep] = useState(1);
    //STATE FOR THE FORMS
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        age : "",
        email : "",
        password : ""
    })

    //FUNCTION WILL GO TO THE NEXT STEP
    const nextStep = () => {
        setStep(step + 1);
    }

    //FOR GOING BACK A STEP
    const prevStep = () => {
        setStep(step - 1);
    }

    //HANDLING THE DATA INFO
    const loginHandler = input => e => {
        const {value} = e.target;

        //UPDATING DATA STATES WHEN GOING BACK AND THEN ADDING NEW VARIABLES
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }


    switch(step) {

        case 1:
            return (
                <section>
                    <Container>
                        <Row>
                            <Col md={{span: 6, offset: 3}}>
                                <LoginStepOne nextStep={nextStep} loginHandler={loginHandler} values={formData}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            );
        case 2:
            return (
                <section>
                    <Container>
                        <Row>
                            <Col md={{span: 6, offset: 3}}>
                                <LoginStepTwo nextStep={nextStep} loginHandler={loginHandler} values={formData}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            );
        case 3:
            return (
                <section>
                    <Container>
                        <Row>
                            <Col md={{span: 6,offset: 3}}>
                                <LoginFinal values={formData}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            );
        default:
            return (
                <div className="App">
                </div>
            );
    }
}

export default Login;
