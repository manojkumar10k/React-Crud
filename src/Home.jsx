import React, { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [student,setStudent]= useState([])
    const [inp,setInput]= useState('')

    useEffect(()=>{
        fetch("http://localhost:5002/user")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setStudent(data)
        })
    },[])
      const str = student.filter((item)=>
      item.name.toLowerCase().includes(inp.toLowerCase())
      )
  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">HOME PAGE</h1>
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search by name..."
      onChange={(e) => setInput(e.target.value)}
    />
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover">
        <tbody>
          <tr className="table-dark">
            <td>ID:</td>
            <td>NAME:</td>
            <td>EMAIL:</td>
            <td>Action</td>
          </tr>
          {student &&
            str.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>
                  <Link
                    to={`/Viewuser/${v.id}`}
                    className="btn btn-info btn-sm me-2"
                  >
                    View
                  </Link>
                  <Link
                    to={`/Edit/${v.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/DELETE/${v.id}`}
                    className="btn btn-danger btn-sm"
                  >
                    DELETE
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
  
  )
}

export default Home;
