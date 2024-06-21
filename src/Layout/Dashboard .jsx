import {
  FaBars,
  FaGalacticRepublic,
  FaHouseMedical,
  FaRegNewspaper,
  FaUsers,
  
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
       <div className=" sm:hidden lg:block"> <Navbar /></div>
      {/* Dashboard content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Toggle button for small screens */}
        <div className="lg:hidden p-4">
          <button
            className="text-white bg-purple-500 p-2 rounded"
            onClick={toggleDrawer}
          >
            {isDrawerOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={` lg:w-64 bg-purple-500 lg:fixed lg:min-h-full  lg:mt-0 ${
            isDrawerOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul className="menu text-black font-bold p-4 mt-32">
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHouseMedical />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers />
                    All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allArticlesAdmin">
                    <FaRegNewspaper />
                    All Articles
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allPublisher">
                    <FaGalacticRepublic />
                    Add Publisher
                  </NavLink>
                </li>
              </>
            )}
            <div className="min-h-52"></div>
            <li>
              <NavLink to="/">
                <FaHouseMedical />
                Home
              </NavLink>
            </li>
            <li>
              <p>
                {user && (
                  <img
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full"
                    alt="User"
                  />
                )}
                Admin Profile
              </p>
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 lg:ml-64 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
