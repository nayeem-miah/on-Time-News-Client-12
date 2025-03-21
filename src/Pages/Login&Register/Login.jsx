/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import GoogleLogin from "../../Compoents/GoogleLogin/GoogleLogin";
import Loader from "../../Compoents/EmptyState/loader";

const Login = () => {
  const { logIn } = useAuth();

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  // console.log(success);
  const handleLOgin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    logIn(email, password)
      .then(() => {
        toast.success("Login successfully");

        setSuccess("LogIn successful");

        //  navigate login
        navigate(location?.state ? location.state : "/");
      })
      .catch(error => {
        toast.error("please valid email or password");

        setError(error.massage);
      });
    form.reset();
  };

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="flex  justify-center items-center min-h-[calc(100vh-306px)]">
          <Helmet>
            <title>OnTimeNews | Login Page </title>
          </Helmet>
          <div className="flex w-full my-20 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
            <div className="w-full px-6 py-8 md:px-8 lg:w-2/3 mx-auto">
              <p className="py-5 lg:text-4xl text-2xl text-center text-gray-600 ">
                LogIn Now !
              </p>

              <GoogleLogin></GoogleLogin>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b  lg:w-1/4"></span>

                <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
                  or login with email
                </div>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
              </div>
              <form onSubmit={handleLOgin}>
                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="LoggingEmailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    id="LoggingEmailAddress"
                    autoComplete="email"
                    name="email"
                    placeholder="enter email"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    required
                  />
                </div>

                <div className="mt-4">
                  <div className="flex justify-between">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 "
                      htmlFor="loggingPassword"
                    >
                      Password
                    </label>
                  </div>

                  <input
                    id="loggingPassword"
                    autoComplete="current-password"
                    name="password"
                    placeholder="********"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="password"
                    required
                  />
                </div>
                {error && <p className="text-red-600">{error}</p>}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b  md:w-1/4"></span>

                <Link
                  to="/register"
                  className="text-xs text-blue-700 uppercase  hover:underline"
                >
                  or sign up
                </Link>

                <span className="w-1/5 border-b  md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
