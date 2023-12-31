
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Project from './Project';

const LandingPage = () => {
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showNewText, setShowNewText] = useState(false);
  const [h2Message, setH2Message] = useState(''); // New state variable for dynamic typing of h2

  useEffect(() => {
    const text =
      "Heyy World  Am Sayali, a Mimic level Designer. I'm a talented and passionate female designer, specializing in creating innovative tools for design workflows. I strive to empower creatives with intuitive and user-friendly interfaces. Let's collaborate and bring your design ideas to life...";
    let currentIndex = 0;
    let timer;

    timer = setInterval(() => {
      setMessage((prevMessage) => prevMessage + text[currentIndex]);

      if (currentIndex === text.length - 2) {
        clearInterval(timer);
        setTimeout(() => {
          setMessage('');
          setDisabled(true);
          setShowNewText(true);
          startH2Typing(); // Start dynamic typing of h2 after the message is complete
        }, 4000);
      }

      currentIndex++;
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleH2Click = () => {
    setH2Message(' '); // Clear h2 message on click
  };

  const startH2Typing = () => {
    const h2Text =
      " Take a moment to go through my designs. And don't forget to reach out to me by Reaching out to me on my Behance page.... Details can be explored at the about page of the website at the top.";
    let currentIndex = 0;
    let timer;

    timer = setInterval(() => {
      setH2Message((prevMessage) => prevMessage + h2Text[currentIndex]);

      if (currentIndex === h2Text.length - 2) {
        clearInterval(timer);
      }

      currentIndex++;
    }, 50);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle your dark mode styles here
    // For example, you can add/remove a CSS class to the body element
    // document.body.classList.toggle('dark-mode');
  };

  return (
    <div
      style={{
      ///  backgroundColor: darkMode ? '#1f1c1c' : '#ffffff',
       // color: darkMode ? 'red' : 'black',
        height: '100vh',
        fontSize: 'small',
        display: 'flex',
        fontFamily: 'monospace',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #a7c7e4, #ffffff)'
      }}
    >
      {message ? (
        <motion.h1
          style={{
            color: darkMode ? 'black' : 'blue',
            fontSize: '48px',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 0,
          }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          {message}
        </motion.h1>
      ) : null}

      {showNewText && (
        <h2
          onClick={handleH2Click}
          style={{ fontFamily: 'monospace', color: darkMode ? 'black' : 'blue' }}
        >
          {h2Message}
        </h2>
      )}

      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '16px',
          color: darkMode ? 'blue' : 'black',
        }}
      >
        <label className="switch" style={{ fontSize: '24px' }}>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <label style={{ cursor: 'pointer', paddingRight: '30px', fontFamily: 'Sans-Serif', fontSize: '20px' }}>
          Dark Mode
        </label>
      </div>

      {showNewText && <Project />}
    </div>
  );
};

export default LandingPage;

