import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/KnowNetlogo.png";
import AuthContext from "../FirebaseAuthentication/AuthContext";
import UserAvatar from "./UserAvater";
const NavBar = () => {
  const { user } = use(AuthContext);

  const Navlinks = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>All Articles</NavLink>
      </li>
      {user && (
        <>
          {" "}
          <li>
            <NavLink>My Articles</NavLink>
          </li>
          <li>
            <NavLink>Post Articles</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink>About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img className="w-12" src={logo} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100  rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {Navlinks}
          </ul>
        </div>
        <Link
          to="/"
          className="font-bold text-2xl text-[#1F2937]  hidden lg:block"
        >
          {" "}
          <h1 className="flex justify-center items-center">
            <img className="w-12 pr-2 " src={logo} alt="" />{" "}
            <span className="text-[#3B82F6]">Know</span>Net
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{Navlinks}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <UserAvatar />
        ) : (
          <Link to="/login" className="btn bg-[#D72050] text-lg text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
