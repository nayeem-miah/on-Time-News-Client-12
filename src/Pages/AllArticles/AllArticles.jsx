import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ArticlesCard from "./ArticlesCard/ArticlesCard";

const AllArticles = () => {
  const axiosPublic = useAxiosPublic();

  const { data: AllArticles = [] } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/articles");
      return res.data;
    },
  });
  console.log(AllArticles);
  return (
    <div>
      {/* <h3 className="text-2xl">All Articles :({AllArticles?.length})</h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-10">
        {AllArticles.map(articles => (
          <ArticlesCard key={articles._id} articles={articles}></ArticlesCard>
        ))}
      </div> */}
    </div>
  );
};

export default AllArticles;
