import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AllPublisherCard from "./AllPublisherCard";

const AllPublisher = () => {
  const axiosSecure = useAxiosSecure();
  const { data: publisher = [] } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosSecure.get("/publisher");
      return res.data;
    },
  });
  return (
    <div>
      <div className="md:w-4/12 mx-auto text-center my-8">
        <h4 className="text-3xl text-purple-500 my-6 text-center uppercase border-b-4 py-4">
          All Publisher
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-0 lg:mx-5">
        {publisher.map(publices => (
          <AllPublisherCard
            key={publices._id}
            publices={publices}
          ></AllPublisherCard>
        ))}
      </div>
      
    </div>
  );
};

export default AllPublisher;
