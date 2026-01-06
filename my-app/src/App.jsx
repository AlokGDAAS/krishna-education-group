import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Upcoming_exams from "./pages/Upcoming_exams";
import Study_material from "./pages/Study_material";
import UPPSC from "./components/exams/UPPSC";
import O_level from "./components/exams/O_level";
import Practice_test from "./components/Practice_tests";
import Quiz from "./components/quiz/Quiz";
import O_level_quiz from "./components/quiz/O_level_quiz";
import UPPSC_quiz from "./components/quiz/UPPSC_quiz";
import VedioLec from "./components/YoutubeVedios/VedioLec";
import Main_slider_1 from "./components/ImageSlider";
import O_level_quiz_2 from "./components/quiz/O_level_quiz_2";
import O_level_quiz_2_read_mode from "./components/quiz/O_level_quiz_2_read_mode";


function App() {
  return (
    <div className="min-h-screen bg-[var(--secondary)]/50 p-2">
      <Navbar />
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <Main_slider_1 />
          </div>
      
      <div className=" mx-auto py-2 min-h-screen shadow-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />         
          <Route path="study-mat" element={<Study_material />} />
          <Route path="upcoming-exams" element={<Upcoming_exams />} />          
          <Route path="vedio-lec" element={<VedioLec />} />          
          <Route path="uppsc" element={<UPPSC />} />
          <Route path="o-level" element={<O_level />} />
          <Route path="practice-test" element={<Practice_test />} />
          <Route path="/practice-test/:slug" element={<Quiz/>} />
          <Route path="/practice-test-o-level/:slug" element={<O_level_quiz/>} />
          <Route path="/practice-test-o-level_2/:slug" element={<O_level_quiz_2/>} />
          <Route path="/practice-test-o-level_2_read_mode/:slug" element={<O_level_quiz_2_read_mode/>} />
          <Route path="/practice-test-uppsc/:slug" element={<UPPSC_quiz/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
