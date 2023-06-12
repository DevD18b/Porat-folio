import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFigma ,FaBehance } from 'react-icons/fa';

const AboutPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle your dark mode styles here
    // For example, you can add/remove a CSS class to the body element
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div style={{ backgroundColor: darkMode ? '#1f1c1c' : '#f2f2f2', padding: '40px', fontFamily: 'Arial', color: darkMode ? '#ffffff' : '#000000' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <div style={{ marginRight: '10px', fontSize: '20px' }}>
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
        </div>
        <div style={{ fontSize: '20px', cursor: 'crosshair' , color: 'red' }}>
          Switcher
        </div>
      </div>
      <h1 style={{ fontSize: '36px', marginBottom: '20px', textAlign: 'center' , color: 'blueviolet' }}>About Me</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.5', textAlign: 'center' }}>
          I'm a passionate and dedicated designer with years of experience in creating visually stunning and user-friendly
          interfaces. My goal is to craft digital experiences that leave a lasting impression. I specialize in using
          tools like Figma, Canva, and Adobe Design to bring ideas to life. Let's collaborate and create something amazing!
        </p>
      </div>
      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        <p style={{ color: darkMode ? '#777' : '#888', marginBottom: '10px' }}>Connect with me:</p>
        <div>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? '#0d6efd' : '#0d6efd', margin: '0 10px' }}>
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sayali-kshirsagar-833518246" target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? '#0d6efd' : '#0d6efd', margin: '0 10px' }}>
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? '#0d6efd' : '#0d6efd', margin: '0 10px' }}>
            <FaTwitter size={24} />
          </a>
          {/* <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? '#0d6efd' : '#0d6efd', margin: '0 10px' }}>
            <FaFigma size={24} />
          </a> */}
          <a href="https://www.behance.net/sayalikshirsa" target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? '#0d6efd' : '#0d6efd', margin: '0 10px' }}>
            <FaBehance   size={24} /> </a>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
