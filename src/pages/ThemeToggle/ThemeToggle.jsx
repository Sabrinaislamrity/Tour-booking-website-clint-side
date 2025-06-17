import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="flex items-center gap-2 p-4">
      <label className="flex items-center cursor-pointer">
        <span className="mr-2 text-sm font-medium text-gray-800 dark:text-gray-200">
          
        </span>
        <input
          type="checkbox"
          className="toggle"
          checked={dark}
          onChange={() => setDark(!dark)}
        />
      </label>
    </div>
  );
};

export default ThemeToggle;
