

import React, {useEffect, useState} from 'react';
import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from "axios";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function FeedbackOverallFeedback(){

    const [great, setGreat] = useState([]);
    const [solid, setSolid] = useState([]);
    const [ok, setOk] = useState([]);
    const [needsimprovement, setNeedsimprovement] = useState([]);
    const [bad, setBad] = useState([]);

useEffect(() => {

    // CALLING GET ALL USERS & DETAILS
    getAllGreat();
    getAllSolid();
    getAllOk();
    getAllImprovement();
    getAllBad();

},[]);

    async function getAllGreat() {
        await axios.get('http://localhost:8080/emailsupport/totalgreat')
            .then(response => {

                    setGreat(response.data);
                })
    }
    async function getAllSolid() {

        await axios.get('http://localhost:8080/emailsupport/totalsolid')
            .then(response => {
                setSolid(response.data);
                // const amount = response.data[0].count;
                // setSolid(amount);
        // const amount = response.data[0].count;
            })
    }
    async function getAllOk() {
        await axios.get('http://localhost:8080/emailsupport/totalok')
            .then(response => {
                setOk(response.data);
                // const amount = response.data[0].count;
                // setOk(amount);
            })
        // const amount = response.data[0].count;
        // setOk(amount);
    }

    async function getAllImprovement() {
        await axios.get('http://localhost:8080/emailsupport/totalimprovement')
    .then(response => {
            setNeedsimprovement(response.data);
        })
    }

    async function getAllBad() {
        await axios.get('http://localhost:8080/emailsupport/totalbad')
    .then(response => {
            setBad(response.data);
        })
    }


const data = {
        labels:["Great","Solid","Ok", "Needs Improvement", "Bad"],
        datasets: [{
            label: 'Overall Feedback Evaluation',
            data: [great, solid, ok, needsimprovement, bad],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'green',
                'purple',
                'orange'

            ],
            hoverOffset: 4
        }]
    }

    return (
        <div className="admin-user-graph"
             style={{  maxWidth:"900px",  marginBottom:"1%", padding:"1%"}}
        >
            <Bar data={data} />
        </div>
    )
}
