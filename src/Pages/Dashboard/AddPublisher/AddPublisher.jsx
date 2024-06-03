import axios from "axios";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddArticles = () => {
  const axiosSecure = useAxiosSecure();
 
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const publisherName = form.publisherName.value;

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_HOSTING_KEY
        }`,
        formData
      );
      // post data database
      if (data.success) {
        const newData = {
          publisherName,
          image: data.data.display_url,
        };

        // console.log(newData);

        const res = await axiosSecure.post("/publisher", newData);
        if (res.data.insertedId) {
          toast.success(`${publisherName}  Added successfully`);
          form.reset();
        }
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="max-w-full py-10 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-center my-10 text-3xl font-semibold text-gray-700 capitalize dark:text-white">
        Add Publisher
      </h2>
      <Helmet>
        <title>OnTimeNews | Dashboard |   Add Publisher</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <div className=" gap-6 mt-4 sm:grid-cols-2 mb-6">
          <div>
            <label className="text-gray-700 dark:text-gray-200">
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

          {/* <div className="">
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="category"
            >
              Select publisher
            </label>
            <select
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="select publisher"
              name="publisher"
              required
            >
              <option value="The New York Times (USA)">
                The New York Times (USA)
              </option>
              <option value="The Washington Post (USA)">
                The Washington Post (USA)
              </option>
              <option value="The Guardian (UK)">The Guardian (UK)</option>
              <option value="The Wall Street Journal (USA)">
                The Wall Street Journal (USA)
              </option>
              <option value="Los Angeles Times (USA)">
                Los Angeles Times (USA)
              </option>
              <option value="Chicago Tribune (USA)">
                Chicago Tribune (USA)
              </option>
              <option value="USA Today (USA)">USA Today (USA)</option>
              <option value="The Times of India (India)">
                The Times of India (India)
              </option>
              <option value="The Sydney Morning Herald (Australia)">
                The Sydney Morning Herald (Australia)
              </option>
              <option value="The Daily Telegraph (UK)">
                The Daily Telegraph (UK)
              </option>
              <option value="Le Monde (France)">Le Monde (France)</option>
              <option value="El País (Spain)">El País (Spain)</option>
            </select>
          </div> */}

          <div className="mt-2">
            <label className="text-gray-700 dark:text-gray-200 ">
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
          <button className="px-8 py-3 leading-5 text-white  w-full transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddArticles;
