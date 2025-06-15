import React, { Suspense } from 'react';

import Allcard from '../Allcard/Allcard';

const AllPackeges = () => {
     const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json())
    return (
        <div className='max-w-7xl mx-auto px-4'>
             <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[200px]">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Allcard jobsPromise={jobsPromise} />
      </Suspense>
        </div>
    );
};

export default AllPackeges;