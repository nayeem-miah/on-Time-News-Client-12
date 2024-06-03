import { Link } from "react-router-dom";

const ArticlesCard = ({ articles }) => {
  const description = articles.description.slice(0,100)
  return (
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
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {articles.publisher}
        </h1>
        <h1 className="text-xs font-semibold link text-blue-600">
          #{articles.tags}
        </h1>
        <p className="py-2 text-gray-700 dark:text-gray-400"></p>
        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <h1 className="px-2 text-sm">{description}</h1>
        </div>
        <Link to={`/articlesDetails/${articles._id}`}>
          <button className="btn  btn-primary my-5 text-center max-w-xl">
            details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticlesCard;
