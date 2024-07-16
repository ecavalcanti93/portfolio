import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'


function App() {


  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Skills />
      <Portfolio />
      <Contact/>
    </div>
  )
}

export default App
