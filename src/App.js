import React, { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <button onClick={toggleDarkMode} className="mode-toggle bg-gray-800 text-white dark:bg-gray-200 dark:text-black">
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
      <Calculator />
      <footer className="footer bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
        <p>Alan Rodríguez - Desarrollador de software</p>
      </footer>
    </div>
  );
};

export default App;
