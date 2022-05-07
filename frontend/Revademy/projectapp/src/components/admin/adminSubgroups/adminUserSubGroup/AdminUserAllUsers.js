import React from 'react';
import {Card, Col, Row, Table} from "react-bootstrap";
import {BsDash} from "react-icons/bs";
import {useEffect, useState} from "react";
import axios from "axios";

const AdminUserAllUsers = () => {

    const [showAllUser, setShowAllUser] = useState([]);
    const [userViewWindow, setViewWindowWindow] = useState([])
    const [deleteUser, setDeleteUser] = useState([])
    const [sortId, setSortId] = useState([])
    const [sortRole, setSortRole] = useState([])
    const [sortUsername, setSortUsername] = useState([])



    //SHOW ALL PENDING CONTENT
    const getAllUser = () => {
        // e.preventDefault()
        axios.get("http://localhost:8080/user/all")
            .then(response => {
                const reports = response.data
                console.log(reports)
                setShowAllUser(response.data)
            })
    }

    const deleteUserFuntion = (id) => {

        axios.delete(`http://localhost:8080/user/delete?id=${id}`)
            .then(response => {
                setDeleteUser(response.data)
            })

        alert("Successfully deleted")
        getAllUser()
    }

    const userViewer = (username) => {
        axios.get(`http://localhost:8080/user/username/${username}`)
            .then(response => {
                setViewWindowWindow(response.data)
                console.log(userViewWindow)

            })
        console.log(userViewWindow)
    }


    // SORTING

    const sortById = () => {

        const sortedIdData = showAllUser.sort((a, b) => {
            if(a.id > b.id) {
                return 1;
            }
            if(a.id < b.id) {
                return -1;
            }
            return 0;

        });

        setShowAllUser(sortedIdData);
        setSortId(prevId => !prevId);
    }

    const sortByRole = () => {
        const sortByRoleData = showAllUser.sort((a,b) => {
            if(a.accountTypes > b.accountTypes) {
                return 1;
            }
            if(a.accountTypes < b.accountTypes) {
                return -1;
            }
            return 0;
        });

        setShowAllUser(sortByRoleData);
        setSortRole(prevRole => !prevRole);
    }

    const sortByUsername = () => {
        const sortByUsernameData = showAllUser.sort((a,b) => {
            if(a.username > b.username) {
                return 1;
            }
            if(a.username < b.username) {
                return -1;
            }
        });
        setShowAllUser(sortByUsernameData);
         setSortUsername(prevUsername => !prevUsername);
    }

    useEffect(() => {
        getAllUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>


            <h1 className="admin-sub-title">All Users</h1>

            <div className="d-flex justify-content-center mb-3">
            <button
                className="table-button"
                onClick={sortById}
            >
                ID
            </button>
            <button
                className="table-button"
                onClick={sortByRole}
            >
                Role
            </button>
            <button
                className="table-button"
                onClick={sortByUsername}
            >
                Username
            </button>
            </div>

            <Row>
                <Table striped bordered hover className="admin-tables">
                    <thead>
                    <tr>
                        <th className="report-td">View</th>
                        <th className="report-td">Id</th>
                        <th className="report-td">Name</th>
                        <th className="report-td">Username</th>
                        <th className="report-td">Account</th>
                        <th className="report-td">Remove</th>
                    </tr>
                    </thead>

                    <tbody>





                    {
                        showAllUser.length !== 0 ?

                            //SHOW REPORTS
                            showAllUser.map((allUsers, index) => {
                                return (
                                    <tr key={allUsers.id}>
                                        <td className="report-td">
                                            <button
                                                className="table-button"
                                                onClick={() => {
                                                    userViewer(allUsers.username)
                                                }}>
                                                view
                                            </button>
                                        </td>
                                        <td className="report-td"> {allUsers.id}</td>
                                        <td className="report-td"> {allUsers.firstname}{allUsers.lastname}</td>
                                        <td className="report-td"> {allUsers.username}</td>
                                        <td className="report-td"> {allUsers.accountTypes}</td>
                                        <td className="report-td">
                                            <button
                                                className="table-button"
                                                onClick={() => {deleteUserFuntion(allUsers.id)}}
                                            >
                                                <BsDash/>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })

                            //IF NO REPORTS PENDING
                            :

                            <aside>
                                <Row>
                                    <Col xs={12}>
                                        <p className="text-center"> No Pending User</p>
                                    </Col>
                                </Row>
                            </aside>
                    }
                    </tbody>
                </Table>
            </Row>

            <section>

                <Row>
                    <h7 className="admin-sub-title"> View User</h7>
                </Row>

                {

                    // userViewWindow ?

                    <div>
                        <Card className="admin-email-card">

                            <Card.Body>
                                <Row>
                                    <Col xs={5}>
                                        <div>
                                            <p className="admin-user-labelName"> Full Name : </p>
                                        </div>
                                    </Col>
                                    <Col>

                                        {
                                            userViewWindow.length !== 0 ?

                                                <section>

                                                    <div className="d-flex justify-content-center flex-row">
                                                        <p className="admin-user-fName">{userViewWindow.firstname}</p>
                                                        <p className="admin-user-lName">{userViewWindow.lastname}</p>
                                                    </div>

                                                </section>

                                             :

                                                <aside>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <p className="text-center"> No User Selected</p>
                                                        </Col>
                                                    </Row>
                                                </aside>

                                        }

                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={5}>
                                        <div>
                                            <p className="admin-user-labelId"> ID : </p>
                                        </div>
                                    </Col>
                                    <Col>

                                        {
                                            userViewWindow.length !== 0 ?
                                        <p className="admin-user-view-id">{userViewWindow.id}</p>
                                                :
                                                <aside>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <p className="text-center"> No User Selected</p>
                                                        </Col>
                                                    </Row>
                                                </aside>
                                        }
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={5}>
                                        <div>
                                            <p className="admin-user-labelUserame"> Username : </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        {
                                            userViewWindow.length !== 0 ?
                                        <p className="admin-user-view-username">{userViewWindow.username}</p>
                                                :
                                                <aside>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <p className="text-center"> No User Selected</p>
                                                        </Col>
                                                    </Row>
                                                </aside>
                                        }
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={5}>
                                        <div>

                                            <p className="admin-user-labelAccount"> Account : </p>

                                        </div>
                                    </Col>
                                    {
                                        userViewWindow.length !== 0 ?
                                    <p className="admin-user-view-account">{userViewWindow.accountTypes}</p>
                                    :
                                    <aside>
                                        <Row>
                                            <Col xs={12}>
                                                <p className="text-center"> No User Selected</p>
                                            </Col>
                                        </Row>
                                    </aside>
                                    }
                                </Row>

                                <Row>
                                    <Col xs={5}>
                                        <div>
                                            <p className="admin-user-labelEmail"> Email : </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        {
                                            userViewWindow.length !== 0 ?
                                        <p className="admin-user-view-email">{userViewWindow.email}</p>
                                                :
                                                <aside>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <p className="text-center"> No User Selected</p>
                                                        </Col>
                                                    </Row>
                                                </aside>
                                        }
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={5}>
                                        <div>
                                            <p className="admin-user-labelPassword"> Password : </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        {
                                            userViewWindow.length !== 0 ?
                                        <p className="admin-user-view-password">{userViewWindow.password}</p>
                                                :
                                                <aside>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <p className="text-center"> No User Selected</p>
                                                        </Col>
                                                    </Row>
                                                </aside>
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={5}>
                                        <div>
                                            <p className="admin-user-labelPassword"> Date Created : </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        {
                                            userViewWindow.length !== 0 ?
                                        <p className="admin-user-view-createdate">{userViewWindow.createdDate}</p>
                                                :
                                                <aside>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <p className="text-center"> No User Selected</p>
                                                        </Col>
                                                    </Row>
                                                </aside>
                                        }
                                    </Col>
                                </Row>

                            </Card.Body>
                            <Card.Footer className="admin-email-footer">

                            </Card.Footer>
                        </Card>
                    </div>

                }
            </section>

        </>
    );
};

export default AdminUserAllUsers;