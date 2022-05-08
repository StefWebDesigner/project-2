import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RegisterStepTwo from "./RegisterStepTwo";
import RegisterStepOne from "./RegisterStepOne";
import RegisterStepThree from "./RegisterStepThree";
import RegisterFinal from "./RegisterFinal";
import ExperimentalNav from '../../navbar/ExperimentalNav';

const Register = () => {

    //STATE FOR THE STEPS
    const [step, setStep] = useState(1);
    //STATE FOR THE FORMS
    const [formData, setFormData] = useState({
        firstname : "",
        lastname : "",
        username:"",
        accountTypes : "",
        ageType : "",
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

    const ProgressBar=({step})=>{
        return(
            <div className="progressBar" >
                <div className="first-step progress-step">

                </div>
                <div className={step===2||step===3||step===4?"filled-step second-step progress-step":"second-step progress-step"}>

                </div>
                <div  className={step===3 ||step===4?"filled-step second-step progress-step":"second-step progress-step"}>

                </div>
                <div  className={step===4?"filled-step second-step progress-step":"second-step progress-step"}>
                </div>

            </div>
        )

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
                <section className="fade-in-animation login-backgound">
                    <ExperimentalNav/>
                    <Container>
                        <Row>
                            <Col md={{span: 6, offset: 3}}>
                                <RegisterStepOne nextStep={nextStep} handleFormData={loginHandler} values={formData}/>
                                <ProgressBar step={step}/>
                            </Col>
                        </Row>
                    </Container>

                </section>
            );
        case 2:
            return (
                <section className="fade-in-animation login-backgound">
                    <ExperimentalNav/>
                    <Container>
                        <Row>
                            <Col md={{span: 6, offset: 3}}>
                                <RegisterStepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={loginHandler} values={formData}/>
                                <ProgressBar step={step}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            );
        case 3:
            return (
                <section className="fade-in-animation login-backgound">
                    <ExperimentalNav/>
                    <Container>
                        <Row>
                            <Col md={{span: 6,offset: 3}}>
                                <RegisterStepThree nextStep={nextStep} prevStep={prevStep} handleFormData={loginHandler} values={formData}/>
                                <ProgressBar step={step}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            );
        case 4:
            return (
                <section className="fade-in-animation login-backgound">
                    <ExperimentalNav/>
                    <Container>
                        <Row>
                            <Col md={{span: 6,offset: 3}}>
                                <RegisterFinal prevStep={prevStep} values={formData} setFormData={setFormData}/>
                                <ProgressBar step={step}/>
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
