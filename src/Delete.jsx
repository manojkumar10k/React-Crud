import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Delete() {
       const navigate =  useNavigate()
    const {useID} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:5002/user/${useID}`,{
            method:"delete",
            
        })
        .then(()=>{
            navigate("/")
        })
    },[useID])
        
  return null ;
}

export default Delete;
