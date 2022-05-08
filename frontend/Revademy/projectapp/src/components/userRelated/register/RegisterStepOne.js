import React, {useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import validator from "validator";
import { useTranslation } from 'react-i18next';


const RegisterStepOne = ({nextStep, handleFormData, values}) => {

    const {t}=useTranslation(["register"]);

    //CREATING THE ERROR STATE FORM THE VALIDATION
    const [error, setError] = useState(false);

    //FORM USING THE FORM VALIDATION
    const submitFormData = (e) => {
        e.preventDefault();

        if(
            validator.isEmpty(values.firstname) ||
            validator.isEmpty(values.lastname)
        ) {
            setError(true)
        } else {
            nextStep();
        }

    };

    return (
        <>
            <section>
          
                <Card style={{ marginTop: 100, borderRadius: 15 }}>
                    <Card.Body>
                        <Form className="login-form-container" onSubmit={submitFormData}>
                            {/*SECTION FOR FIRSNAME*/}
                            <Form.Group className="mb-3">
                                <Form.Label className="input-label-username">{t("firstname")}</Form.Label>
                                <Form.Control
                                    style={{border: error ? "2px solid red" : ""}}
                                    className="login-input"
                                    name="firstName"
                                    defaultValue={values.firstname}
                                    type="text"
                                    placeholder="Firstname"
                                    onChange={handleFormData("firstname")}
                                    required

                                />
                            {/* ERROR MESSAGE   */}
                                {
                                    error ? (
                                        <Form.Text style={{color: "red"}}>
                                            {t("thisisrequired")}
                                        </Form.Text>
                                    ) : (
                                        ""
                                    )
                                }
                            </Form.Group>
                            {/*SECTION FOR LASTNAME*/}
                            <Form.Group>
                                <Form.Label className="login-label">{t("lastname")}</Form.Label>
                                <Form.Control
                                    style={{border: error ? "2px solid red" : ""}}
                                    className="login-input"
                                    name="lastName"
                                    type="text"
                                    defaultValue={values.lastname}
                                    placeholder="Last name"
                                    onChange={handleFormData("lastname")}
                                    required

                                />
                            </Form.Group>
                        {/* BUTTON SECTION */}
                        <div className="button-login-container">
                            <Button
                            className="button-login"
                                variant="primary"
                                type="submit"
                            >
                                {t("continue")}
                            </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                
            </section>
        </>


    )
}

export default RegisterStepOne;
