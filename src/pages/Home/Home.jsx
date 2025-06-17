import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import PopularDes from '../PopularDes/PopularDes';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    const jobsPromise = fetch('https://server-site-drab.vercel.app/jobs').then(res => res.json())
    // console.log(jobsPromise);
    
    return (
        <div className='max-w-7xl mx-auto px-4'>
      <Banner />
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[200px]">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Featured jobsPromise={jobsPromise} />
      </Suspense>
      <PopularDes></PopularDes>
      <Testimonials></Testimonials>
    </div>
    );
};

export default Home;