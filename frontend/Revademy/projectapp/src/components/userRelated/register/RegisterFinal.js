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

            alert("You have registered successfully!")

        //To navigate to login page
        navigate("/login")
    }

    return (
        <>
            <section>



                <Card style={{ marginTop: 100, textAlign: "left", borderRadius: 15 }}>
                    <Card.Body>
                        <p className="input-label-username">
                            <strong> {t("firstname")}: </strong> {firstname}
                        </p>
                        <p className="input-label-username">
                            <strong> {t("lastname")} : </strong> {lastname}
                        </p>
                        <p className="input-label-username">
                            <strong> {t("username")} : </strong> {username}
                        </p>
                        <p className="input-label-username">
                            <strong> {t("account")} : </strong>
                            {accountTypes}

                        </p>
                        <p className="input-label-username">
                            <strong> {t("age")} : </strong>
                            {ageType}

                        </p>
                        <p className="input-label-username">
                            <strong> {t("email")} : </strong> {email}
                        </p>
                        <p className="input-label-username">
                            <strong> {t("password")} : </strong> {password}
                        </p>
                        <div className="button-login-container" style={{ display: "flex", justifyContent: "space-around" }}>
                            <Button className="button-login" variant="primary" onClick={prevStep}>
                                {t("previous")}
                            </Button>

                            <Button className="button-login" variant="primary" type="submit" onClick={registerUserFinalSubmit}>
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
