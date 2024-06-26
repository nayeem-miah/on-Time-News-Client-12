import Loader from "../../Compoents/EmptyState/loader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ArticlesCard from "./ArticlesCard/ArticlesCard";
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
const AllArticles = () => {
  const axiosPublic = useAxiosPublic();
  const [AllArticles, setAllArticles] = useState();
  const [search = [], setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    axiosPublic(`/searchArticles?search=${search}`).then(res =>
      setAllArticles(res.data)
    );
  }, [search]);
  const handleSearch = e => {
    e.preventDefault();
    const field = e.target.search.value;
    setSearch(field);
  };

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="py-10 min-h-[calc(100vh-180px)] ">
          <form onSubmit={handleSearch} className="mt-20">
            <input
              type="search"
              name="search"
              placeholder="search here"
              required
              className="input input-bordered input-accent w-full lg:max-w-xl max-w-48 md:max-w-xl"
            />
            <input className="btn btn-success" type="submit" value="search" />
          </form>
          {/* <UserFilter></UserFilter> */}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-10">
            {AllArticles?.map(
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
      )}
    </div>
  );
};

export default AllArticles;
