import React from 'react'
import Header from './components/common/heading/Header'
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/home/Home'
import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome'
const App  = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/courses"  element={<CourseHome/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
