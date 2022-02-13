import React from 'react';
import { TextField, Button } from '@mui/material'
import { useRef, useState, useEffect, useContext} from 'react';
import AuthContext from '../context/AuthProvider.jsx'
import axios from 'axios'
import "../styles/admin.css"

export default function Admin() {
   const userRef = useRef();
   const { setAuth } = useContext(AuthContext);
   const [user, setUser] = useState('');
   const [pwd, setPwd] = useState('');
   const url = 'https://gentle-fortress-16563.herokuapp.com/sessions'

   useEffect(() => {
     userRef.current.focus();
   }, [])

   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const response = await axios.post(url, JSON.stringify({user,pwd}), 
       {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
       })
      console.log(JSON.stringify(response.data))
     } catch (err) {  
       console.log(err)
     }
   }
    
  return (
    <>
      <h1 className="adminTitle">Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">

          <label htmlFor="email"><b>Username</b></label>
          <input type="text" ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} placeholder="Enter Username" name="email" required />

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" onChange={(e) => setPwd(e.target.value)} value={pwd} placeholder="Enter Password" name="password" required />
              
          <button type="submit" onClick={handleSubmit} >Login</button>
        </div>
    </form>
    </>
  )
}
