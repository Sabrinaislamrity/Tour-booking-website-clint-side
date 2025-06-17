import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const BookNow = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  const [job, setJob] = useState(null);
  console.log();
  

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${jobId}`)
      .then(res => res.json())
      .then(data => setJob(data));
  }, [jobId]);

  const handleApplyFromSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const specialNote = form.specialNote.value;

    const booking = {
      tour_id: job?._id,
      tour_name: job?.tour_name,
      price: job?.price,
      buyer_name: user?.displayName || "Anonymous",
      buyer_email: user?.email || "N/A",
      booking_date: new Date().toISOString(),
      special_note: specialNote,
      status: "pending",
    };

    fetch('http://localhost:3000/applications', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId || data.acknowledged) {
        Swal.fire("Booking?", "Your booking is pandding you can chack My Booking Page if u wanna confirmed");
        form.reset();
      }
    });
  };

  if (!job) return <p className="text-center mt-10">Loading tour details...</p>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-700">Booking Form</h1>
      <form onSubmit={handleApplyFromSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 space-y-4">
          <label className="label font-semibold">Tour Package Name</label>
          <input type="text" className="input input-bordered w-full" value={job.tour_name} readOnly />

          <label className="label font-semibold">Price</label>
          <input type="text" className="input input-bordered w-full" value={`৳${job.price}`} readOnly />

          <label className="label font-semibold">Buyer Name</label>
          <input type="text" className="input input-bordered w-full" value={user?.displayName || ''} readOnly />

          <label className="label font-semibold">Buyer Email</label>
          <input type="email" className="input input-bordered w-full" value={user?.email || ''} readOnly />

          <label className="label font-semibold">Booking Date</label>
          <input type="text" className="input input-bordered w-full" value={new Date().toLocaleDateString()} readOnly />

          <label className="label font-semibold">Special Note</label>
          <textarea
            name="specialNote"
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
