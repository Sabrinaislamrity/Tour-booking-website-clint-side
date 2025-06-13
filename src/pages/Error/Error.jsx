import React from 'react';
import errorBotImg from '../../assets/error.png';
import { Link } from 'react-router';

const Error = () => {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
     <div className="bg-white shadow-2xl rounded-2xl p-16 flex flex-col items-center w-full max-w-6xl">

        
        <div className="flex items-center justify-center text-[180px] font-bold relative mb-10 text-white drop-shadow-md">
          <span className="relative z-10">4</span>

          
          <div className="absolute z-20">
          <img
  src={errorBotImg}
  alt="Error Bot"
  className="w-[600px] h-[600px] object-contain max-w-none animate-bounce"
/>

          </div>

          <span className="relative z-10">04</span>
        </div>

    
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
          <p className="text-gray-600 text-xl">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>

        {/* Button */}

        <Link to={`/`}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 text-lg rounded-md transition duration-300 cursor-pointer">
          Go Back Home
        </button>
          </Link>
       
      </div>
    </div>
      </>
    );
};

export default Error;