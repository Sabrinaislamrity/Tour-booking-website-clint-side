import React, { useState, useEffect, } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router';
// import { AuthContext } from '../../Provider/AuthProvider';
// import userIcon from "../../assets/author.png"


const Navber = () => {

//   const {user, logOut} = use(AuthContext);
// const handleLogOut = () =>{

//   console.log("user trying to logout");
//   logOut().then(() => {
//     alert("Sign-out successful");
//   }).catch((error) => {
//     console.log(error);
    
//   });
  
// };

// const handleRegestered = () =>{
//   console.log("user trying to resistered");
// }




  const [loading, setLoading] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setActivePath(window.location.pathname);
    };

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

  const linkClass = (path) =>
    `m-4 text-sm font-bold hover:text-blue-700 ${
      activePath === path ? 'text-[#ea5267] border-b-2 border-yellow-600' : ''
    }`;

  const links = (
    <>
      <a
        href="/"
        className={linkClass('/')}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/');
        }}
      >
        Home
      </a>
      <a
        href="/companydetails"
        className={linkClass('/companydetails')}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/companydetails');
        }}
      >
        Company Details
      </a>
      <a
        href="/myprofile"
        className={linkClass('/myprofile')}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/myprofile');
        }}
      >
        My Profile Page
      </a>
      <a
        href="/*"
        className={linkClass('/*')}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('/*');
        }}
      >
        Contact Us
      </a>
    </>
  );

  return (
    <div className="navbar bg-base-100 relative z-20 max-w-7xl mx-auto">
      <div className="navbar-start">
        {/* <div className="">{user && user.email}</div> */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Law.BD Logo" className="w-60 h-20" />
         
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4 flex">
     
     
     
     
      <Link to="/auth/login">
  <button className="relative group overflow-hidden px-6 py-2 border-2 border-pink-600 bg-pink-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105">
    <span className="absolute left-0 top-0 h-full w-0 bg-pink-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
    <span className="relative z-10">Login</span>
  </button>
  </Link>



  {/* Login Button */}
  {/* <Link to="/myprofile">
  <div className="login-btn ">
    <img className='rounded-full w-16' src={`${user ? user.photoURL : userIcon}`} alt="" />
  </div>
  </Link>
 
  {user ?  
  <button onClick={handleLogOut} className="relative group overflow-hidden px-6 py-2 border-2 border-pink-600 bg-pink-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105">
    <span className="absolute left-0 top-0 h-full w-0 bg-pink-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
    <span className="relative z-10">Login Out</span>
  </button>
   :  <Link to="/auth/login">
  <button className="relative group overflow-hidden px-6 py-2 border-2 border-pink-600 bg-pink-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105">
    <span className="absolute left-0 top-0 h-full w-0 bg-pink-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
    <span className="relative z-10">Login</span>
  </button>
  </Link>} */}
 
  {/* Register Button */}

<Link to="/auth/register">

<button className="relative group overflow-hidden px-6 py-2 border-2 border-pink-600 bg-white text-pink-600 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105">
  <span className="absolute left-0 top-0 h-full w-0 bg-pink-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
  <span className="relative z-10 transition duration-300 group-hover:text-white">Register</span>
</button>
</Link>
  {/* {user ? 
  
  <button  className="relative group overflow-hidden px-6 py-2 border-2 border-pink-600 bg-pink-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105">
  <span className="absolute left-0 top-0 h-full w-0 bg-pink-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
  <span className="relative z-10">Registered</span>
</button> :

<Link to="/auth/register">

<button className="relative group overflow-hidden px-6 py-2 border-2 border-pink-600 bg-white text-pink-600 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105">
  <span className="absolute left-0 top-0 h-full w-0 bg-pink-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
  <span className="relative z-10 transition duration-300 group-hover:text-white">Register</span>
</button>
</Link>

}
  */}
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
