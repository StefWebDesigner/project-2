import React, {useEffect, useState} from "react";
import {Chart, ArcElement,Tooltip,Legend} from 'chart.js'
import { Doughnut} from "react-chartjs-2";
import axios from "axios";

Chart.register(ArcElement,Tooltip,Legend);
export  default function FeedbackOverallFeedback(){


    const [great, setGreat] = useState([]);
    const [solid, setSolid] = useState([]);
    const [ok, setOk] = useState([]);
    const [needsimprovement, setNeedsimprovement] = useState([]);
    const [bad, setBad] = useState([]);

    async function getAllJavaTips() {
        const response = await axios.get('http://localhost:4000/categories/totaltips/java');
        const amount = response.data[0].count;
        setJava(amount);
    }

    async function getAllReactTips() {
        const response = await axios.get('http://localhost:4000/categories/totaltips/react');
        const amount = response.data[0].count;
        setReact(amount);
    }
    async function getAllBeginnerTips() {
        const response = await axios.get('http://localhost:4000/categories/totaltips/beginner');
        const amount = response.data[0].count;
        setBeginner(amount);
    }

    async function getAllIntermediateTips() {
        const response = await axios.get('http://localhost:4000/categories/totaltips/intermidate');
        const amount = response.data[0].count;
        setIntermidate(amount);
    }

    async function getAllAdvancedTips() {
        const response = await axios.get('http://localhost:4000/categories/totaltips/advanced');
        const amount = response.data[0].count;
        setAdvanced(amount);
    }

    useEffect(() => {

        // CALLING GET ALL USERS & DETAILS
        getAllJavaTips();
        getAllReactTips();
        getAllBeginnerTips();
        getAllIntermediateTips();
        getAllAdvancedTips();

    },[]);

//GOING TO MAKE ALL TOTAL GENRE FOR THE SUB CATEGORY BASED ON THEIR POST AND ADD IT HERE

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
        <div>
            <Doughnut data={data} />
        </div>
    )
}

// const data = {
//     labels: ["Java","React", "Beginner", "Intermediate", "Advanced"],
//     datasets: [{
//         label: 'All Total Post Per Genre',
//         data: [java, react, beginner, intermidate, advanced],
//         backgroundColor: [
//             'rgb(255, 99, 132)',
//             'rgb(54, 162, 235)',
//             'green',
//             'purple',
//             'orange'
//
//         ],
//         hoverOffset: 4
//     }]
// }
