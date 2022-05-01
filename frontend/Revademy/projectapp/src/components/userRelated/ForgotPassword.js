import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com"
import axios from 'axios';
import ExperimentalNav from '../navbar/ExperimentalNav';

export default function ForgotPassword() {
    const form = useRef();
    const [email, setEmail] = useState("");
    
    let tempData='';
    const sendEmail = (e) => {
        e.preventDefault();

        
      axios.post(`http://localhost:8080/forgot?email=${email}`)
      .then(({data}) => {
              
               if(data==="No User Matches This Email" || email==""){
                   alert("No User Matches This Email")
               } else{
               tempData = data.token;
               
               var templateParams = {
                email: email,
                message: `http://localhost:3000/resetPassword/${tempData}`
            };
            emailjs.send('service_g35quvf', 'template_su0e0vu', templateParams, 'MM-Fl5TdQ9ZHirR5H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
               alert("Check Your Email.")
           }}
       ).catch(
           err => {
               console.log(err)
           }
       )
    
     e.target.reset()
    }
 
    
        return(
            <>
            <ExperimentalNav/>
            <form ref={form} onSubmit={sendEmail}>
                <h3>Forgot Password</h3>
                <div>
                    <label>Enter Email:</label>
                    <input type='email' placeholder='Email Address' name='email' onChange={e => setEmail(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
            </>
        )
   
}

