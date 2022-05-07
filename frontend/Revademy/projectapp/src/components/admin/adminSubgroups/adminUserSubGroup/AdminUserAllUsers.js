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
                                <h3 className="admin-email-body">{userViewWindow.id}</h3>
                                <h3 className="admin-email-body">{userViewWindow.firstname}</h3>
                                <h3 className="admin-email-body">{userViewWindow.lastname}</h3>
                                <h3 className="admin-email-body">{userViewWindow.username}</h3>
                                <h3 className="admin-email-body">{userViewWindow.accountTypes}</h3>
                                <h3 className="admin-email-body">{userViewWindow.email}</h3>
                                <h3 className="admin-email-body">{userViewWindow.password}</h3>
                                <h3 className="admin-email-body">{userViewWindow.createdDate}</h3>

                            </Card.Body>
                            <Card.Footer className="admin-email-footer">

                            </Card.Footer>
                        </Card>
                    </div>
                    // :
                    // <aside>
                    //     <Row>
                    //         <Col xs={12}>
                    //             <p className="text-center"> No User Selected</p>
                    //         </Col>
                    //     </Row>
                    // </aside>
                }
            </section>

        </>
    );
};

export default AdminUserAllUsers;