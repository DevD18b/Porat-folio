



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import LandingPage from './components/Landing';
import AboutPage from './components/AboutPage';
import Project from './components/Project';
import GuestQuestionBox from './components/GuestQuestionBox';

function App() {
  return (
   
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/guestBox" element={<GuestQuestionBox />} />
      </Routes>
    </Router>
  );
}

export default App;
