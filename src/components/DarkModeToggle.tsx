// components/DarkModeToggle.tsx
import React from 'react';

const DarkModeToggle = () => {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  };

  return <button type='submit' aria-label='toggle dark mode' onClick={toggleDarkMode}>Toggle Dark Mode</button>;
};

export default DarkModeToggle;
