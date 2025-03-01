/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaEdit, FaMoneyCheckAlt, FaSignOutAlt } from "react-icons/fa";
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
        // console.log(result.user);
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

      {/* {user && (
        <li>
          <NavLink to="/subscription/:price">Subscription</NavLink>
        </li>
      )} */}
      {/*  (this will be conditional show only if user is admin) */}
      <span>
        {isAdmin && (
          <li>
            <NavLink to="/dashboard/adminHome">Dashboard</NavLink>
          </li>
        )}
      </span>
      {/* <span>
        {!isAdmin && (
          <li>
            <NavLink to="/dashboard/user-home">Dashboard</NavLink>
          </li>
        )}
      </span> */}
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
            <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300 mr-4 ">
              <NavLink to="/register">Register</NavLink>
            </button>
          )}
          {user ? (
            <button
              onClick={() => setOpen(!open)}
              className="border-2 border-purple-500 rounded-full w-[40px]"
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
              className=" py-2 bg-gradient-to-r from-green-400 to-blue-500 px-4 text-white font-semibold rounded shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
            >
              Login
            </Link>
          )}

          {open && (
            <div
              ref={modalRef}
              className="absolute top-16 z-50 flex flex-col items-center gap-5 rounded-lg shadow-md bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 w-72"
            >
              {/* Profile Image */}
              <img
                src={user?.photoURL || "/default-avatar.png"}
                alt="User Profile"
                className="w-20 h-20 rounded-full border-2 border-purple-500 dark:bg-gray-700"
              />

              {/* User Info */}
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{user?.displayName || "User Name"}</p>
                <Link to="/updateUserProfile" className="text-gray-600 dark:text-gray-300 text-sm hover:text-blue-500 transition">
                  <p>{user?.email || "user@example.com"}</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <FaEdit className="text-blue-500" />
                    <span className="hover:underline">Edit Profile</span>
                  </div>
                </Link>
              </div>

              {/* Payment History */}
              <Link
                to="/my-payment-history"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm hover:text-blue-600 transition"
              >
                <FaMoneyCheckAlt className="text-green-500" />
                <span>My Payment History</span>
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 hover:text-red-700 transition font-medium text-sm"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
