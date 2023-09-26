import React from 'react'
import Home from './comp/home'
import Nav from './comp/nav'
import { BrowserRouter } from 'react-router-dom'



const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Nav/>
    <Home/>
    
    </BrowserRouter>
  
  
    </>
  )
}

export default App
