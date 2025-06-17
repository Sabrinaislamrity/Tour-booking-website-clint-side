import React from 'react';
import Banaerimg from '../../assets/pexels-ajaybhargavguduru-939729.jpg';

const Banner = () => {
  return (
    <div
      className="hero min-h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${Banaerimg})`,
      }}
    >
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold text-white drop-shadow-lg">
            Discover Your Next Adventure
          </h1>
          <p className="mb-6 text-lg text-gray-200">
            Explore handpicked tour packages that offer breathtaking views, cultural experiences,
            and unforgettable memories.
          </p>
          <a href="/allpackages">
            <button className="btn bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-lg rounded-lg shadow-md">
              Explore All Packages
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
