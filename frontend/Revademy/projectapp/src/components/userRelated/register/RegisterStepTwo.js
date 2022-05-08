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
    }
    return (
        <>
            <section>
            
                <Card style={{ marginTop: 100, borderRadius: 15 }}>
                    <Card.Body>
                        <Form className="login-form-container">

                        {/*<Form onSubmit={submitFormData}>*/}
                            {/*FOR ACCOUNT*/}
                            <Form.Group>
                                <Form.Label className="input-label-username">
                                    {t("typeofaccount")}
                                </Form.Label>
                                <Form.Select
                                className="login-input"
                                    style={{border: error ? "2px solid red" : ""}}
                                    size="md"
                                    name="accountTypes"
                                    onChange={handleFormData("accountTypes")}
                                >
                                    <option value="">{t("openthisselectmenu")}</option>
                                    <option value="USER">{t("user") } </option>
                                    {/*<option value="teacher">Teacher</option>*/}
                                </Form.Select>
                            {/* ERROR SECTION    */}
                                {
                                    error ? (
                                        <Form.Text> {t("thisisrequired")} </Form.Text>
                                    ) : ""
                                }
                            </Form.Group>
                            {/*FOR AGE*/}
                            <Form.Group>
                                <Form.Label className="input-label-username">
                                    {t("age")}
                                </Form.Label>
                                <Form.Select
                                className="login-input"
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
                                        <Form.Text> {t("thisisrequired")} </Form.Text>
                                    ) : ""
                                }
                            </Form.Group>
                            {/*FOR EMAIL*/}
                            <Form.Group>
                                <Form.Label className="input-label-username">{t("email")} </Form.Label>
                                <Form.Control
                                    style={{border: error ? "2px solid red" : ""}}
                                    className="login-input"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    placeholder="Email"
                                    onChange={handleFormData("email")}
                                />
                                {/* ERROR SECTION    */}
                                {
                                    error ? (
                                        <Form.Text> {t("thisisrequired")} </Form.Text>
                                    ) : ""
                                }
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="input-label-username">{t("username")} </Form.Label>
                                <Form.Control
                                    style={{border: error ? "2px solid red" : ""}}
                                    className="login-input"
                                    name="username"
                                    type="text"
                                    value={values.username}
                                    placeholder="Username"
                                    onChange={handleFormData("username")}
                                />
                                {/* ERROR SECTION    */}
                                {
                                    error ? (
                                        <Form.Text> {t("thisisrequired")} </Form.Text>
                                    ) : ""
                                }
                            </Form.Group>

                            <div className="button-login-container" style={{ display: "flex", justifyContent: "space-around" }}>
                                <Button className="button-login" variant="primary" onClick={prevStep}>
                                    {t("previous")}
                                </Button>

                                <Button
                                className="button-login"
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
