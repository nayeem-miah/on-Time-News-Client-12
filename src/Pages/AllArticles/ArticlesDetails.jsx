import { useLoaderData } from "react-router-dom";

const ArticlesDetails = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div>
      <div className="lg:p-10">
        <img className="  w-full l rounded" src={data.image} />
        <div className="flex items-center my-5">
          <img className="object-cover h-16 rounded-full" src={data.photo} />
          <a
            href="#"
            className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
            tabIndex="0"
            role="link"
          >
            {data.displayName}
          </a>
          <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">
            {data.email}
          </p>
        </div>
        <div className=" mt-4">
          <div className="flex items-center lg:gap-10">
            
            <p className="mx-1 text-3xl lg:text-5xl text-gray-600 dark:text-gray-300 my-6">
              {data.title}
            </p>
            <h1 className="text-xl font-semibold link text-blue-600">
              #{data.tags}
            </h1>
          </div>
          <p className="text-2xl font-serif">publisher Name : {data.publisher}</p>
        </div>
        <p className="mt-2 text-xl text-gray-600 dark:text-gray-400  text-center">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ArticlesDetails;
