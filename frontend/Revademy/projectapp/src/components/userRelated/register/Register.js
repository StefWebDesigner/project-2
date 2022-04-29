import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RegisterStepTwo from "./RegisterStepTwo";
import RegisterStepOne from "./RegisterStepOne";
import RegisterStepThree from "./RegisterStepThree";
import RegisterFinal from "./RegisterFinal";
import axios from "axios";

const Register = () => {

    //STATE FOR THE STEPS
    const [step, setStep] = useState(1);
    //STATE FOR THE FORMS
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        account : "",
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
        console.log("Entering loginHandler")
        const {value} = e.target;

        //UPDATING DATA STATES WHEN GOING BACK AND THEN ADDING NEW VARIABLES
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }
    console.log(step)


    switch(step) {

        case 1:
            return (
                <section>
                    <Container>
                        <Row>
                            <Col md={{span: 6, offset: 3}}>
                                <RegisterStepOne nextStep={nextStep} handleFormData={loginHandler} values={formData}/>
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
                                <RegisterStepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={loginHandler} values={formData}/>
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
                                <RegisterStepThree nextStep={nextStep} prevStep={prevStep} handleFormData={loginHandler} values={formData}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            );
        case 4:
            return (
                <section>
                    <Container>
                        <Row>
                            <Col md={{span: 6,offset: 3}}>
                                <RegisterFinal prevStep={prevStep} values={formData}/>
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

export default Register;
