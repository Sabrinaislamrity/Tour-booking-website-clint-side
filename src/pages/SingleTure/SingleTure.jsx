import React from 'react';
import Swal from 'sweetalert2';

const SingleTure = ({ job, index }) => {
  const { _id, tour_name, price, departure_location } = job;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-site-drab.vercel.app/jobs/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Tour has been deleted.", "success");
              // Reload the page to update the list
              window.location.reload();
            }
          });
      }
    });
  };

    const handleUpdate = () => {
    // Replace this with window.location or modal logic if you aren't using React Router
    window.location.href = `/updateture/${_id}`;
  };

  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{tour_name}</td>
      <td>৳{price}</td>
      <td>{departure_location}</td>
      <td className="space-x-2">
          <button
                className="btn btn-sm btn-outline btn-info"
                data-tooltip-id="tooltip"
                data-tooltip-content="Edit this plant"
                onClick={handleUpdate}
              >
                Update
              </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-error text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleTure;
