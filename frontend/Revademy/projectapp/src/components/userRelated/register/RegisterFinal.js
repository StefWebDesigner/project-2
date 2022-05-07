import React from 'react';
import {useNavigate} from "react-router-dom"
import {Button, Card} from "react-bootstrap";
import axios from "axios";
import { useTranslation } from 'react-i18next';

const RegisterFinal = ({values, prevStep ,setFormData}) => {

    const {t}=useTranslation(["register"]);

   const navigate = useNavigate();

    const {
        firstname,
        lastname,
        username,
        accountTypes,
        ageType,
        email,
        password} = values;


    const registerUserFinalSubmit = (e) => {
        e.preventDefault();

            //Work on hooking this up
            const data = axios.post("http://localhost:8080/user", values);
            console.log(data);
            setFormData(data);

        //To navigate to login page
        navigate("/login")
    }

    return (
        <>
            <section>



                <Card style={{ marginTop: 100, textAlign: "left" }}>
                    <Card.Body>
                        <p>
                            <strong> {t("firstname")}: </strong> {firstname}
                        </p>
                        <p>
                            <strong> {t("lastname")} : </strong> {lastname}
                        </p>
                        <p>
                            <strong> {t("username")} : </strong> {username}
                        </p>
                        <p>
                            <strong> {t("account")} : </strong>
                            {accountTypes}

                        </p>
                        <p>
                            <strong> {t("age")} : </strong>
                            {ageType}

                        </p>
                        <p>
                            <strong> {t("email")} : </strong> {email}
                        </p>
                        <p>
                            <strong> {t("password")} : </strong> {password}
                        </p>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <Button variant="primary" onClick={prevStep}>
                                {t("previous")}
                            </Button>

                            <Button variant="primary" type="submit" onClick={registerUserFinalSubmit}>
                                {t("submit")}
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </section>
        </>
    );
};

export default RegisterFinal;
