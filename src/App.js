import React from 'react'
import Header from './components/common/heading/Header'
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/home/Home'
const App  = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
