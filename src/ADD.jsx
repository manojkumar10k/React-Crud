import React, { useState } from 'react'

function ADD() {
    const [name,setName]= useState("")
    const [email,setEmail] =useState("")
    
    const change = (e)=>{
        e.preventDefault()
        fetch("http://localhost:5002/user",{
            method:"post",
            Headers:{"content-type":"application/json"},
            body:JSON.stringify({name,email})
        })
       
    }

  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">Add Page</h1>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form onSubmit={change} className="card p-4 shadow">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ADD
