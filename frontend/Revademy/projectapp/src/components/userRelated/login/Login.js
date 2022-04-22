import { useContext, useState } from 'react';
import axios from "axios";
import DataStore from "../../../dataStore/dataStore";
import LoginStepTwo from "./LoginStepTwo";
import LoginStepOne from "./LoginStepOne";
import LoginFinal from "./LoginFinal";

function Login() {

    //CALL THE DATASTORE GLOBAL VARIABLE FROM STORE
    // const {user, setUser} = useContext(DataStore);

    return (

        <>
            <LoginStepOne/>
            <LoginStepTwo/>
            <LoginFinal/>

        </>
    )


}


    export default Login;