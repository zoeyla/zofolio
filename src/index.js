// Routing Page

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
// stylesheet
import './index.css';
// components
import Home from './components/home/Home';
import LandingPage from './components/home/LandingPage';
import AboutMe from './components/popups/AboutMe';
import Fortnite from './components/popups/Fortnite';
import Projects from './components/popups/Projects';
import Resume from './components/popups/Resume';

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<AboutMe />} />
        <Route exact path="/fortnite" element={<Fortnite />} />
        <Route exact path="/projects" element={ <Projects />} />
        <Route exact path="/resume" element={ <Resume />} />
      </Routes>
    </Router>
  </div>
);