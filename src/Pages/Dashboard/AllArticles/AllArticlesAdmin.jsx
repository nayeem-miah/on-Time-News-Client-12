import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllArticlesAdmin = () => {
  const axiosSecure = useAxiosSecure();

  const { data: AllArticles = [],refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articles");
      return res.data;
    },
  });
  // console.log(AllArticles);

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
    <div className="my-10">
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Articles</h2>
        <h2 className="text-3xl">Total Articles : {AllArticles.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-xs font-bold border-b-2">
              <th>serial no</th>
              <th>article title</th>
              <th>author info</th>
              <th>publisher</th>
              <th>Make Premium</th>
              <th>approve</th>
              {/* <th>decline</th> */}
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {AllArticles.map((item,i) => (
              <tr key={item._id}>
                <td> {(i = i + 1)}</td>
                <td>{item.title}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.photo} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.displayName}</div>
                      <div className="text-sm opacity-50">{item.email}</div>
                    </div>
                  </div>
                </td>
                <td>{item.publisher}</td>
                <th>
                  <button className="rounded p-1 bg-purple-500 text-black hover:text-white">
                    isPremium
                  </button>
                </th>
                <th>
                  <Link>
                    <button className="rounded p-1 bg-purple-500 text-black hover:text-white">
                      approve
                    </button>
                  </Link>
                </th>
                {/* <th>
                  <Link>
                    <button className="rounded p-1 bg-purple-500 text-black hover:text-white">
                      decline
                    </button>
                  </Link>
                </th> */}
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

export default AllArticlesAdmin;
