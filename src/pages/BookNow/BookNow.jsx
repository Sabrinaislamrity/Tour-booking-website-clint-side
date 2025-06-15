import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const BookNow = () => {
    const { id: jobId} = useParams();
    const { user } = useAuth()
    console.log(jobId, user );
    const handleApplyFromSubmit = e =>{
           e.preventDefault();
           const form = e.target;


    }

    return (
         <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-700">Booking Form</h1>
      <form onSubmit={handleApplyFromSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 space-y-4">
          <label className="label font-semibold">Tour Package Name</label>
          <input type="text" className="input input-bordered w-full"  readOnly />

          <label className="label font-semibold">Price</label>
          <input type="text" className="input input-bordered w-full"  readOnly />

          <label className="label font-semibold">Buyer Name</label>
          <input type="text" className="input input-bordered w-full" readOnly />

          <label className="label font-semibold">Buyer Email</label>
          <input type="email" className="input input-bordered w-full"  readOnly />

          <label className="label font-semibold">Booking Date</label>
          <input type="text" className="input input-bordered w-full"  readOnly />

          <label className="label font-semibold">Special Note</label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Add any special request..."
            
          ></textarea>

          <button
            type="submit"
            className="btn w-full bg-green-600 text-white hover:bg-green-700"
          >
            Book Now
          </button>
        </fieldset>
      </form>
    </div>
    );
};

export default BookNow;