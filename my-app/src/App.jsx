import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import How_to_start from './components/How_to_start'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Up_exams from './pages/Up_exams'
import Study_mat from './pages/Study_mat'
import Quiz from './pages/Quiz'
import Polity_paper from './pages/Polity_paper'
import Practice_test from './components/Practice_test'
import UPPSC from './components/UPPSC'
import O_level from './Exams/O_level'
import UPSC_test_hi_1 from './test/UPSC_test_hi_1'
import UPSC_test_en_1 from './test/UPSC_test_en_1'
import UPSC_test_en_2 from './test/UPSC_test_en_2'
import UPSC_test_en_3 from './test/UPSC_test_en_3'
import UPSC_test_hi_2 from './test/UPSC_test_hi_2'
import UPSC_test_hi_3 from './test/UPSC_test_hi_3'


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
        <Route path='quiz' element={<Quiz/>}/>
        <Route path='pol-quiz' element={<Polity_paper/>}/>
        <Route path='practice-test' element={<Practice_test/>}/>
        <Route path='uppsc' element={<UPPSC/>}/>
        <Route path='o-level' element={<O_level/>}/>        
        <Route path='upsc-hi-1' element={<UPSC_test_hi_1/>}/>        
        <Route path='upsc-en-1' element={<UPSC_test_en_1/>}/>        
        <Route path='upsc-en-part-1' element={<UPSC_test_en_1/>}/>        
        <Route path='upsc-en-part-2' element={<UPSC_test_en_2/>}/>        
        <Route path='upsc-en-part-3' element={<UPSC_test_en_3/>}/>        
        <Route path='upsc-hi-part-1' element={<UPSC_test_hi_1/>}/>        
        <Route path='upsc-hi-part-2' element={<UPSC_test_hi_2/>}/>        
        <Route path='upsc-hi-part-3' element={<UPSC_test_hi_3/>}/>        
       </Routes>
    </div>
    <Footer/>
   </div>
  )
}

export default App
