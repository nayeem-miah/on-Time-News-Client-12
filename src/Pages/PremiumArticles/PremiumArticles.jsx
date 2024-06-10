import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ArticlesCard from "../AllArticles/ArticlesCard/ArticlesCard";
import { Helmet } from "react-helmet-async";

const PremiumArticles = () => {
  const axiosSecure = useAxiosSecure();

  const { data: AllArticles = [] } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articlesIsPremuan");
      return res.data;
    },
  });

  return (
    <div className="min-h-[calc(100vh-180px)] pt-24">
      <div className="">
      <Helmet>
        <title>OnTimeNews | premium Articles Page </title>
      </Helmet>
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
    </div>
  );
};

export default PremiumArticles;
