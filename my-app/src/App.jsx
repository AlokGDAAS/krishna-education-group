import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Study_mat from './assets/pages/Study_mat'
import Up_exams from './assets/pages/Up_exams'
import How_to_start from './assets/components/How_to_start'
import Footer from './assets/components/Footer'

function App() {
 

  return (
   <div className=''>
    <Navbar/>
    <div className='md:max-w-[90vw] mx-auto bg-[var(--secondary)] p-2 min-h-screen'>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='how-to-start' element={<How_to_start/>}/>
        <Route path='study-mat' element={<Study_mat/>}/>
        <Route path='up-ex' element={<Up_exams/>}/>
       </Routes>
    </div>
    <Footer/>
   </div>
  )
}

export default App
