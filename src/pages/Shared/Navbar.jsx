import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/logo.png'

import userIcon from '../../assets/author.png';
// import ThemeToggle from './ThemeToggle';
import { AuthContext } from '../../provider/AuthProvider';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setActivePath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setActivePath(path);
      window.location.href = path;
    }, 700);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => alert('Sign-out successful'))
      .catch((error) => console.log(error));
  };

  const linkClass = (path) =>
    `m-4 text-sm font-medium 
     ${activePath === path 
      ? 'text-green-600 border-b-2 border-green-600' 
      : 'text-gray-700 dark:text-black hover:text-green-600 dark:hover:text-green-500'}`;

  const links = (
    <>
      <a href="/" className={linkClass('/')} onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>Home</a>
      <a href="/allplants" className={linkClass('/allplants')} onClick={(e) => { e.preventDefault(); handleNavigation('/allplants'); }}>All Plants</a>
      <a href="/addplant" className={linkClass('/addplant')} onClick={(e) => { e.preventDefault(); handleNavigation('/addplant'); }}>Add Plant</a>
      <a href="/myplants" className={linkClass('/myplants')} onClick={(e) => { e.preventDefault(); handleNavigation('/myplants'); }}>My Plants</a>
    </>
  );

  return (
    <div className="navbar relative z-20 bg-white dark:bg-gray-900 rounded-2xl border border-green-600">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Plant Logo" className="w-30 h-10" />
          <span className="text-xl font-bold text-green-800 dark:text-green-300">Plantasia</span>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-4 flex items-center">
        {/* <ThemeToggle /> */}

        {user && (
          <a href="/myprofile" className="relative group">
            <img
              src={user.photoURL || userIcon}
              alt="User"
              className="rounded-full w-12 h-12 cursor-pointer border-2 border-green-600"
              title={user.displayName || 'User'}
            />
            {user.displayName && (
              <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-green-100 text-sm text-green-700 px-4 py-2 rounded shadow group-hover:block hidden">
                {user.displayName}
                <br />
                {user.email}
              </div>
            )}
          </a>
        )}

        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="relative group overflow-hidden px-6 py-2 border-2 border-green-600 bg-green-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-green-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
              <span className="relative z-10">Log Out</span>
            </button>

            <button className="relative group overflow-hidden px-6 py-2 border-2 border-green-600 bg-white text-green-600 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105">
              <span className="absolute left-0 top-0 h-full w-0 bg-green-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
              <span className="relative z-10 group-hover:text-white">Registered</span>
            </button>
          </>
        ) : (
          <>
            <a href="/auth/login">
              <button className="relative group overflow-hidden px-6 py-2 border-2 border-green-600 bg-green-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105">
                <span className="absolute left-0 top-0 h-full w-0 bg-green-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
                <span className="relative z-10">Login</span>
              </button>
            </a>

            <a href="/auth/register">
              <button className="relative group overflow-hidden px-6 py-2 border-2 border-green-600 bg-white text-green-600 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105">
                <span className="absolute left-0 top-0 h-full w-0 bg-green-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
                <span className="relative z-10 group-hover:text-white">Register</span>
              </button>
            </a>
          </>
        )}
      </div>

      {loading && (
        <div className="fixed inset-0 bg-white opacity-50 flex justify-center items-center z-50">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      )}
    </div>
  );
};

export default Navber;
