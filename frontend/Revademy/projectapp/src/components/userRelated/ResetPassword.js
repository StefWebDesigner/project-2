import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function ResetPassword() {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');


    let navigate = useNavigate();
    const passwordChange = (e) =>{
        let path = '/login';
        e.preventDefault();
        if(password1 === password2){
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