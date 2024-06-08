import { FaEye } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

import { Link } from "react-router-dom";

const ArticlesCard = ({ articles }) => {
  const description = articles.description.slice(0, 100);
  const axiosPublic = useAxiosPublic();
  const handleViewCount = async item => {
    const newData = {
      viewCount: articles.viewCount + 1,
    };
    const res = await axiosPublic.patch(`/viewCount/${item._id}`, newData);
    return res.data;
  };
  return (
    <div className="my-10 mt-24">
      {articles.isPremium === "Premium" ? (
        <div className="w-full max-w-sm overflow-hidden h-full bg-white rounded-lg  dark:bg-blue-400 shadow-2xl hover:scale-105">
          <img
            className="object-cover object-center w-full h-48"
            src={articles.image}
          />
          <div className="flex items-center px-6 py-3 bg-gray-900">
            <h1 className="mx-3 text-xl font-semibold text-white">
              {articles.title}
            </h1>
            <h3 className="text-sm  text-purple-600 ">
              *{articles.isPremium}*
            </h3>
          </div>
          <div className="px-6 py-4">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                {articles.publisher}
              </h1>
              <h4 className="flex items-center gap-3">
                <FaEye className="text-xl text-gray-50"></FaEye>
               <p className="text-gray-50"> {articles?.viewCount}</p>
              </h4>
            </div>
            <h1 className="text-xs font-semibold link text-blue-600">
              #{articles.tags}
            </h1>
            <p className="py-2 text-gray-700 dark:text-gray-400"></p>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <h1 className="px-2 text-sm">{description}</h1>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src={articles.photo}
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    {articles.displayName}
                  </a>
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                  {articles.email}
                </span>
              </div>
            </div>
            <Link to={`/articlesDetails/${articles._id}`}>
              <button
                onClick={() => {
                  handleViewCount(articles);
                }}
                className="btn  my-5 text-center w-full"
              >
                details
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg  dark:bg-gray-800 shadow-2xl hover:scale-105">
          <img
            className="object-cover object-center w-full h-48"
            src={articles.image}
          />
          <div className="flex items-center px-6 py-3 bg-gray-900">
            <h1 className="mx-3 text-xl font-semibold text-white">
              {articles.title}
            </h1>
          </div>
          <div className="px-6 py-4">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                {articles.publisher}
              </h1>
              <h4 className="flex items-center gap-3">
                <FaEye className="text-xl"></FaEye> {articles?.viewCount}
              </h4>
            </div>
            <h1 className="text-xs font-semibold link text-blue-600">
              #{articles.tags}
            </h1>
            <p className="py-2 text-gray-700 dark:text-gray-400"></p>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <h1 className="px-2 text-sm">{description}</h1>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src={articles.photo}
                  />
                  <p
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    {articles.displayName}
                  </p>
                </div>
                <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                  {articles.email}
                </p>
              </div>
            </div>
            <Link to={`/articlesDetails/${articles._id}`}>
              <button
                onClick={() => {
                  handleViewCount(articles);
                }}
                className="btn  my-5 text-center w-full"
              >
                details
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlesCard;
