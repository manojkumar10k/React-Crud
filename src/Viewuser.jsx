import React, { useEffect, useId, useState } from 'react'
import { useParams } from 'react-router-dom'

function Viewuser() {
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const {useID} = useParams()

       useEffect(()=>{
          fetch(`http://localhost:5002/user/${useID}`)
          .then((res)=>{
            return res.json()
          })
          .then((data)=>{
            setName(data.name)
            setEmail(data.email)
          })
          
       })   
  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">STUDENT DETAILS</h1>
    <div className="card p-4 shadow">
      <h2>ID: <span className="text-primary">{useID}</span></h2>
      <h2>Name: <span className="text-success">{name}</span></h2>
      <h2>Email: <span className="text-info">{email}</span></h2>
    </div>
  </div>
  
  )
}

export default Viewuser
