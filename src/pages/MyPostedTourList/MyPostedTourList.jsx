import React, { use } from 'react';
import SingleTure from '../SingleTure/SingleTure';

const MyPostedTourList = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-green-700 mb-6">
                Your Posted Tours ({jobs.length})
            </h1>
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
                            <SingleTure key={job._id} job={job} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedTourList;
