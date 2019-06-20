import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import SelfImage from "./components/SelfImage";
import ImageSource from './assets/images/august-background.jpg';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';

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
      <Footer />
    </Home>
  );
}

export default App;