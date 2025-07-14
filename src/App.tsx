import './App.css';
import Header from './components/header/Header';
import About from "./components/about/About"
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const myDetails = {
  "basic_info": {
    "name": "Amar Kumar Reddy",
      "titles": ["Front-end Developer", "Dev Team lead", "Mobile App Developer", "Web App Developer", "MERN Stack Developer"]
  },
}

const resumeData = {
    "basic_info": {
      "description_header": "Hi",
      "description": "👋 I'm Amar kumar Reddy. Fictional person for preview purposes :) I'm working with newest front-end frameworks like, React and React Native. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜",
      "section_name": {
        "about": "About me",
        "projects": "Projects",
        "skills": "Skills",
        "experience": "Experience"
      }
    },
  }

function App() { 

   return (
    <BrowserRouter>
      <Header sharedData={myDetails.basic_info} />
      <Routes>
        <Route path="/" element={<About resumeBasicInfo={resumeData.basic_info} />} />
        <Route path="/projects" element={<Projects resumeBasicInfo={resumeData.basic_info} />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
