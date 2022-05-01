import React, {useEffect, useState} from 'react';
import axios from "axios";

const AdminReportReportViewer = (caseId) => {

    const [viewer, setViewer] = useState([])

    async function viewCaseId() {
        axios.get(`http://localhost:8080/report/{caseId}`)
            .then(response => {
                setViewer(response.data)
            })
    }

    useEffect(() => {



    })

    return (
        <>
            <section>
            <h7 className="admin-sub-title"> Report Viewer</h7>

            {/*    column of the type and when pressin button*/}


            </section>


        </>
    );
};

export default AdminReportReportViewer;