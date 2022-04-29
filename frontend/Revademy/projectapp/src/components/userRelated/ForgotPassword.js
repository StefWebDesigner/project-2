import React, { useRef } from 'react';
import emailjs from "emailjs-com"

export default function ForgotPassword() {
    const form = useRef();

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_g35quvf', 'template_su0e0vu', form.current, 'MM-Fl5TdQ9ZHirR5H')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
 
    
        return(
            <>
            <form ref={form} onSubmit={sendEmail}>
                <h3>Forgot Password</h3>
                <div>
                    <label>Enter Email:</label>
                    <input type='email' placeholder='Email Address' name='email'/>
                </div>
                <button>Submit</button>
            </form>
            </>
        )
   
}

