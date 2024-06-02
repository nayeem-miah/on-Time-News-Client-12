import { useLoaderData } from "react-router-dom";

const ArticlesDetails = () => {
  const data = useLoaderData();
  

  return (
    <div>
      <div>
        <img className="  w-full lg:p-10 rounded" src={data.image} />
        <div className=" mt-4">
          <div className="flex items-center lg:gap-10">
            <p className="mx-1 text-3xl lg:text-5xl text-gray-600 dark:text-gray-300 my-6">
              {data.title}
            </p>
            <h1 className="text-xl font-semibold link text-blue-600">
              #{data.tags}
            </h1>
          </div>
          <p>{data.publisher}</p>
        </div>
        <p className="mt-2 text-xl text-gray-600 dark:text-gray-400 lg:w-1/2">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ArticlesDetails;
