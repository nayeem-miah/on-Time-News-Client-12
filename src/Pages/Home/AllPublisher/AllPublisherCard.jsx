const AllPublisherCard = ({ publices }) => {
//   console.log(publices);
  return (
  
      <div className="card card-side bg-base-300 shadow-xl my-10 hover:scale-105">
        <figure>
          <img className="w-60 h-52 p-10 rounded-lg" src={publices.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-center">{publices.publisherName}</h2>
        </div>
      </div>
    
  );
};

export default AllPublisherCard;
