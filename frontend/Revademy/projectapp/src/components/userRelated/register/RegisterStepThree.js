import React, {useState} from 'react';
import validator from "validator";
import {Button, Card, Form} from "react-bootstrap";
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
                <Card style={{ marginTop: 100 }}>
                    <Card.Body>
                        <Form onSubmit={submitFormData}>
                            {/*FOR EMAIL*/}
                            <Form.Group>
                                <Form.Label>{t("password")}</Form.Label>
                                <Form.Control
                                    style={{border: error ? "2px solid red" : ""}}
                                    name="password"
                                    type="password"
                                    defaultValue={values.password}
                                    placeholder="password"
                                    onChange={handleFormData("password")}
                                />
                                {/* ERROR SECTION    */}
                                {
                                    error ? (
                                        <Form.text> {t("thisisrequired")}</Form.text>
                                    ) : ""
                                }
                            </Form.Group>
                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <Button variant="primary" onClick={prevStep}>
                                    {t("previous")}
                                </Button>

                                <Button variant="primary" type="submit">
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
