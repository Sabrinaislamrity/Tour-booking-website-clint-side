import React from 'react';
import { useLoaderData } from 'react-router'; // You said "no react-router-dom" but keeping this because your data comes from loader

const ViewDetails = () => {
    const {
        tour_name,
        image,
        guide_name,
        guide_photo,
        guide_contact = "018XXXXXXXX", // assuming contact is part of your data
        duration,
        departure_date,
        price,
        description = "No description available.",
        booking_count = 0,
        departure_location = "Dhaka",
        destination = "Unknown"
    } = useLoaderData();

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
            <img src={image} alt={tour_name} className="w-full h-72 object-cover rounded-md mb-4" />

            <h2 className="text-3xl font-bold text-gray-800 mb-2">{tour_name}</h2>

            <div className="flex items-center gap-4 mb-4">
                <img src={guide_photo} alt={guide_name} className="w-12 h-12 rounded-full border" />
                <div>
                    <p className="text-lg font-semibold">{guide_name}</p>
                    <p className="text-sm text-gray-500">📞 {guide_contact}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-4">
                <p><strong>Duration:</strong> {duration}</p>
                <p><strong>Price:</strong> ৳ {price}</p>
                <p><strong>Departure:</strong> {departure_location} on {departure_date}</p>
                <p><strong>Destination:</strong> {destination}</p>
                <p><strong>Booking Count:</strong> {booking_count}</p>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
                Book Now
            </button>
        </div>
    );
};

export default ViewDetails;
