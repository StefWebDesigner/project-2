import React, {useState} from 'react';
import validator from "validator";
import {Card, Form, FormGroup} from "react-bootstrap";

const LoginStepTwo = ({nextStep, handleFormData, prevStep, values}) => {

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
                        </Form>

                    </Card.Body>
                </Card>
            </section>



        </>
    );
};

export default LoginStepTwo;
