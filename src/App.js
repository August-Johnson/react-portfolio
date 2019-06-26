import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import SelfImage from "./components/SelfImage";
import ImageSource from './assets/images/august-background.jpg';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ProjectContainer from './components/ProjectContainer';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

import ProjectImageOne from './assets/images/project-1.png';

import './assets/css/reset.css';
import './assets/css/app.css';

function App() {
  return (
    <Home>
      <Header>
        <SelfImage imageSource={ImageSource} />
      </Header>
      <AboutMe />
      <Skills />
      <ProjectContainer>
        <ProjectCard imageSrc={ProjectImageOne} projectTitle={"When I was 18"} projectDescription={""} projectLink={"https://sindygeb.github.io/incredible-ninjas/"} githubLink={"https://github.com/sindygeb/incredible-ninjas"} />
      </ProjectContainer>
      <Footer />
    </Home>
  );
}

export default App;