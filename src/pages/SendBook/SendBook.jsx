import React from 'react';
import Swal from 'sweetalert2';

const SendBook = ({ applications, setApplications }) => {
  const handleConfirm = async (bookingId) => {
    try {
      const res = await fetch(`http://localhost:3000/applications/${bookingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'completed' }),
      });

      const data = await res.json();

      if (data.modifiedCount > 0) {
        Swal.fire('Success', 'Booking marked as completed!', 'success');
        // Update local state without refetching
        setApplications(applications.map(app => 
          app._id === bookingId ? { ...app, status: 'completed' } : app
        ));
      } else {
        Swal.fire('Info', 'No update was made.', 'info');
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        My Bookings ({applications.length})
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>Tour Name</th>
              <th>Guide Name</th>
              <th>Contact</th>
              <th>Departure Date</th>
              <th>Departure Location</th>
              <th>Destination</th>
              <th>Note</th>
              <th>Status</th>
              <th>Confirm</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((booking, index) => (
              <tr key={booking._id} className="hover">
                <td>{index + 1}</td>
                <td>{booking.tour_name}</td>
                <td>{booking.guide_name}</td>
                <td>{booking.guide_contact_no || 'N/A'}</td>
                <td>{new Date(booking.departure_date).toLocaleDateString()}</td>
                <td>{booking.departure_location}</td>
                <td>{booking.destination}</td>
                <td>{booking.notes || 'None'}</td>
                <td>
                  <span
                    className={`badge ${
                      booking.status === 'completed' ? 'badge-success' : 'badge-warning'
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td>
                  {booking.status !== 'completed' ? (
                    <button
                      onClick={() => handleConfirm(booking._id)}
                      className="btn btn-xs bg-green-600 text-white hover:bg-green-700"
                    >
                      Confirm
                    </button>
                  ) : (
                    <span className="text-green-500 font-semibold">✔ Done</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SendBook;
