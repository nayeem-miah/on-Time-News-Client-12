import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      // <div className="flex flex-col gap-4 h-full">
      //   <div className="skeleton min-h-screen w-full"></div>
      //   <div className="skeleton h-4 w-28"></div>
      //   <div className="skeleton h-4 w-full"></div>
      //   <div className="skeleton h-4 w-full"></div>
      // </div>
      <div className="flex items-center justify-center h-screen">
        <RiseLoader color={"#123abc"} loading={loading} size={25} />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"} replace></Navigate>;
};
export default AdminRoute;
