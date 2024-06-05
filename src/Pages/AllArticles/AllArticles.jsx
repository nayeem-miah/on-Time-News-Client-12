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
  const handleSearch = e => {
    e.preventDefault();
    const field = e.target.search.value;
    // setSearch(field);
    console.log(field);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mx-auto text-center">
        <input
          type="search"
          name="search"
          placeholder="search here"
          required
          className="input input-bordered input-accent w-full lg:max-w-xl max-w-48 md:max-w-xl"
        />
        <input className="btn btn-success" type="submit" value="search" />
      </form>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-10">
        {AllArticles.map(
          articles =>
            articles.status === "approve" && (
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

export default AllArticles;
