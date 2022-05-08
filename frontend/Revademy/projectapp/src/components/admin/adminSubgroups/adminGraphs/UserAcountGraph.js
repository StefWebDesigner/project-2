import React, {useEffect, useState} from "react";
import {Chart, ArcElement,Tooltip,Legend} from 'chart.js'
import { Doughnut} from "react-chartjs-2";
import axios from "axios";

Chart.register(ArcElement,Tooltip,Legend);
export  default function UserAcountGraph(){


const [user, setUser] = useState([]);
const [admin, setAdmin] = useState([]);

    const getTotalAdmin = () => {
        axios.get("http://localhost:8080/user/admin")
            .then(response => {
                setAdmin(response.data);
            })
    }

    const getTotaUsers = () => {
        axios.get(" http://localhost:8080/user/userCount")
            .then(response => {
                setUser(response.data);
            })
    }


useEffect(() => {

    getTotalAdmin();
    getTotaUsers();

},[]);

const data = {
    labels:["User","Admin"],
    datasets: [{
        label: 'All Account Types',
        data: [user, admin],
        // data:[10,20,40],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
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
