import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import { RiseLoader } from "react-spinners";
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (

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
