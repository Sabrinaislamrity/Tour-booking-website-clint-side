import React, { use } from 'react';
import AllOneSingle from '../AllOneSingle/AllOneSingle';

const Allcard = ({jobsPromise}) => {
     const jobs = use(jobsPromise)
    return (
         <div className="my-10 px-4 md:px-10">
         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map(job => (
                   <AllOneSingle key={job._id} job={job}/>
                ))}
            </div>

           
        </div>
    );
};

export default Allcard;