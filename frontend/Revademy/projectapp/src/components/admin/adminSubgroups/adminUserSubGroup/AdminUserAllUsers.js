import React from 'react';
import {Col, Row, Table} from "react-bootstrap";
import {BsDash} from "react-icons/bs";
import {useEffect, useState} from "react";
import axios from "axios";

const AdminUserAllUsers = () => {

    const [showAllUser, setShowAllUser] = useState([]);
    const [deleteUser, setDeleteUser] = useState([])


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


    // const viewButton = (case_id) => {
    //     console.log(case_id)
    //
    //     axios.get(`http://localhost:8080/report/${caseId}`)
    //         .then(response => {
    //             setViewer(response.data)
    //         })
    // }

    useEffect(() => {
        getAllUser();
    }, []);

    return (
        <>

            {/*WHEN VIEWING THE USERS  i WILL EXPAND ON
                EMAIL
                AGE
                PASSWORD
            */}

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
                                            {/*<button className="table-button" onClick={() => {*/}
                                            {/*    viewButton(pendingReports.caseId)*/}
                                            {/*}}>view*/}
                                            {/*</button>*/}
                                            <button className="table-button">view
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

        </>
    );
};

export default AdminUserAllUsers;