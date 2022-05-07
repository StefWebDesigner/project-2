import React, {Fragment, useState} from 'react';
import validator from "validator";
import {Button, Card, Form} from "react-bootstrap";
import { useTranslation } from 'react-i18next';

const RegisterStepTwo = ({nextStep, handleFormData, prevStep, values}) => {

    const {t}=useTranslation(["register"]);

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
                                    {t("typeofaccount")}
                                </Form.Label>
                                <Form.Select
                                    style={{border: error ? "2px solid red" : ""}}
                                    size="md"
                                    name="accountTypes"
                                    onChange={handleFormData("accountTypes")}
                                >
                                    <option value="">{t("openthisselectmenu")}</option>
                                    <option value="USER">{t("user") } </option>
                                    <option value="ADMIN">{t("admin")}</option>
                                    {/*<option value="teacher">Teacher</option>*/}
                                </Form.Select>
                            {/* ERROR SECTION    */}
                                {
                                    error ? (
                                        <Form.text> {t("thisisrequired")} </Form.text>
                                    ) : ""
                                }
                            </Form.Group>
                            {/*FOR AGE*/}
                            <Form.Group>
                                <Form.Label>
                                    {t("age")}
                                </Form.Label>
                                <Form.Select
                                    style={{border: error ? "2px solid red" : ""}}
                                    size="md"
                                    name="age"
                                    onChange={handleFormData("ageType")}
                                >
                                    <option value="">{t("openthisselectmenu")}</option>
                                    <option value="OVERAGE">{t("above18")}</option>
                                    <option value="UNDERAGE">{t("under18")} </option>
                                </Form.Select>
                                {/* ERROR SECTION    */}
                                {
                                    error ? (
                                        <Form.text> {t("thisisrequired")} </Form.text>
                                    ) : ""
                                }
                            </Form.Group>
                            {/*FOR EMAIL*/}
                            <Form.Group>
                                <Form.Label>{t("email")} </Form.Label>
                                <Form.Control
                                    style={{border: error ? "2px solid red" : ""}}
                                    name="email"
                                    type="text"
                                    value={values.email}
                                    placeholder="Email"
                                    onChange={handleFormData("email")}
                                />
                                {/* ERROR SECTION    */}
                                {
                                    error ? (
                                        <Form.text> {t("thisisrequired")} </Form.text>
                                    ) : ""
                                }
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>{t("username")} </Form.Label>
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
                                        <Form.text> {t("thisisrequired")} </Form.text>
                                    ) : ""
                                }
                            </Form.Group>

                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <Button variant="primary" onClick={prevStep}>
                                    {t("previous")}
                                </Button>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    onClick={submitFormData}
                                >
                                    {t("continue")}
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
