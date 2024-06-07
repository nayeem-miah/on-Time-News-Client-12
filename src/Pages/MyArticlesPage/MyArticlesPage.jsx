import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyArticlesPage = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

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
  return (
    <div className="min-h-[calc(100vh-320px)] ">
      <h3>My Articles Page:( {myArticles.length})</h3>
      <div className="overflow-x-auto w-full mt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xs font-bold border-b-2">
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
                    <button className="btn bg-purple-500 text-black hover:text-white">
                      details
                    </button>
                  </Link>
                </th>
                <th>
                  <Link to={`/updateArticles/${item._id}`}>
                    <button className="btn bg-purple-500 text-black hover:text-white">
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
      </div>
    </div>
  );
};

export default MyArticlesPage;
