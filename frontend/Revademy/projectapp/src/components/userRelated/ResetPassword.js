import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


function ResetPassword() {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    

    const params  = useParams();
    const token = params.id;

    let navigate = useNavigate();
    const passwordChange = (e) =>{
        let path = '/login';
        e.preventDefault();
        if(password1 === password2 && password1 != ''){
            axios.post(`http://localhost:8080/forgot/reset?password=${password1}&token=${token}`)
            .then(({data}) => {
                console.log(data);
            }
    
        
            ).catch(
                err => {
                    console.log(err)
                }
            )
            navigate(path);
           } else{
            alert("Passwords do not match")
        }
    }
  return (
    <>
            <form>
                <h3>Reset Password</h3>
                <div>
                    <label>Enter New Password:</label>
                    <input type='password' placeholder='password' value={password1} onChange={e => setPassword1(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm New Password:</label>
                    <input type='password' placeholder='password' value={password2} onChange={e => setPassword2(e.target.value)}/>
                </div>
                <button onClick={passwordChange}>Submit</button>
            </form>
            </>
  )
}

export default ResetPassword