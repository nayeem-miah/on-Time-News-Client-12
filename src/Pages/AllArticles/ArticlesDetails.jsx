import { useLoaderData } from "react-router-dom";

const ArticlesDetails = () => {
  const data = useLoaderData();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-6">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full p-8 lg:p-12">
        {/* Article Image */}
        <img
          className="w-full h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-all duration-500"
          src={data.image}
          alt="Article"
        />

        {/* Author Section */}
        <div className="flex items-center my-6 space-x-6 border-b pb-6">
          <img
            className="h-24 w-24 object-cover rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-xl"
            src={data.photo}
            alt="Author"
          />
          <div>
            <a
              href="#"
              className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-all"
            >
              {data.displayName}
            </a>
            <p className="text-sm text-gray-600">{data.email}</p>
          </div>
        </div>

        {/* Article Content */}
        <div className="mt-6">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-gray-900 leading-tight tracking-wide">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 mt-2">Publisher: {data.publisher}</p>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-4 my-6">
          {data.tags.split(",").map((tag, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-sm font-semibold text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition-all"
            >
              #{tag.trim()}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mt-6 text-xl text-gray-700 leading-relaxed tracking-wide">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ArticlesDetails;
