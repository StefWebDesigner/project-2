

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

    const [homepage, setHomepage] = useState([]);
    const [activitypage, setActivitypage] = useState([]);
    const [eventpage, setEventpage] = useState([]);
    const [matchinggame, setMatchinggame] = useState([]);
    const [hangmangame, setHangmangame] = useState([]);
    const [colorquiz, setColorquiz] = useState([]);
    const [animalquiz, setAnimalquiz] = useState([]);
    const [soundgame, setSoundgame] = useState([]);
    const [userportal, setUserportal] = useState([]);
    const [kidportal, setKidportal] = useState([]);


    useEffect(() => {

        // CALLING GET ALL USERS & DETAILS
        getAllHomepage();
        getAllActivity();
        getAllEvents();
        getAllMatching();
        getAllColor();
        getAllHang();
        getAllAnimal();
        getAllSound();
        getAllUserportal();
        getAllKidportal();

    },[]);

    async function getAllHomepage() {
        await axios.get('http://localhost:8080/report/counttotalhomepage')
            .then(response => {

                setHomepage(response.data);
            })
    }

    async function getAllActivity() {
        await axios.get('http://localhost:8080/report/counttotalactivitypage')
            .then(response => {

                setActivitypage(response.data);
            })
    }

    async function getAllEvents() {
        await axios.get('http://localhost:8080/report/counttotaleventpage')
            .then(response => {

                setEventpage(response.data);
            })
    }

    async function getAllMatching() {
        await axios.get('http://localhost:8080/report/counttotalmatchinggame')
            .then(response => {

                setMatchinggame(response.data);
            })
    }

    async function getAllColor() {
        await axios.get('http://localhost:8080/report/counttotalcolorquizgame')
            .then(response => {

                setColorquiz(response.data);
            })
    }



    async function getAllHang() {
        await axios.get('http://localhost:8080/report/counttotalhangmangame')
            .then(response => {

                setHangmangame(response.data);
            })
    }

    async function getAllAnimal() {
        await axios.get('http://localhost:8080/report/counttotalanimalgame')
            .then(response => {

                setAnimalquiz(response.data);
            })
    }
    async function getAllSound() {
        await axios.get('http://localhost:8080/report/counttotalsoundgame')
            .then(response => {

                setSoundgame(response.data);
            })
    }
    async function getAllUserportal() {
        await axios.get('http://localhost:8080/report/counttotaluserportal')
            .then(response => {

                setUserportal(response.data);
            })
    }
    async function getAllKidportal() {
        await axios.get('http://localhost:8080/report/counttotalkidsportal')
            .then(response => {

                setKidportal(response.data);
            })
    }


    const data = {
        labels:["Homepage","Activity","Events", "Matching", "Hangman", "Color","Animal","Sound", "User Portal", "Kid Portal"],
        datasets: [{
            label: 'Overall Feedback Evaluation',
            data: [homepage, activitypage, eventpage, matchinggame, hangmangame, colorquiz, animalquiz, soundgame, userportal, kidportal],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'green',
                'purple',
                'orange',
                'lightblue',
                'lightgreen',
                'blue',
                'red',
                'lightred'



            ],
            hoverOffset: 4
        }]
    }

    return (
        <div>
            <Bar data={data} />
        </div>
    )
}
























//
// import React, {useEffect, useState} from 'react';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import axios from "axios";
//
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );
// export default function FeedbackOverallFeedback(){
//
//     const [great, setGreat] = useState([]);
//     const [solid, setSolid] = useState([]);
//     const [ok, setOk] = useState([]);
//     const [needsimprovement, setNeedsimprovement] = useState([]);
//     const [bad, setBad] = useState([]);
//
// useEffect(() => {
//
//     // CALLING GET ALL USERS & DETAILS
//     getAllGreat();
//     getAllSolid();
//     getAllOk();
//     getAllImprovement();
//     getAllBad();
//
// },[]);
//
//     async function getAllGreat() {
//         const response = await axios.get('http://localhost:8080/emailsupport/totalgreat')
//             .then(response => {
//                     const amount = response.data.count;
//                     setGreat(amount);
//                 })
//     }
//     async function getAllSolid() {
//
//         const response = await axios.get('http://localhost:8080/emailsupport/totalsolid')
//             .then(response => {
//                 const amount = response.data.count;
//                 setSolid(amount);
//         // const amount = response.data[0].count;
//             })
//     }
//     async function getAllOk() {
//         const response = await axios.get('http://localhost:8080/emailsupport/totalok')
//             .then(response => {
//                 const amount = response.data.count;
//                 setOk(amount);
//
//             })
//         // const amount = response.data[0].count;
//         // setOk(amount);
//     }
//
//     async function getAllImprovement() {
//         const response = await axios.get('http://localhost:8080/emailsupport/totalimprovement')
//     .then(response => {
//             const amount = response.data.count;
//             setNeedsimprovement(amount);
//         })
//     }
//
//     async function getAllBad() {
//         const response = await axios.get('http://localhost:8080/emailsupport/totalbad')
//     .then(response => {
//             const amount = response.data.count;
//             setBad(amount);
//         })
//     }
//
//
// const data = {
//         labels:["Great","Solid","Ok", "Needs Improvement", "Bad"],
//         datasets: [{
//             label: 'Overall Feedback Evaluation',
//             data: [great, solid, ok, needsimprovement, bad],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'green',
//                 'purple',
//                 'orange'
//
//             ],
//             hoverOffset: 4
//         }]
//     }
//
//     return (
//         <div>
// <Bar data={data} />
//
//         </div>
//     )
// }

