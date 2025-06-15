import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
  const {signIn, signInWithGoogle} = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state || '/'


  console.log('location in login page', location);
  





  const handleLogin = (e) =>{
      e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
       signIn(email, password)
      .then((result) => {
        console.log("Logged in user:", result.user);
    navigate(from);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });

      })
      .catch((error) => {
        setError(error.code);
      });
  };





   const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google signed in user:", result.user);
         navigate(from);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signed in with Google",
          showConfirmButton: false,
          timer: 1500,
        });

       
      })
      .catch((error) => {
        setError(error.code);
      });
  };
    return (
       <>
        <div className="flex justify-center items-center min-h-screen bg-[#f0eae0]">
      <div className="card bg-white max-w-sm shadow-2xl px-6 py-8 w-full rounded-xl">
        <h2 className="font-semibold text-2xl text-center text-green-700">Login Your Account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <label className="label">Email</label>
          <input name="email" type="email" className="input input-bordered" placeholder="Email" required />

          <label className="label">Password</label>
          <input name="password" type="password" className="input input-bordered" placeholder="Password" required />

          {/* {error && <p className="text-xs text-red-600 mt-1">{error}</p>} */}

          <button type="submit" className="btn bg-green-600 text-white mt-4 hover:bg-green-700">Login</button>
        </form>

        <div className="text-center">
          <SocialLogin></SocialLogin>
           <button  onClick={handleGoogleSignIn}  className="btn btn-outline w-full"><FcGoogle />Sign in with Google </button>
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