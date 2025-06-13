import React from 'react';

const Login = () => {
    return (
       <>
        <div className="flex justify-center items-center min-h-screen bg-[#f0eae0]">
      <div className="card bg-white max-w-sm shadow-2xl px-6 py-8 w-full rounded-xl">
        <h2 className="font-semibold text-2xl text-center text-green-700">Login Your Account</h2>
        <form  className="card-body">
          <label className="label">Email</label>
          <input name="email" type="email" className="input input-bordered" placeholder="Email" required />

          <label className="label">Password</label>
          <input name="password" type="password" className="input input-bordered" placeholder="Password" required />

          {/* {error && <p className="text-xs text-red-600 mt-1">{error}</p>} */}

          <button type="submit" className="btn bg-green-600 text-white mt-4 hover:bg-green-700">Login</button>
        </form>

        <div className="text-center mt-3">
          <p className="text-xs text-gray-500 mb-2">or</p>
          <button  className="btn btn-outline w-full">Sign in with Google</button>
        </div>

        <div className="text-center mt-4">
          <a href="#" className="link link-hover text-sm">Forgot password?</a>
          <p className="text-sm mt-2">
            Don’t have an account? <a href="/auth/register" className="text-green-700 underline">Register</a>
          </p>
        </div>
      </div>
    </div>
       </>
    );
};

export default Login;