import axios from "axios";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../../../Compoents/EmptyState/loader";

const AddArticles = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const publisherName = form.publisherName.value;

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY
        }`,
        formData
      );
      // post data database
      if (data.success) {
        const newData = {
          publisherName,
          image: data.data.display_url,
        };
        setLoading(true)
        const res = await axiosSecure.post("/publisher", newData);
        if (res.data.insertedId) {
          toast.success(`${publisherName}  Added successfully`);
          form.reset();
          <Navigate to={"/"}></Navigate>;
          setLoading(false)
        }
        // console.log(res.data);
      }
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
      console.error(err);
    }
  };

  return (
    <div>
      {loading ? (
        <Loader> </Loader>
      ) : (
        <section className="max-w-full  p-6 mx-auto my-10   rounded-md shadow-md ">
          <h2 className="text-center my-10 text-3xl font-semibold text-purple-500 capitalize ">
            Add Publisher
          </h2>
          <Helmet>
            <title>OnTimeNews | Dashboard | Add Publisher</title>
          </Helmet>
          <form onSubmit={handleSubmit}>
            <div className=" gap-6 mt-4 sm:grid-cols-2 mb-6">
              <div>
                <label className="text-white">
                  publisher name
                </label>
                <input
                  type="text"
                  name="publisherName"
                  required
                  placeholder="publisher Name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div className="mt-2">
                <label className="text-white ">
                  Chose Image
                </label>
                <input
                  type="file"
                  name="image"
                  className="file-input  h-10 file-input-bordered file-input-error w-full max-w-full items-center  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="mt-6 w-full">
              <button className={`${loading && "px-8 py-3 leading-5 text-white  w-full transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"}  w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300`}>
                {
                  loading ? "loading ....." : "Submit"
                }
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default AddArticles;
