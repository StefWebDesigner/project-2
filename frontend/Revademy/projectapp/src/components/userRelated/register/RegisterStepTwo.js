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
        console.log("From stepTwo")
        console.log(values)
        nextStep()
    }

    return (
        <>
            <section>
                <Card style={{ marginTop: 100 }}>
                    <Card.Body>
                        <Form>

                        {/*<Form onSubmit={submitFormData}>*/}
                            {/*FOR ACCOUNT*/}
                            <Form.Group>
                                <Form.Label>
                                    Type of account
                                </Form.Label>
                                <Form.Select
                                    style={{border: error ? "2px solid red" : ""}}
                                    size="lg"
                                    name="account"
                                    onChange={handleFormData("account")}
                                >
                                    <option value="">Open this select menu</option>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                    <option value="teacher">Teacher</option>
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
                                    name="age"
                                    onChange={handleFormData("age")}
                                >
                                    <option value="">Open this select menu</option>
                                    <option value="overAge">Above 18</option>
                                    <option value="underAge">Under 18</option>
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
                                    value={values.email}
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
                                    onClick={submitFormData}
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
