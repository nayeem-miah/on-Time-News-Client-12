import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoEye } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import GoogleLogin from "../../Compoents/GoogleLogin/GoogleLogin";
import Loader from "../../Compoents/EmptyState/loader";
const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
    const info = { email, password, photo, name };
    console.log(info);

    if (password.length < 6) {
      setError("password must be 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Must have an Uppercase letter in the password");
      return;
    }
    if (!/[!@#$%^&*()_+]/.test(password)) {
      setError("password with at least one special character");
      return;
    }
    if (!/\d/.test(password)) {
      setError("at least one numeric character");
      return;
    }
    // const user = { name, email, password, photo };
    // console.log(user);

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        updateUserProfile(name, photo).then(() => {
          // create user entry in the database
          const userInfo = {
            name: name,
            email: email,
            photo: photo,
          };
          axiosPublic.post("/users", userInfo).then(res => {
            if (res.data.insertedId) {
              toast.success("user Create successfully");
              setSuccess("User created successfully");
              navigate(location?.state ? location.state : "/");
            }
          });
        });
      })
      .catch(error => {
        console.error(error);
        setError(error.massage);
        toast.error(error);
      });
  };

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="flex justify-center items-center ">
          <Helmet>
            <title>OnTimeNews | Register Page </title>
          </Helmet>
          <div className="flex w-full my-20 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
            <div className="w-full px-6 py-8 md:px-8 lg:w-2/3 mx-auto">
              <div className="flex justify-center mx-auto"></div>

              <p className="mt-3 text-xl text-center text-gray-600 ">
                Get Your Free Account Now!
              </p>

              {/* google login */}
              <GoogleLogin></GoogleLogin>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b  lg:w-1/4"></span>

                <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
                  or Registration with email
                </div>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
              </div>
              <form onSubmit={handleSignUp}>
                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="name"
                  >
                    Username
                  </label>
                  <input
                    id="name"
                    autoComplete="name"
                    name="name"
                    placeholder="Your name"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="photo"
                  >
                    Photo URL
                  </label>
                  <input
                    id="photo"
                    autoComplete="photo"
                    name="photo"
                    placeholder="Photo Url"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600 ">
                    Email Address
                  </label>
                  <input
                    id="LoggingEmailAddress"
                    autoComplete="email"
                    name="email"
                    placeholder="email "
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    required
                  />
                </div>

                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block mb-2 text-sm font-medium text-gray-600   ">
                      Password
                    </label>
                  </div>
                  <div className="relative mb-4">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      name="password"
                      className="input input-bordered block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                    <span>
                      <span
                        className="absolute top-2 right-2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <BsEyeSlashFill className="text-2xl"></BsEyeSlashFill>
                        ) : (
                          <IoEye className="text-2xl"></IoEye>
                        )}
                      </span>
                    </span>
                  </div>
                  {/* error */}
                  {error && <p className="text-red-600">{error}</p>}

                  {success && <p className="text-green-600">{success}</p>}
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b  md:w-1/4"></span>

                <Link
                  to="/login"
                  className="text-xs text-blue-700 uppercase  hover:underline"
                >
                  or sign in
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

export default Register;
