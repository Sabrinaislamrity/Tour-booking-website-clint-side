import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UpdateTure = () => {
  const [tour, setTour] = useState(null);
  const [id, setId] = useState(null);

  // Get ID from URL manually
  useEffect(() => {
    const urlParts = window.location.pathname.split('/');
    const tourId = urlParts[urlParts.length - 1];
    setId(tourId);

    fetch(`https://server-site-drab.vercel.app/jobs/${tourId}`)
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedTour = {
      tour_name: form.tour_name.value,
      image: form.image.value,
      duration: form.duration.value,
      departure_location: form.departure_location.value,
      destination: form.destination.value,
      price: Number(form.price.value),
      departure_date: form.departure_date.value,
      package_details: form.package_details.value,
      guide_contact_no: form.guide_contact_no.value,
      guide_name: form.guide_name.value,
      guide_email: form.guide_email.value,
      guide_photo: form.guide_photo.value
    };

    fetch(`https://server-site-drab.vercel.app/jobs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTour)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire('✅ Success!', 'Tour updated successfully!', 'success');
        } else {
          Swal.fire('ℹ️ No Change', 'No fields were changed.', 'info');
        }
      });
  };

  if (!tour) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="p-12 md:p-24 max-w-7xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold text-green-700">Update Tour</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Edit the form below to update your tour. Make sure all information is correct before submitting.
        </p>
      </div>

      <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: "tour_name", label: "Tour Name" },
          { name: "image", label: "Image URL" },
          { name: "duration", label: "Duration" },
          { name: "departure_location", label: "Departure Location" },
          { name: "destination", label: "Destination" },
          { name: "price", label: "Price (৳)", type: "number" },
          { name: "departure_date", label: "Departure Date", type: "date" },
          { name: "guide_contact_no", label: "Contact No." },
          { name: "guide_name", label: "Guide Name" },
          { name: "guide_email", label: "Guide Email", type: "email" },
          { name: "guide_photo", label: "Guide Photo URL" }
        ].map(({ name, label, type = "text" }) => (
          <fieldset key={name} className="border border-gray-300 rounded-xl p-4 bg-base-100">
            <label className="block text-sm font-medium mb-2">{label}</label>
            <input
              type={type}
              name={name}
              defaultValue={tour[name]}
              className="input input-bordered w-full"
              required
              readOnly={["guide_name", "guide_email", "guide_photo"].includes(name)}
            />
          </fieldset>
        ))}

        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100 md:col-span-2">
          <label className="block text-sm font-medium mb-2">Package Details</label>
          <textarea
            name="package_details"
            defaultValue={tour.package_details}
            className="textarea textarea-bordered w-full"
            rows="3"
            required
          ></textarea>
        </fieldset>

        <div className="md:col-span-2 text-center mt-8">
          <input type="submit" className="btn btn-warning px-10 text-white" value="Update Tour" />
        </div>
      </form>
    </div>
  );
};

export default UpdateTure;
