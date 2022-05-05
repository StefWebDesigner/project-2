import React, { useEffect, useState, useContext } from 'react'
import ExperimentalNav from '../navbar/ExperimentalNav'
import DataStore from "../../dataStore/dataStore";
import DataContext from "../../dataStore/dataStore";
import axios from 'axios'
import './UserPortal.css'

function UserPortal() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [accountType, setAccountType] = useState("")
    const [ageType, setAgeType] = useState("")
    const [email, setEmail] = useState("")
    const [createdDate, setCreatedDate] = useState("")
    const [userId, setUserId] = useState(0)
    const [userPassword, setUserPassword] = useState("")
    const [disabledSubmit, setDisabledSubmit] = useState(true)
    const [disabledInfo, setDisabledInfo] = useState(false)
    const [readonly, setReadOnly] = useState(true)
    const [showButton, setShowButton] = useState(true)

    const {user} = useContext(DataStore)
    const {setUser} = useContext(DataContext);

    const getUserInfo = () =>{
        axios.get(`http://localhost:8080/user/${user.username}`)
        .then(({data}) => {
            
            setFirstName(data.firstname)
            setLastName(data.lastname)
            setUserName(data.username)
            setAccountType(data.accountTypes)
            setAgeType(data.ageType)
            setEmail(data.email)
            setCreatedDate(data.createdDate)
            setUserId(data.id)
            setUserPassword(data.password)
           
        }

        ).catch(
           err => {
               console.log(err)
            }
        )
        
    }

    useEffect( () => { 
        getUserInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const changeInfo = (e) => {
        e.preventDefault();
        setDisabledSubmit(false)
        setDisabledInfo(true)
        setReadOnly(false)
        setShowButton(false)
    }

    const submit = (e) => {
        e.preventDefault();
        const values = {
            "id": userId,
            "firstname": firstName,
            "lastname": lastName,
            "username": userName,
            "accountTypes": accountType,
            "ageType": ageType,
            "email": email,
            "password": userPassword,
            "createdDate": createdDate
        }
        
    if(firstName && lastName && userName && email && userPassword){
       axios.put(`http://localhost:8080/user/update?id=${userId}`, values)
       .then(({data}) => {
           console.log(data)
       }
       ).catch(
        err => {
            console.log(err)
         }
     )
     setUser(values)
     setDisabledSubmit(true)
     setDisabledInfo(false)
     setReadOnly(true)
     setShowButton(true)
     alert("User Info Updated.")
    } else{alert("Please fill out all sections.")}
    }
    

  return (
      <>
      <div className='user-portal-body'>
      <ExperimentalNav/>
    <form className='user-update-form'>
    <h2 className='user-update-title'>User Info</h2>
    <div>
    <label>First Name:</label> 
    <input className='user-update-input' placeholder={firstName} onChange={e => setFirstName(e.target.value)} readOnly = {readonly}/>
    </div>
    <div>
    <label>Last Name:</label> 
    <input className='user-update-input' placeholder={lastName} onChange={e => setLastName(e.target.value)}  readOnly = {readonly}/>
    </div>
    <div>
    <label>Username:</label> 
    <input className='user-update-input' placeholder={userName}  onChange={e => setUserName(e.target.value)} readOnly = {readonly}/>
    </div>
    <div>
    <label>Email:</label> 
    <input className='user-update-input' type="email" placeholder={email} onChange={e => setEmail(e.target.value)}  readOnly = {readonly}/>
    </div>
    <div>
    <label>Password:</label> 
    <input className='user-update-input' type="password" placeholder={userPassword} onChange={e => setUserPassword(e.target.value)}  readOnly = {readonly}/>
    </div>
    <div>
    <label>Account Type: </label> 
    <p>{accountType}</p>
    </div>
    <div>
    <label>Age Type: </label> 
    <p>{ageType}</p>
    </div>
    <div>
    <label>Date Joined: </label> 
    <p>{createdDate}</p>
    </div>
    {showButton ? 
    <button className='user-update-btn' onClick = {changeInfo} disabled={disabledInfo}>Click to Edit Info</button>
    :
    <button className='user-update-btn' onClick = {submit} disabled={disabledSubmit}>Submit</button>
    }
    </form>
    </div>
    </>
  )
}

export default UserPortal