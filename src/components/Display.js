import React from 'react';

const Display = ({ value }) => (
  <div className="display bg-gray-200 dark:bg-gray-700 p-4 rounded mb-4 text-right text-2xl text-black dark:text-white">
    {value}
  </div>
);

export default Display;
