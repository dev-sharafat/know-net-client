import Lottie from "lottie-react";
import React from "react";
import signin from '../../assets/Animation - 1749838793102.json'
import { Link } from "react-router";
const SignIn = () => {
  const handleSignup = e =>{
     e.preventDefault(); 
     const name = e.target.name.value
     const photo = e.target.photo.value
     const password = e.target.password.value
     const email = e.target.email.value
     console.log(name,photo,password,email);
  }
  return (
    <div className="md:flex justify-center items-center">
      <div className="mx-4 lg:mx-0">
        <Lottie
          animationData={signin}
          loop={true}
          className="lg:w-[70%] lg:h=[300px] "
        ></Lottie>
      </div>
      <div className="lg:w-full lg:max-w-md p-8 space-y-3 rounded-xl mx-4 lg:mx-0  bg-gray-50  text-gray-800">
        <h1 className="text-2xl font-bold text-center">SignUp</h1>
        <form onSubmit={handleSignup} action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block  text-gray-600">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md  bg-white text-gray-800 focus: border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block  text-gray-600">
              PhotoURL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter your photourl"
              className="w-full px-4 py-3 rounded-md  bg-white text-gray-800 focus: border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block  text-gray-600">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md  bg-white text-gray-800 focus: border-violet-600"
            />
          </div>
               <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block  text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md   bg-white  text-gray-800 focus: border-violet-600"
            />
            
          </div>
         
         
          <button className="block w-full p-3 text-center rounded-sm  text-gray-50  bg-violet-600">
            Sign in
          </button>
        </form>
       
      
        <p className="text-xs text-center sm:px-6  text-gray-600">
          Do you have an account?
          <Link
            rel="noopener noreferrer"
            to='/login'
            className="underline  text-gray-800"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
