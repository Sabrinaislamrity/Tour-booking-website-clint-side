import React from 'react';

const JobCard = ({ job }) => {
  const { tour_name, image, guide_name, guide_photo, duration, departure_date, price, _id } = job;

  const handleViewDetails = () => {
    // Navigate to job details page manually
    window.location.href = `/jobs/${_id}`;
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-sm mx-auto">
      <div className="relative group">
        <img
          src={image}
          alt={tour_name}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {duration}
        </div>
        <div className="absolute bottom-3 right-3 bg-white bg-opacity-80 px-3 py-1 rounded-full text-sm font-medium shadow">
          Departure: {departure_date}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 truncate">{tour_name}</h3>

        <div className="flex items-center mb-4">
          <img
            src={guide_photo}
            alt={guide_name}
            className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover mr-3"
          />
          <span className="text-gray-700 font-medium">{guide_name}</span>
        </div>

        <p className="text-lg font-semibold text-blue-700 mb-5">৳ {price.toLocaleString()}</p>

        <button
          onClick={handleViewDetails}
          className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-semibold py-3 rounded-3xl transition"
          aria-label={`View details about ${tour_name}`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
