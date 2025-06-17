import React from 'react';

const Error = () => {
  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="bg-white shadow-2xl rounded-2xl p-16 flex flex-col items-center w-full max-w-6xl">

        {/* 404 + GIF */}
        <div className="flex items-center justify-center text-[180px] font-bold relative mb-10 text-white drop-shadow-md">
          <span className="relative z-10">4</span>
          <div className="absolute z-20">
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTBqbnAzeTBrb3F4am16cDAwbXdqaHljams2emtseXZvaXczbXc3dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ji6zzUZwNIuLS/giphy.gif"
              alt="Lost in Himalayas"
              className="w-[400px] h-[300px] object-contain max-w-none"
            />
          </div>
          <span className="relative z-10">04</span>
        </div>

        {/* Message */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! You seem lost in the Himalayas.</h1>
          <p className="text-gray-600 text-xl">Let’s guide you back to basecamp 🏔️</p>
        </div>

        {/* Button */}
        <button
          onClick={goHome}
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 text-lg rounded-md transition duration-300 cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
