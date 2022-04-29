import React from 'react';
import {useNavigate} from "react-router-dom"
import {Button, Card} from "react-bootstrap";
import axios from "axios";

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

            //Work on hooking this up
            // const data = axios.post("http://localhost:8080/user", values);
            // console.log(data);
            // setFormData(data);

        //To navigate to login page
        navigate("/login")
    }



    return (
        <>
            <section>



                <Card style={{ marginTop: 100, textAlign: "left" }}>
                    <Card.Body>
                        <p>
                            <strong> First Name : </strong> {JSON.stringify(firstName)}
                        </p>
                        <p>
                            <strong> Last Name : </strong> {lastName}
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
