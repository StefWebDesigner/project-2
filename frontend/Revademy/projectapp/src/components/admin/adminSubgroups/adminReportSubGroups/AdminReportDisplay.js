import React, {useEffect, useState} from 'react';
import {Container, Row, Table} from "react-bootstrap";
import axios from "axios";




const AdminReportDisplay = () => {

    const [avaiableContent, setAvailableContent] = useState(false)
    //FOR PENDING REPORTS
    const [showPendingReports, setShowPendingReports ] = useState([]);


    //SHOW ALL PENDING CONTENT
    async function showAllPendingReports(e) {
        e.preventDefault()

        axios.get("http://localhost:8080/report/all")
            .then( response => {
                console.log(response.data)
                setShowPendingReports(response.data)
            })
    }

    useEffect(() => {
        showAllPendingReports();

    }, []);




    return (
        <>
            <section>
                <Container>

                    <Row>
                        <h7>All Pending reports</h7>
                    </Row>

                    {/*SHOW PENDING COLUMNS */}
                    <Row>
                        {

                            showPendingReports.map((pendingReports, index) => {
                                // <div key={pendingReports.caseId}>
                                return (
                                    <div key={pendingReports.caseId}>

                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Case Id</th>

                                            </tr>
                                        </thead>

                                    </Table>

                                    </div>

                                )


                            })

                        }


                    </Row>





                </Container>
            </section>

        </>
    );
};

export default AdminReportDisplay;