import React, {Fragment, useState} from 'react';
import validator from "validator";
import {Button, Card, Form} from "react-bootstrap";

const RegisterStepTwo = ({nextStep, handleFormData, prevStep, values}) => {

    const [error, setError] = useState(false);

    const submitFormData = (e) => {
        e.preventDefault();

        if(
            validator.isEmpty(values.accountTypes) ||
            validator.isEmpty(values.ageType) ||
            validator.isEmpty(values.email) ||
            validator.isEmpty(values.username)
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
                                    name="accountTypes"
                                    onChange={handleFormData("accountTypes")}
                                >
                                    <option value="">Open this select menu</option>
                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
                                    {/*<option value="teacher">Teacher</option>*/}
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
                                    onChange={handleFormData("ageType")}
                                >
                                    <option value="">Open this select menu</option>
                                    <option value="OVERAGE">Above 18</option>
                                    <option value="UNDERAGE">Under 18</option>
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
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    style={{border: error ? "2px solid red" : ""}}
                                    name="username"
                                    type="text"
                                    value={values.username}
                                    placeholder="Username"
                                    onChange={handleFormData("username")}
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
