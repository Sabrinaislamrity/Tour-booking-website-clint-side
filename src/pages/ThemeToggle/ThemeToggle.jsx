import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // Initialize from localStorage or default to false (light)
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full border border-green-600 bg-white dark:bg-gray-800 text-green-600 dark:text-green-300 transition"
    >
      {dark ? (
        // Sun icon for light mode (you can replace with any icon)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m8.66-11.34l-.707.707M4.05 19.95l-.707.707M21 12h-1M4 12H3m15.66 5.66l-.707-.707M4.05 4.05l-.707-.707M12 7a5 5 0 000 10 5 5 0 000-10z"
          />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="none"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
