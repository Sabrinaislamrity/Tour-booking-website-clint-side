import React from 'react';
import AllOneSingle from '../AllOneSingle/AllOneSingle';

const Allcard = ({ jobs, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!jobs || jobs.length === 0) {
    return <p className="text-center text-gray-500">No tours found.</p>;
  }

  return (
    <div className="my-10 px-4 md:px-10">
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <AllOneSingle key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Allcard;
