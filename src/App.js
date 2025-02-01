import React from "react";
import "./App.css";
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Blogs from "./pages/BlogsPg"
import Contact from "./pages/Contact"
import Skills from "./Components/Skills";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import SkillSet from "./pages/SkillSet";



function App() {
    return (
      <>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/skills" element={<SkillSet />} />        
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </>
      
    );
}
export default App;