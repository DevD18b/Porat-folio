

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle your dark mode styles here
    // For example, you can add/remove a CSS class to the body element
    // document.body.classList.toggle('dark-mode');
  };

  const navLinkStyles = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s', // Add a transition for smooth color change
  };

  const handleHover = (e) => {
    e.target.style.color = 'red'; // Change the color to your desired hover color
  };

  const handleHoverExit = (e) => {
    e.target.style.color = 'white'; // Change back to the original color when the hover ends
  };

  return (
    <>
      <nav style={{color:"white"}} className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-primary'}`}>
        <div className="container-fluid">
          <Link to="/" style={{ color: "white" }} className="navbar-brand"></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" style={navLinkStyles} className="nav-link active" aria-current="page" onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>Home</Link>
              </li>
              <li className="nav-item" style={{ paddingLeft: "10px" }}>
                <Link to="/about" style={navLinkStyles} className="nav-link" onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>About</Link>
              </li>
              <li className="nav-item" style={{ paddingLeft: "10px" }}>
                <Link to="/project" style={navLinkStyles} className="nav-link" onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>Projects</Link>
              </li>
              <li className="nav-item" style={{ paddingLeft: "10px" }}>
                <Link to="/guestBox" style={navLinkStyles} className="nav-link" onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>GuestQuestionBox</Link>
              </li>
            </ul>
            {/* Dark mode toggle button */}
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
