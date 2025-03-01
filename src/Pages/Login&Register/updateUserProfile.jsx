import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UpdateUserProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;

    updateUserProfile(name, photo).then(() => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "profile update successful",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
    });
  };
  return (
    <div className="flex justify-center items-center  py-10">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-2/3 mx-auto">
          <div className="flex justify-center mx-auto"></div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            your Account update Now!
          </p>

          <Helmet>
            <title>OnTimeNews | updateUserProfile Page </title>
          </Helmet>
          <form onSubmit={handleUpdate}>
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
                defaultValue={user?.displayName}
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
                defaultValue={user?.photoURL}
                autoComplete="photo"
                name="photo"
                placeholder="Photo Url"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
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
                defaultValue={user?.email}
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
