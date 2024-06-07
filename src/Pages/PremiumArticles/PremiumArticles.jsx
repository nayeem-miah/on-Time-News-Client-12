import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ArticlesCard from "../AllArticles/ArticlesCard/ArticlesCard";

const PremiumArticles = () => {
  const axiosSecure = useAxiosSecure();

  const { data: AllArticles = [] } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articlesIsPremuan");
      return res.data;
    },
  });
  // console.log(AllArticles);
  return (
    <div>
    

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
        {AllArticles.map(
          articles =>
            articles.isPremium === "Premium" && (
              <ArticlesCard
                key={articles._id}
                articles={articles}
              ></ArticlesCard>
            )
        )}
      </div>
    </div>
  );
};

export default PremiumArticles;
