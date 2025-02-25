import { FaEye } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const ArticlesCard = ({ articles }) => {
  const description = articles.description.slice(0, 100);
  const axiosPublic = useAxiosPublic();
  
  const handleViewCount = async (item) => {
    try {
      const newData = { viewCount: articles.viewCount + 1 };
      await axiosPublic.patch(`/viewCount/${item._id}`, newData);
    } catch (error) {
      console.error("Error updating view count", error);
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="my-5 p-5 flex flex-col items-center bg-gray-800 text-white hover:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300" data-aos="fade-up" data-aos-duration="2000">
      <div className="relative w-full max-w-md">
        <img className="w-full h-60 object-cover rounded-lg transition-transform transform hover:scale-105" src={articles.image} alt="article image" />
        {articles.isPremium === "Premium" && (
          <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md">Premium</span>
        )}
      </div>
      <div className="w-full text-center mt-4 px-4">
        <h1 className="text-xl font-bold ">{articles.title}</h1>
        <p className="text-gray-300 text-sm mt-2">{description}...</p>
      </div>
      <div className="flex justify-between items-center w-full px-4 mt-4">
        <div className="flex items-center gap-2">
          <img className="w-10 h-10 rounded-full object-cover" src={articles.photo} alt="author" />
          <div>
            <h2 className="text-sm font-semibold text-white">{articles.displayName}</h2>
            <p className="text-xs text-gray-200">{articles.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-white">
          <FaEye className="text-lg" />
          <span className="text-sm">{articles?.viewCount}</span>
        </div>
      </div>
      <div className="w-full px-4 mt-4">
        <Link to={`/articlesDetails/${articles._id}`}>
          <button onClick={() => handleViewCount(articles)} className="w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default ArticlesCard;
