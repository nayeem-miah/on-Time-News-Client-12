const AllPublisherCard = ({ publices }) => {
  return (
    <div className="card  bg-gray-800 text-white hover:bg-gray-700 shadow-xl  hover:scale-105 border border-purple-400 h-32 lg:h-full ">
      <figure>
        <img
          className="h-32 w-44 lg:h-52   px-1 py-8 rounded-lg "
          src={publices.image}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-center lg:block hidden">
          {publices.publisherName}
        </h2>
      </div>
    </div>
  );
};

export default AllPublisherCard;
