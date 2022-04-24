import React from 'react';
import {Button, Card} from "react-bootstrap";

const RegisterFinal = ({values, prevStep}) => {

    const {
        firstName,
        lastName,
        account,
        age,
        email,
        password,
        user,
        admin,
        teacher,
        overAge,
        underAge } = values;

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
                            {values ? {user} : ""}{ " "}
                            {values ? {teacher} : ""}{ " "}
                            {values ? {admin} : ""}{ " "}
                        </p>
                        <p>
                            <strong> Age : </strong>
                            {values ? {overAge} : ""}{ " "}
                            {values ? {underAge} : ""}{ " "}
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

                            <Button variant="primary" type="submit">
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
