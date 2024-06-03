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
      <h3 className="text-purple-500 text-4xl text-center ">All Publisher </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
