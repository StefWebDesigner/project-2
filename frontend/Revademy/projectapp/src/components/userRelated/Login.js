import { useContext, useState } from 'react';
import axios from "axios";
import DataStore from "../../dataStore/dataStore";

function Login() {

    //CALL THE DATASTORE GLOBAL VARIABLE FROM STORE
    const {user, setUser} = useContext(DataStore);

    return (

        <>
        </>
    )


}


    export default Login;