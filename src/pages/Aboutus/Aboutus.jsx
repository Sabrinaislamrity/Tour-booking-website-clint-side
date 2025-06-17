import React from 'react';

const Aboutus = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
        About Us
      </h1>

      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        Welcome to <span className="font-semibold">WanderWise</span> — your personalized tour package booking platform designed to make your travel dreams a reality.
        Whether you're looking to escape into nature, explore historical landmarks, or enjoy beachside relaxation, we connect you with curated travel experiences across Bangladesh and beyond.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">🌍 Our Mission</h2>
          <p className="text-base leading-relaxed">
            Our mission is to simplify and personalize travel planning. We empower travelers and local guides by providing a secure and user-friendly platform where anyone can create, manage, or book unforgettable tours.
          </p>
        </div>

        <div>
          <img
            src="https://i.ibb.co/7JLb9N80/pexels-saymon-sami-202123-725100.jpg"
            alt="Travel scenery"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">🚀 What Makes Us Unique?</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>Real-time booking data with MongoDB.</li>
          <li>Secure Firebase authentication with Google login.</li>
          <li>Guides can add, update, and manage their own packages.</li>
          <li>Booking status tracking and confirmation.</li>
          <li>Responsive design with dark/light theme toggle.</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold text-green-600 mb-2">🧭 Built with Passion</h2>
        <p>
          Developed as a full-stack MERN + Firebase project showcasing modern web technologies to build a seamless travel booking experience.
        </p>
        <p className="mt-4 italic">“Travel not to escape life, but so life doesn't escape you.”</p>
      </div>
    </div>
  );
};

export default Aboutus;
