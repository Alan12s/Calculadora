import React from 'react';

const Button = ({ onClick, label, className }) => (
  <button 
    onClick={onClick} 
    className={`p-4 text-lg font-bold bg-gray-300 dark:bg-gray-600 rounded transition-all duration-300 hover:bg-gray-400 dark:hover:bg-gray-700 ${className}`}
  >
    {label}
  </button>
);

export default Button;
