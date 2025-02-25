import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";
import News from "../../assets/logo.jpg";

const Navbar = () => {
  const { logout, user } = useAuth();
  const [open, setOpen] = useState(false);
  const [isAdmin] = useAdmin();
  const modalRef = useRef(null); // Ref to track modal element

  const handleLogout = () => {
    logout()
      .then((result) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "logOut successful",
          showConfirmButton: false,
          timer: 2000,
        });
        <NavLink to={"/"}></NavLink>;
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
        setOpen(false);
      });
  };

  // Close modal if click happens outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const nabLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArticles">All Articles </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/addArticles">Add Articles</NavLink>
        </li>
      )}
   
      {user && (
        <li>
          <NavLink to="/subscription/:price">Subscription</NavLink>
        </li>
      )}
      {/*  (this will be conditional show only if user is admin) */}
      <span>
        {isAdmin && (
          <li>
            <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
          </li>
        )}
      </span>
      {/* this will be conditional show only If user taken Subscription */}
      {user && (
        <li>
          <NavLink to="/premiumArticles">Premium Articles</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/myArticles">My Articles </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-300 shadow-2xl fixed z-10 max-w-screen-xl mx-auto border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-300 absolute z-50 font-bold rounded-box w-52"
          >
            {nabLinks}
          </ul>
        </div>
        <Link to={"/"} className="text-xl lg:text-2xl text-green-600 flex">
          <img src={News} className="h-9 w-10 rounded opacity-60" />
          <Typewriter
            words={["OnTimeNews"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold px-1">{nabLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="relative md:border-l flex items-center justify-end w-full md:w-auto pl-3">
          {!user && (
            <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300 mr-4 ">
              <NavLink to="/register">Register</NavLink>
            </button>
          )}
          {user ? (
            <button
              onClick={() => setOpen(!open)}
              className="border-2 border-[#f0084a] rounded-full w-[40px]"
            >
              <img
                src={user?.photoURL}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </button>
          ) : (
            <Link
              to={"/login"}
              className=" py-2 bg-gradient-to-r from-green-400 to-blue-500 px-4 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
            >
              Login
            </Link>
          )}

{open && ( 
  <div
    ref={modalRef}
    className="absolute text-center flex flex-col justify-center items-center gap-4 shadow-lg bg-white dark:bg-[#1a1a1a] px-8 py-6 top-16 dark:text-white z-50 rounded-lg border border-gray-300 dark:border-gray-700"
  >
    <img
      src={user?.photoURL}
      className="w-24 h-24 mx-auto rounded-full dark:bg-gray-500 border-4 border-purple-500"
    />
    <div className="flex flex-col items-center">
      <p className="text-lg font-semibold">{user?.displayName}</p>
      <Link to={"/updateUserProfile"} className="mt-1 text-purple-500 hover:text-purple-700">
        <FaEdit className="text-xl" />
      </Link>
    </div>
    <p className="text-md font-medium text-gray-700 dark:text-gray-300">{user?.email}</p>
    <div className="flex gap-4 mt-3">
      <span className="px-4 py-1 text-xs font-bold text-white bg-purple-600 rounded-md">
        {isAdmin ? "Admin" : "Normal User"}
      </span>
      <button
        onClick={handleLogout}
        className="bg-purple-600 hover:bg-purple-800 transition duration-200 text-white font-bold px-4 py-1 rounded-md cursor-pointer"
      >
        Logout
      </button>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
