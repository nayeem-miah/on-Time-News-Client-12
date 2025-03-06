import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import EmptyState from "../../Compoents/EmptyState/EmptyState";
import { useEffect, useState } from "react";
import Loader from "../../Compoents/EmptyState/loader";

const MyArticlesPage = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const { data: myArticles = [], refetch } = useQuery({
    queryKey: ["myArticles"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myArticles/${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/article/${id}`).then(res => {
          //   console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="min-h-[calc(100vh-180px)] ">
          <h3>My Articles Page:( {myArticles.length})</h3>
          <Helmet>
            <title>OnTimeNews | My Artcle Page </title>
          </Helmet>
          <div className="overflow-x-auto w-full mt-20 text-white">
            {myArticles.length > 0 ? (
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-xs text-white font-bold border-b-2">
                    <th>serial no</th>
                    <th>article title</th>
                    <th>status</th>
                    <th>isPremium</th>
                    <th>details</th>
                    <th>update</th>
                    <th>delete</th>
                  </tr>
                </thead>
                <tbody>
                  {myArticles.map((item, i) => (
                    <tr key={item._id}>
                      <td> {(i = i + 1)}</td>
                      <td>{item.title}</td>
                      <td>{item.status}</td>
                      <th>
                        <p>{item.isPremium}</p>
                      </th>
                      <th>
                        <Link to={`/articlesDetails/${item._id}`}>
                          <button className="btn bg-purple-500 ">
                            details
                          </button>
                        </Link>
                      </th>
                      <th>
                        <Link to={`/updateArticles/${item._id}`}>
                          <button className="btn bg-purple-500 ">
                            update
                          </button>
                        </Link>
                      </th>
                      <th>
                        <button
                          onClick={() => {
                            handleDelete(item._id);
                          }}
                          className="btn btn-ghost btn-lg"
                        >
                          <FaTrash></FaTrash>
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <EmptyState
                message={"No Articles  Available!"}
                address={"/"}
                label={"Go to Home"}
                address2={"/addArticles"}
                label2={"Add Articles"}
              ></EmptyState>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyArticlesPage;
