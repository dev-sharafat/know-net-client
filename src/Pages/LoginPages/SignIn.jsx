import Lottie from "lottie-react";
import React, { use, useState } from "react";
import signin from "../../assets/Animation - 1749838793102.json";
import { Link } from "react-router";
import AuthContext from "../../FirebaseAuthentication/AuthContext";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignIn = () => {
  const [error, setPassError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { signIn, setUser, handleUpdateProfile } = use(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    console.log(name, photo, password, email);
    const passRlxDigit = /(?=.*\d)/;
    const passRlxLower = /(?=.*[a-z])/;
    const passRlxUpper = /(?=.*[A-Z])/;
    const passRlxLength = /.{6,}/;
    const passSp = /(?=.*[!@#$%^&*()_+...]) /;
    setPassError("");
    if (!passRlxDigit.test(password)) {
      setPassError("Password must contain at least one digit.");
      return;
    } else if (!passRlxLower.test(password)) {
      setPassError("Password must contain at least one lowercase letter.");
      return;
    } else if (!passRlxUpper.test(password)) {
      setPassError("Password must contain at least one uppercase letter.");
      return;
    } else if (!passRlxLength.test(password)) {
      setPassError("Password must be at least 6 characters long.");
      return;
    } else if (!passSp.test(password)) {
      setPassError("Password must contain at least one special character.");
    }
    signIn(email, password)
      .then((result) => {
        handleUpdateProfile({ displayName: name, photoURL: photo })
          .then((data) => {
            console.log(data);
            setUser({ ...result, displayName: name, photoURL: photo });
            setPassError(" ");
            localStorage.setItem("accessToken", result?._tokenResponse?.idToken)
            Swal.fire({
              // position: "top-center",
              icon: "success",
              title: "You are Successfully Login",
              result,
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(() => {
              window.location.replace(location?.state || "/");
            }, 1000);
          })
          .catch((error) => {
            Swal.fire(error.message);
            setUser(result);
            setTimeout(() => {
              window.location.replace(location?.state || "/");
            }, 1000);
          });
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  };
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
            <label htmlFor="password" className="block font-semibold text-lg">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="relative w-full px-4 py-3 rounded-md bg-white text-black"
            />
            <button
              onClick={() => {
                setShowPass(!showPass);
              }}
              type="button"
              className="btn rounded-none text-black absolute rounded-r-xm lg:top-138 bg-white dark:bg-white border-none lg:right-55 right-14"
            >
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
            <div className="flex justify-start text-lg font-semibold ">
              <p>{error}</p>
            </div>
          </div>

          <button className="block w-full p-3 text-center rounded-sm  text-gray-50  bg-violet-600">
            Sign in
          </button>
        </form>

        <p className="text-xs text-center sm:px-6  text-gray-600">
          Do you have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
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
