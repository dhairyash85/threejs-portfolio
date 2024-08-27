import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Project from './Pages/Project'
const App = () => {
  return (
   <main className='bg-slate-300/20'>
     <BrowserRouter>
        <Navbar/>
      <Routes>
        {/* <Route></Route> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Project/>}/>

      </Routes>
     </BrowserRouter>
   </main>
  )
}

export default App