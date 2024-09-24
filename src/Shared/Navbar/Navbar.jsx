import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";
import News from "../../assets/TrandingNews/nes.jpg";

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
      {user && (
        <li>
          <NavLink to="/addArticles">Add Articles</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/allArticles">All Articles </NavLink>
      </li>

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
          <div className=" w-[50px]"></div>
          {!user && (
            <button className="font-bold hover:border-b-green-700 p-1 hidden lg:block text-white bg-purple-500 hover:bg-purple-700 rounded mr-5">
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
              className="bg-purple-500 hover:bg-purple-700 duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded"
            >
              Login
            </Link>
          )}

          {open && (
            <div
              ref={modalRef} // Use ref to track this modal
              className="absolute text-center flex flex-col justify-center items-center gap-4 shadow-lg bg-white dark:bg-[#120505] px-8 py-4 top-16 dark:text-white z-50"
            >
              <img
                src={user?.photoURL}
                className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
              />
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold mr-4">{user?.displayName}</p>
                <p>
                  <Link to={"/updateUserProfile"}>
                    <FaEdit className="text-xl"></FaEdit>
                  </Link>
                </p>
              </div>

              <p className="text-lg font-semibold">{user?.email}</p>
              <div className="flex justify-between gap-6">
                <button>
                  {isAdmin ? (
                    <p className="p-2 px-4 text-xs font-bold text-white bg-purple-500 rounded">
                      Admin
                    </p>
                  ) : (
                    <p className="p-2 px-4 text-xs font-bold text-white bg-purple-500 rounded">
                      normal user
                    </p>
                  )}
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-purple-500 hover:bg-purple-900 duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded cursor-pointer"
                >
                  logout
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
