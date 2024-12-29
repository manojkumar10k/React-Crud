import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Edit() {
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
     },[useID])   

    const change =(e)=>{
        e.preventDefault()
        const handle ={name,email}
        fetch(`http://localhost:5001/user/${useID}`,{
            method:"put",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(handle)
        }) 
    }
  return (
    <div className="container mt-5">
  <h1 className="text-center mb-4">EDIT</h1>
  <div className="card p-4 shadow">
    <form onSubmit={change}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</div>

  )
}

export default Edit
