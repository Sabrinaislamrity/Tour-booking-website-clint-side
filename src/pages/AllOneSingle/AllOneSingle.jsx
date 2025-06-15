import React from 'react';
import { Link } from 'react-router';

const AllOneSingle = ({ job }) => {
       const { tour_name, image, guide_name, guide_photo, duration, departure_date, price,_id } = job;
    return (
         <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={tour_name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{tour_name}</h3>
                <div className="flex items-center gap-2 mb-2">
                    <img src={guide_photo} alt={guide_name} className="w-8 h-8 rounded-full" />
                    <span className="text-sm text-gray-600">{guide_name}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1"><strong>Duration:</strong> {duration}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Departure:</strong> {departure_date}</p>
                <p className="text-sm text-gray-800 font-semibold mb-3">৳ {price}</p>
                <Link to={`/jobs/${_id}`}>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AllOneSingle;