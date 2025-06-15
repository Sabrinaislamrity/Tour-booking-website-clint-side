import React, { use } from 'react';
import { Link } from 'react-router';

const MyPostedTourList = ({jobsCreatedByPromise}) => {
    const jobs = use(jobsCreatedByPromise)
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Your Posted Tours ({jobs.length})</h1>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>Tour Name</th>
              <th>Price</th>
              <th>Departure</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id} className="hover">
                <th>{index + 1}</th>
                <td>{job.tour_name}</td>
                <td>৳{job.price}</td>
                <td>{job.departure_location}</td>
                <td className="space-x-2">
                  <Link
                    to={`/update-tour/${job._id}`}
                    className="btn btn-sm btn-info text-white"
                  >
                    Update
                  </Link>
                  <button
                    
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {jobs.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-4">
                  No tours posted yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyPostedTourList;