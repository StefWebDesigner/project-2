import React, { useEffect, useState, useContext } from 'react'
import ExperimentalNav from '../navbar/ExperimentalNav'
import DataStore from "../../dataStore/dataStore";
import axios from 'axios'

function UserPortal() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [accountType, setAccountType] = useState("")
    const [ageType, setAgeType] = useState("")
    const [email, setEmail] = useState("")
    const [createdDate, setCreatedDate] = useState("")
    const [disabledSubmit, setDisabledSubmit] = useState(true)
    const [disabledInfo, setDisabledInfo] = useState(false)
    const [readonly, setReadOnly] = useState(true)
    const [showButton, setShowButton] = useState(true)

    const {user} = useContext(DataStore)


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
        }

        ).catch(
           err => {
               console.log(err)
            }
        )
    }

    useEffect( () => getUserInfo())

    const changeInfo = (e) => {
        e.preventDefault();
        setDisabledSubmit(false)
        setDisabledInfo(true)
        setReadOnly(false)
        setShowButton(false)
    }

    const submit = (e) => {
       
    }

  return (
      <>
      <ExperimentalNav/>
    <form>
    <div>
    <label>First Name:</label> 
    <input placeholder={firstName} readOnly = {readonly}/>
    </div>
    <div>
    <label>Last Name:</label> 
    <input placeholder={lastName}  readOnly = {readonly}/>
    </div>
    <div>
    <label>Username:</label> 
    <input placeholder={userName}  readOnly = {readonly}/>
    </div>
    <div>
    <label>Email:</label> 
    <input placeholder={email}  readOnly = {readonly}/>
    </div>
    <div>
    <label>Account Type: {accountType}</label> 
    </div>
    <div>
    <label>Age Type: {ageType}</label> 
    </div>
    <div>
    <label>Date Joined: {createdDate}</label> 
    </div>
    {showButton ? 
    <button onClick = {changeInfo} disabled={disabledInfo}>Change Info</button>
    :
    <button onClick = {submit} disabled={disabledSubmit}>submit</button>
    }
    </form>
    </>
  )
}

export default UserPortal