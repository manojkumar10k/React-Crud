import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ADD from './ADD'
import Viewuser from './Viewuser'
import Edit from './Edit'
import Delete from './Delete'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div>
     <div>
      <BrowserRouter>


      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<ADD/>}></Route>
        <Route path='/Viewuser/:useID' element={<Viewuser/>}></Route>
        <Route path='/Edit/:useID' element={<Edit/>}></Route>
        <Route path='/DELETE/:useID' element={<Delete/>}></Route>
      </Routes>
      <div className="d-flex justify-content-center my-4">
  <Link to="/" className="btn btn-primary me-2">HOME</Link>
  <Link to="/add" className="btn btn-success">ADD</Link>
</div>

      </BrowserRouter>
     </div>
    </div>
  )
}

export default App
