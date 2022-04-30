import React, {useState} from 'react';
import {Button, Card, Form, } from "react-bootstrap";
import validator from "validator";

const RegisterStepOne = ({nextStep, handleFormData, values}) => {

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
                <Card>
                    <Card.Body>
                        <Form onSubmit={submitFormData}>
                            {/*SECTION FOR FIRSNAME*/}
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    style={{border: error ? "2px solid red" : ""}}
                                    name="firstName"
                                    defaultValue={values.firstname}
                                    type="text"
                                    placeholder="Firstname"
                                    onChange={handleFormData("firstname")}
                                />
                            {/* ERROR MESSAGE   */}
                                {
                                    error ? (
                                        <Form.text style={{color: "red"}}>
                                            This is a required field
                                        </Form.text>
                                    ) : (
                                        ""
                                    )
                                }
                            </Form.Group>
                            {/*SECTION FOR LASTNAME*/}
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    style={{border: error ? "2px solid red" : ""}}
                                    name="lastName"
                                    type="text"
                                    defaultValue={values.lastname}
                                    placeholder="Last name"
                                    onChange={handleFormData("lastname")}
                                />
                            </Form.Group>
                        {/* BUTTON SECTION */}
                            <Button
                                variant="primary"
                                type="submit"
                            >
                                Continue
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </section>
        </>


    )
}

export default RegisterStepOne;
