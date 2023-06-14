import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  };

  return (
    <button className='btn btn-sm bg-white' onClick={toggleDarkMode}>
      {darkMode ? <FaSun></FaSun> : <FaMoon></FaMoon>}
    </button>
  );
};

export default DarkModeToggle;
