import React from 'react';
import {useNavigate} from "react-router-dom"
import {Button, Card} from "react-bootstrap";
import axios from "axios";


const RegisterFinal = ({values, prevStep ,setFormData}) => {

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
                            <strong> First Name : </strong> {firstname}
                        </p>
                        <p>
                            <strong> Last Name : </strong> {lastname}
                        </p>
                        <p>
                            <strong> Username : </strong> {username}
                        </p>
                        <p>
                            <strong> Account : </strong>
                            {accountTypes}

                        </p>
                        <p>
                            <strong> Age : </strong>
                            {ageType}

                        </p>
                        <p>
                            <strong> Email : </strong> {email}
                        </p>
                        <p>
                            <strong> Password : </strong> {password}
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
