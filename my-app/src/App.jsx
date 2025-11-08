import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import How_to_start from './components/How_to_start'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Up_exams from './pages/Up_exams'
import Study_mat from './pages/Study_mat'


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
