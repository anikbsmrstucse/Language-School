import React, { useEffect, useState } from 'react';

const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDarkModeEnabled);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    const htmlElement = document.querySelector('html');
    isDarkMode ? htmlElement.classList.add('dark') : htmlElement.classList.remove('dark');
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="fixed right-4 bottom-4 p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-300 focus:outline-none"
    >
      {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ToggleDarkMode;
