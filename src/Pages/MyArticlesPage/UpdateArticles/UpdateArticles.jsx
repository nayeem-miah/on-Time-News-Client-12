import axios from "axios";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateArticles = () => {
  const axiosSecure = useAxiosSecure();
  const data = useLoaderData();
  const navigate = useNavigate();
  // console.log(data);
  const {
    title,
    publisher,
    tags,
    _id,
    description,
    email,
    photo,
    displayName,
    viewCount
  } = data;

  const handleDataUpdated = async e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const publisher = form.publisher.value;
    const tags = form.tags.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY
        }`,
        formData
      );
      // console.log(data);
      if (data.success) {
        const newData = {
          title,
          publisher,
          tags,
          description,
          image: data.data.display_url,
          email,
          photo,
          displayName, viewCount
        };
        const articlesResponce = await axiosSecure.patch(
          `/updateArticles/${_id}`,
          newData
        );
        // console.log(articlesResponce);
        if (articlesResponce.data.modifiedCount > 0) {
          toast.success(`articles updated Successfully 🔥`);
          navigate("/myArticles");
        }
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <section className="max-w-full py-10 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-center my-10 text-3xl font-semibold text-gray-700 capitalize dark:text-white">
        Update Articles
      </h2>

      <form onSubmit={handleDataUpdated}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mb-6">
          <div>
            <label className="text-gray-700 dark:text-gray-200">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              required
              placeholder="title"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="">
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
              defaultValue={publisher}
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
          </div>

          <div className="">
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="category"
            >
              Tags
            </label>
            <select
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="select tags"
              name="tags"
              defaultValue={tags}
              required
            >
              <option value="sports" selected>
                sports
              </option>
              <option value="entertainment" selected>
                entertainment
              </option>
              <option value="education" selected>
                education
              </option>
              <option value="Science & Technology" selected>
                Science & Technology
              </option>
              <option value="business" selected>
                business
              </option>
              <option value="culture" selected>
                culture
              </option>
              <option value="lifestyle" selected>
                lifestyle
              </option>
            </select>
          </div>

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
        <div>
          <label className="text-gray-700 dark:text-gray-200 ">
            description
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="description"
            required
            defaultValue={description}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
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

export default UpdateArticles;
