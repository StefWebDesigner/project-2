import React, {useState} from 'react';
import validator from "validator";
import {Button, Card, Form, Container} from "react-bootstrap";
import { useTranslation } from 'react-i18next';

const RegisterStepThree = ({nextStep, prevStep, handleFormData, values}) => {

    const {t}=useTranslation(["register"]);

    const [error, setError] = useState(false);

    const submitFormData = (e) => {
        e.preventDefault();

        if(
            validator.isEmpty(values.password)
        ) {
            setError(true)
        } else {
            nextStep();
        }
    }

    
    return (
        <>
            <section>
                <Card  style={{marginTop: 100, borderRadius: 15,}}>
                    <Card.Body>
                        <Form className="login-form-container" onSubmit={submitFormData}>
                            {/*FOR EMAIL*/}
                            <Form.Group>
                                <Form.Label className="input-label-username">{t("password")}</Form.Label>
                                <Form.Control
                                    style={{border: error ? "2px solid red" : ""}}
                                    className="login-input"
                                    name="password"
                                    type="password"
                                    defaultValue={values.password}
                                    placeholder="password"
                                    onChange={handleFormData("password")}
                                    required

                                />
                                {/* ERROR SECTION    */}
                                {
                                    error ? (
                                        <Form.Text> {t("thisisrequired")}</Form.Text>
                                    ) : ""
                                }
                            </Form.Group>
                            <div className="button-login-container" style={{ display: "flex", justifyContent: "space-around" }}>
                                <Button className="button-login" variant="primary" onClick={prevStep}>
                                    {t("previous")}
                                </Button>

                                <Button className="button-login" variant="primary" type="submit">
                                    {t("submit")}
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </section>



        </>
    );
};

export default RegisterStepThree;
