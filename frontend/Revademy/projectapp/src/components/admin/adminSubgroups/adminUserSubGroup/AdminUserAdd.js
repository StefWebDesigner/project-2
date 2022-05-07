import React, {useState} from 'react';
import {Button, Card, Container, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import axios from "axios";
import validator from "validator";

const AdminUserAdd = () => {

    const [adminAdd, setAdminAdd] = useState({
        firstname : "",
        lastname : "",
        accountTypes : "",
        ageType : "",
        email : "",
        password : ""
    })
    // const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const submitAdminFormData = (e) => {
        e.preventDefault();

        // if(
        //     validator.isEmpty(adminAdd.firstname) ||
        //     validator.isEmpty(adminAdd.lastname) ||
        //     validator.isEmpty(adminAdd.username) ||
        //     validator.isEmpty(adminAdd.accountTypes) ||
        //     validator.isEmpty(adminAdd.ageType) ||
        //     validator.isEmpty(adminAdd.email) ||
        //     validator.isEmpty(adminAdd.password)
        // ) {
        //     setError(true)
        // }

        const mailformat =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!adminAdd.email.match(mailformat)) {
            alert("Please enter valid email address");
        }

        axios.post("http://localhost:8080/user", adminAdd)
            .then(response => {
                console.log(response.data)
                setAdminAdd(response.data);

            })

        setAdminAdd({
            firstname : "",
            lastname : "",
            accountTypes : "",
            ageType : "",
            email : "",
            password : ""
        })
    }

    const handleAdminUserForm = (e) => {
        setAdminAdd({
            ...adminAdd,
            [e.target.name]: e.target.value,

        });
    };

    console.log(adminAdd)

    return (
        <>
            <section>
                <Container>
                    <h1 className="admin-sub-title"> Register Users</h1>

                    <Card className="admin-tables">
                        <Card.Body>
                            <Form onSubmit={submitAdminFormData}>
                                {/*SECTION FOR FIRSNAME*/}
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        // style={{border: error ? "2px solid red" : ""}}
                                        className="form-input"
                                        name="firstname"
                                        defaultValue={adminAdd.firstname}
                                        type="text"
                                        placeholder="Firstname"
                                        onChange={handleAdminUserForm}
                                        required
                                    />
                                    {/*{*/}
                                    {/*    error ? (*/}
                                    {/*        <Form.text style={{color: "red"}}>*/}
                                    {/*            This is a required field*/}
                                    {/*        </Form.text>*/}
                                    {/*    ) : (*/}
                                    {/*        ""*/}
                                    {/*    )*/}
                                    {/*}*/}
                                </Form.Group>
                                {/*SECTION FOR LASTNAME*/}
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        // style={{border: error ? "2px solid red" : ""}}
                                        className="form-input"
                                        name="lastname"
                                        type="text"
                                        defaultValue={adminAdd.lastname}
                                        placeholder="Last name"
                                        onChange={handleAdminUserForm}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Type of account
                                    </Form.Label>
                                    <Form.Select
                                        // style={{border: error ? "2px solid red" : ""}}
                                        size="md"
                                        name="accountTypes"
                                        onChange={handleAdminUserForm}
                                        required
                                    >
                                        <option value="">Open this select menu</option>
                                        <option value="USER">User</option>
                                        <option value="ADMIN">Admin</option>
                                        {/*<option value="teacher">Teacher</option>*/}
                                    </Form.Select>
                                    {/*/!* ERROR SECTION    *!/*/}
                                    {/*{*/}
                                    {/*    error ? (*/}
                                    {/*        <Form.text> This is required</Form.text>*/}
                                    {/*    ) : ""*/}
                                    {/*}*/}
                                </Form.Group>
                                {/*FOR AGE*/}
                                <Form.Group>
                                    <Form.Label>
                                        Age
                                    </Form.Label>
                                    <Form.Select
                                        // style={{border: error ? "2px solid red" : ""}}
                                        size="md"
                                        name="ageType"
                                        onChange={handleAdminUserForm}
                                        required
                                    >
                                        <option value="">Open this select menu</option>
                                        <option value="OVERAGE">Above 18</option>
                                        <option value="UNDERAGE">Under 18</option>
                                    </Form.Select>
                                    {/* ERROR SECTION    */}
                                    {/*{*/}
                                    {/*    error ? (*/}
                                    {/*        <Form.text> This is required</Form.text>*/}
                                    {/*    ) : ""*/}
                                    {/*}*/}
                                </Form.Group>
                                {/*FOR EMAIL*/}
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        // style={{border: error ? "2px solid red" : ""}}
                                        className="form-input"
                                        name="email"
                                        type="text"
                                        value={adminAdd.email}
                                        placeholder="Email"
                                        onChange={handleAdminUserForm}
                                        required
                                    />
                                    {/* ERROR SECTION    */}
                                    {/*{*/}
                                    {/*    error ? (*/}
                                    {/*        <Form.text> This is required</Form.text>*/}
                                    {/*    ) : ""*/}
                                    {/*}*/}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        // style={{border: error ? "2px solid red" : ""}}
                                        className="form-input"
                                        name="username"
                                        type="text"
                                        value={adminAdd.username}
                                        placeholder="Username"
                                        onChange={handleAdminUserForm}
                                        required
                                    />
                                    {/* ERROR SECTION    */}
                                    {/*{*/}
                                    {/*    error ? (*/}
                                    {/*        <Form.text> This is required</Form.text>*/}
                                    {/*    ) : ""*/}
                                    {/*}*/}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        // style={{border: error ? "2px solid red" : ""}}
                                        className="form-input"
                                        name="password"
                                        type="password"
                                        defaultValue={adminAdd.password}
                                        placeholder="password"
                                        onChange={handleAdminUserForm}
                                        required
                                        // onChange={handleAdminUserForm("password")}

                                    />
                                    {/* ERROR SECTION    */}
                                    {/*{*/}
                                    {/*    error ? (*/}
                                    {/*        <Form.text> This is required</Form.text>*/}
                                    {/*    ) : ""*/}
                                    {/*}*/}
                                </Form.Group>

                                {/* BUTTON SECTION */}
                                <Button
                                    variant="primary"
                                    type="submit"
                                >
                                    Register
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                </Container>
                </section>



        </>
    );
};

export default AdminUserAdd;