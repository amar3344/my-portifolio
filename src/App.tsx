import './App.css';
import Header from './components/header/Header';
import About from "./components/about/About"
import { useState,useEffect } from 'react';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';


const myDetails = {
  "basic_info": {
    "name": "Amar Kumar Reddy",
      "titles": ["Front-end Developer", "Dev Team lead", "Mobile App Developer", "Web App Developer", "MERN Stack Developer"]
  },
  "skills": {
    "icons": [
      {
        "name": "HTML 5",
        "class": "devicon-html5-plain",
        "level": "95"
      },
      {
        "name": "CSS 3",
        "class": "devicon-css3-plain",
        "level": "95"
      },
      {
        "name": "Angular",
        "class": "devicon-angularjs-plain",
        "level": "80"
      },
      {
        "name": "TypeScript",
        "class": "devicon-typescript-plain",
        "level": "90"
      },
      {
        "name": "JavaScript",
        "class": "devicon-javascript-plain",
        "level": "70"
      },
      {
        "name": "Sass",
        "class": "devicon-sass-original",
        "level": "75"
      },
      {
        "name": "Bootstrap",
        "class": "devicon-bootstrap-plain",
        "level": "85"
      },
      {
        "name": "C#",
        "class": "devicon-csharp-plain",
        "level": "65"
      },
      {
        "name": "MySql",
        "class": "devicon-mysql-plain",
        "level": "60"
      }
    ]
  }
}

const resumeData = {
    "basic_info": {
      "description_header": "Hi",
      "description": "👋 I'm Amar kumar Reddy. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜",
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
      <div>
        <Header sharedData={myDetails.basic_info} />
        <About resumeBasicInfo={resumeData.basic_info}/>
        <Projects resumeBasicInfo={resumeData.basic_info}/>
        <Skills/>
        <Experience/>
        <Footer/>
      </div>
    );
}

export default App;
