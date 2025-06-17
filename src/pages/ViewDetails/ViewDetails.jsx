import React from 'react';
import { useLoaderData } from 'react-router'; // Assuming you want to keep this for data loading

const ViewDetails = () => {
  const {
    tour_name,
    _id,
    image,
    guide_name,
    guide_photo,
    guide_contact = "018XXXXXXXX",
    duration,
    departure_date,
    price,
    description = "No description available.",
    booking_count = 0,
    departure_location = "Dhaka",
    destination = "Unknown",
  } = useLoaderData();

  const handleBookNow = () => {
    window.location.href = `/jobApply/${_id}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-2xl mt-10">
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
        <img
          src={image}
          alt={tour_name}
          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-lg">
          {tour_name}
        </div>
      </div>

      <div className="flex items-center gap-6 mb-8">
        <img
          src={guide_photo}
          alt={guide_name}
          className="w-16 h-16 rounded-full border-4 border-green-500 object-cover shadow-md"
        />
        <div>
          <p className="text-2xl font-semibold text-gray-800">{guide_name}</p>
          <p className="text-gray-600 flex items-center gap-2 mt-1">
            <span role="img" aria-label="phone">📞</span> {guide_contact}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 mb-8 border rounded-xl p-6 shadow-inner bg-green-50">
        <p><strong>Duration:</strong> <span className="text-green-700">{duration}</span></p>
        <p><strong>Price:</strong> <span className="text-green-700">৳ {price.toLocaleString()}</span></p>
        <p><strong>Departure:</strong> <span className="text-green-700">{departure_location} on {departure_date}</span></p>
        <p><strong>Destination:</strong> <span className="text-green-700">{destination}</span></p>
        <p><strong>Booking Count:</strong> <span className="text-green-700">{booking_count}</span></p>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b border-green-500 pb-2">Description</h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
      </div>

      <button
        onClick={handleBookNow}
        className="w-full md:w-auto px-10 py-4 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 text-white font-bold rounded-3xl transition duration-300 shadow-lg"
        aria-label={`Book now for ${tour_name}`}
      >
        Book Now
      </button>
    </div>
  );
};

export default ViewDetails;
