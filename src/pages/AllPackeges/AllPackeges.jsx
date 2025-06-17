import React, { Suspense, useState, useEffect } from 'react';
import Allcard from '../Allcard/Allcard';

const AllPackeges = () => {
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:3000/jobs?search=${search}`);
    const data = await res.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, [search]);

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className="my-6 text-center">
        <input
          type="text"
          placeholder="Search by Tour Name or Destination"
          className="input input-bordered w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Suspense fallback={
        <div className="flex justify-center items-center min-h-[200px]">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }>
        <Allcard jobs={jobs} loading={loading} />
      </Suspense>
    </div>
  );
};

export default AllPackeges;
