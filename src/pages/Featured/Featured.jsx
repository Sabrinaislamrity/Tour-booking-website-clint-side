import React, { use } from 'react';
import JobCard from '../JobCard/JobCard';

const Featured = ({ jobsPromise }) => {
    const jobs = use(jobsPromise);

    return (
        <div className="my-10 px-4 md:px-10">
            <h2 className="text-3xl font-bold text-center mb-8">
                Featured Packages ({jobs.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.slice(0, 6).map(job => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>

            <div className="text-center mt-8">
                <a href="/allpackages">
                    <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
                        Show All
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Featured;
