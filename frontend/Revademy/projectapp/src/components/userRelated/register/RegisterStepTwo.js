import React, {Fragment, useState} from 'react';
import validator from "validator";
import {Button, Card, Form} from "react-bootstrap";

const RegisterStepTwo = ({nextStep, handleFormData, prevStep, values}) => {

    const [error, setError] = useState(false);

    const submitFormData = (e) => {
        e.preventDefault();

        if(
            validator.isEmpty(values.account) ||
            validator.isEmpty(values.age) ||
            validator.isEmpty(values.email)
        ) {
            setError(true)
        } else {
            nextStep();
        }
    }

    return (
        <>
            <section>
                <Card style={{ marginTop: 100 }}>
                    <Card.Body>
                        <Form onSubmit={submitFormData}>
                            {/*FOR ACCOUNT*/}
                            <Form.Group>
                                <Form.Label>
                                    Type of account
                                </Form.Label>
                                <Form.Select
                                    style={{border: error ? "2px solid red" : ""}}
                                    size="lg"
                                >
                                    <option>Open this select menu</option>
                                    <option defaultValue={values.user}>User</option>
                                    <option defaultValue={values.admin}>Admin</option>
                                    <option defaultValue={values.teacher}>Teacher</option>
                                </Form.Select>
                            {/* ERROR SECTION    */}
                                {
                                    error ? (
                                        <Form.text> This is required</Form.text>
                                    ) : ""
                                }
                            </Form.Group>
                            {/*FOR AGE*/}
                            <Form.Group>
                                <Form.Label>
                                    Age
                                </Form.Label>
                                <Form.Select
                                    style={{border: error ? "2px solid red" : ""}}
                                    size="lg"
                                >
                                    <option>Open this select menu</option>
                                    <option defaultValue={values.overAge}>Above 18</option>
                                    <option defaultValue={values.underAge}>Under 18</option>
                                </Form.Select>
                                {/* ERROR SECTION    */}
                                {
                                    error ? (
                                        <Form.text> This is required</Form.text>
                                    ) : ""
                                }
                            </Form.Group>
                            {/*FOR EMAIL*/}
                            <Form.Group>
                                <Form.Label>
                                    Age
                                </Form.Label>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    style={{border: error ? "2px solid red" : ""}}
                                    name="lastName"
                                    type="text"
                                    defaultValue={values.email}
                                    placeholder="Email"
                                    onChange={handleFormData("email")}
                                />
                                {/* ERROR SECTION    */}
                                {
                                    error ? (
                                        <Form.text> This is required</Form.text>
                                    ) : ""
                                }
                            </Form.Group>

                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <Button variant="primary" onClick={prevStep}>
                                    Previous
                                </Button>

                                <Button
                                    variant="primary"
                                    type="submit"
                                >
                                    Continue
                                </Button>
                            </div>
                        </Form>

                    </Card.Body>
                </Card>
            </section>

        </>
    );
};

export default RegisterStepTwo;
