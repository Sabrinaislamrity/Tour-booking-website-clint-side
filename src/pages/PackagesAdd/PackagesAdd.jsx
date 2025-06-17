import React from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const PackagesAdd = () => {
    const {user} = useAuth();


    const handleAddAJob = e =>{
          e.preventDefault();
           const form = e.target;
           const formData = new FormData(form);
           const data = Object.fromEntries(formData.entries());
       
           const newJob = data;
            // save to the data base 
            
            axios.post('https://server-site-drab.vercel.app/jobs', newJob)
            .then(res =>{
                if (res.data.insertedId) {
                    


                    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your new tour has been saved",
  showConfirmButton: false,
  timer: 1500
});


                }
                
                
            })
            .catch(error =>{
                console.log(error);
                
            })

           
           
    }

    return (
       <>
        <div className="p-12 md:p-24 max-w-7xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold text-green-700">Book a Tour</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fill out the form below to confirm your booking. Please ensure all details are correct before submission.
        </p>
      </div>

      <form onSubmit={handleAddAJob}  className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tour Name */}
        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
          <label className="block text-sm font-medium mb-2">Tour Name</label>
          <input type="text" name="tour_name" placeholder="e.g., Dhaka to Cox's Bazar" className="input input-bordered w-full" required />
        </fieldset>

        {/* Image URL */}
        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <input type="text" name="image" placeholder="https://..." className="input input-bordered w-full" required />
        </fieldset>

        {/* Duration */}
        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
          <label className="block text-sm font-medium mb-2">Duration</label>
          <input type="text" name="duration" placeholder="e.g., 3 Days 2 Nights" className="input input-bordered w-full" required />
        </fieldset>

        {/* Departure Location */}
        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
          <label className="block text-sm font-medium mb-2">Departure Location</label>
          <input type="text" name="departure_location" placeholder="e.g., Dhaka" className="input input-bordered w-full" required />
        </fieldset>

        {/* Destination */}
        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
          <label className="block text-sm font-medium mb-2">Destination</label>
          <input type="text" name="destination" placeholder="e.g., Cox's Bazar" className="input input-bordered w-full" required />
        </fieldset>

        {/* Price */}
        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
          <label className="block text-sm font-medium mb-2">Price (৳)</label>
          <input type="number" name="price" placeholder="e.g., 8500" className="input input-bordered w-full" required />
        </fieldset>

        {/* Departure Date */}
        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
          <label className="block text-sm font-medium mb-2">Departure Date</label>
          <input type="date" name="departure_date" className="input input-bordered w-full" required />
        </fieldset>

        {/* Package Details */}
        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100 md:col-span-2">
          <label className="block text-sm font-medium mb-2">Package Details</label>
          <textarea name="description" placeholder="Write package details..." className="textarea textarea-bordered w-full" rows="3" required></textarea>
        </fieldset>

        {/* Contact No. */}
        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
          <label className="block text-sm font-medium mb-2">Contact No.</label>
          <input type="text" name="guide_contact_no" placeholder="e.g., 018XXXXXXXX" className="input input-bordered w-full" required />
        </fieldset>

        {/* Guide Name */}
        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
          <label className="block text-sm font-medium mb-2">Guide Name</label>
          <input type="text" name="guide_name"  readOnly defaultValue={user?.displayName || ''} className="input input-bordered w-full" />
        </fieldset>

        {/* Guide Email */}
        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
          <label className="block text-sm font-medium mb-2">Guide Email</label>
          <input type="email" name="guide_email"  readOnly defaultValue={user.email} className="input input-bordered w-full" />
        </fieldset>

        {/* Guide Photo */}
        <fieldset className="border border-gray-300 rounded-xl p-4 bg-base-100">
          <label className="block text-sm font-medium mb-2">Guide Photo URL</label>
          <input type="text" name="guide_photo"  readOnly defaultValue={user?.photoURL || ''} className="input input-bordered w-full" />
        </fieldset>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-8">
          <input type="submit" className="btn btn-success px-10 text-white" value="Book Now" />
        </div>
      </form>
    </div>
       </>
    );
};

export default PackagesAdd;