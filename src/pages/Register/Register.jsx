import React, { use, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, setUser,updateUser } = use(AuthContext);



     const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleRegister = (e) =>{
         e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({name,photo,email,password});



 if (name.length < 5) {
      setNameError('Name should be more than 5 characters');
      return;
    } else {
      setNameError('');
    }



      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must have at least 1 uppercase, 1 lowercase letter, and be 6+ characters long.'
      );
      return;
    } else {
      setPasswordError('');
    }












   createUser(email, password)
    .then((result) => {
      const user = result.user;
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your Registration has been saved",
  showConfirmButton: false,
  timer: 1500
});




      updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            window.location.href = '/'; // Redirect manually
          })
          .catch((error) => {
            console.log(error);
            setUser(user); // Still set user in fallback
          });




        // navigate(`${location.state ? location.state : "/"}`)
      
    })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    console.log(errorCode);
    
    // ..
  });
    

  };


    return (
      <>
             <div className='flex justify-center h-1/2 items-center'>
      <div className='card bg-base-100 w-full max-w-sm shadow-2xl px-3 py-5'>
        <h2 className='font-semibold text-2xl text-center mb-2'>Register Your Account</h2>
        <form onSubmit={handleRegister}  className='card-body'>
          <fieldset className='fieldset space-y-2'>
            {/* Name */}
            <label className='label'>Your Name</label>
            <input name='name' type='text' className='input' placeholder='Name' required />
             <p className='text-xs text-error'></p>
              {nameError && <p className='text-xs text-error'>{nameError}</p>}

            {/* Photo URL */}
            <label className='label'>Photo URL</label>
            <input name='photo' type='text' className='input' placeholder='Photo URL' required />

            {/* Email */}
            <label className='label'>Email</label>
            <input name='email' type='email' className='input' placeholder='Email' required />

            {/* Password */}
            <label className='label'>Password</label>
            <input name='password' type='password' className='input' placeholder='Password' required />
             <p className='text-xs text-error'></p>
              {passwordError && <p className='text-xs text-error'>{passwordError}</p>}

            {/* Submit */}

            
            <button type='submit' className='btn btn-neutral mt-4'>Register</button>
            

            {/* Redirect link */}
            <p className='font-semibold text-center'>
              Already have an account?{' '}
              <a href='/auth/login' className='text-red-600 underline'>Login</a>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
      </>
    );
};

export default Register;