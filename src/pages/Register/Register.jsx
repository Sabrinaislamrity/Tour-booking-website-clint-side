import React from 'react';

const Register = () => {
    return (
      <>
             <div className='flex justify-center h-1/2 items-center'>
      <div className='card bg-base-100 w-full max-w-sm shadow-2xl px-3 py-5'>
        <h2 className='font-semibold text-2xl text-center mb-2'>Register Your Account</h2>
        <form  className='card-body'>
          <fieldset className='fieldset space-y-2'>
            {/* Name */}
            <label className='label'>Your Name</label>
            <input name='name' type='text' className='input' placeholder='Name' required />
             <p className='text-xs text-error'></p>
              {/* {nameError && <p className='text-xs text-error'>{nameError}</p>} */}

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
              {/* {passwordError && <p className='text-xs text-error'>{passwordError}</p>} */}

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