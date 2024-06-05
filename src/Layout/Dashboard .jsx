import {
  FaGalacticRepublic,
  FaHouseMedical,
  FaRegNewspaper,
  FaUsers,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();

  return (
    <div>
      <Navbar></Navbar>
      {/* dashBoard content  */}
      <div className="flex ">
        <div className="w-64 drawer lg:drawer-open min-h-screen bg-purple-500">
          <ul className="menu text-black font-bold p-4">
            {isAdmin && (
              <>
                <li>
                  <NavLink to={"/dashboard/adminHome"}>
                    <FaHouseMedical></FaHouseMedical>
                    Admin Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/dashboard/users"}>
                    <FaUsers></FaUsers>
                    All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/allArticlesAdmin"}>
                    <FaRegNewspaper></FaRegNewspaper>
                    All Articles
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/allPublisher"}>
                    <FaGalacticRepublic></FaGalacticRepublic>
                    Add Publisher
                  </NavLink>
                </li>
              </>
            )}

            <div className=" min-h-52"></div>

            <li>
              <NavLink to={"/"}>
                <FaHouseMedical></FaHouseMedical>
                Home
              </NavLink>
            </li>

            <li>
              <p>
                {user && (
                  <img
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full"
                  />
                )}
                Admin Profile
              </p>
            </li>
          </ul>
          {/* sidebar content */}
        </div>
        <div className="flex-1 px-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
