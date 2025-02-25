import Loader from "../../Compoents/EmptyState/loader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UserFilter from "../Dashboard/AllUsers/UserFilter";
import ArticlesCard from "./ArticlesCard/ArticlesCard";
import { useEffect, useState } from "react";
const AllArticles = () => {
  const axiosPublic = useAxiosPublic();
  const [AllArticles, setAllArticles] = useState();
  const [search = [], setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setIsLoading(true)
    axiosPublic(`/searchArticles?search=${search}`).then(res =>
    setAllArticles(res.data),
    setIsLoading(false)

    );
  }, [search]);
  const handleSearch = e => {
    e.preventDefault();
    const field = e.target.search.value;
    setSearch(field);
  };
// console.log(AllArticles)
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

          {/* set loading */}
          {
            isLoading && "loading ......."
          }
        {
          AllArticles.length === 0 && <div className="text-3xl text-red-400 my-10 text-center">
            no data fund .............
          </div> 
        }
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
