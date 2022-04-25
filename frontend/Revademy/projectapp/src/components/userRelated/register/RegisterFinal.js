import React from 'react';
import {useNavigate} from "react-router-dom"
import {Button, Card} from "react-bootstrap";
import LoginUser from "../LoginUser";

const RegisterFinal = ({values, prevStep}) => {

   const navigate = useNavigate();

    const {
        firstName,
        lastName,
        account,
        age,
        email,
        password} = values;


    const registerUserFinalSubmit = (e) => {
        e.preventDefault();

        //To navigate to login page
        navigate("/login")
    }

    return (
        <>
            <section>



                <Card style={{ marginTop: 100, textAlign: "left" }}>
                    <Card.Body>
                        <p>
                            <strong> First Name : </strong> {firstName}{" "}
                        </p>
                        <p>
                            <strong> Last Name : </strong> {lastName}{" "}
                        </p>
                        <p>
                            <strong> Account : </strong>
                            {account}

                        </p>
                        <p>
                            <strong> Age : </strong>
                            {age}

                        </p>
                        <p>
                            <strong> Email : </strong> {email}{" "}
                        </p>
                        <p>
                            <strong> Password : </strong> {password}{" "}
                        </p>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <Button variant="primary" onClick={prevStep}>
                                Previous
                            </Button>

                            <Button variant="primary" type="submit" onClick={registerUserFinalSubmit}>
                                Submit
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </section>
        </>
    );
};

export default RegisterFinal;
