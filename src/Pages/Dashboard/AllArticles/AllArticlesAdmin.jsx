/* eslint-disable no-unused-vars */
import { FaTrash } from "react-icons/fa";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../../Compoents/EmptyState/loader";

const AllArticlesAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { data: AllArticles = [], refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articles");
      return res.data;
    },
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleApproved = item => {
    axiosSecure.patch(`/admin-articles/${item._id}`).then(res => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${item.title} is an approve now!`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/allArticles");
      }
    });
  };
  const handleIsPremium = item => {
    axiosSecure.patch(`/isPremium-articles/${item._id}`).then(res => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${item.title} is an Premium now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

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
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="my-10">
          <div className="flex justify-evenly my-4 mt-1 lg:mt-20">
            <h2 className="text-3xl">All Articles</h2>
            <h2 className="text-3xl">Total Articles : {AllArticles.length}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="text-xs font-bold border-b-2">
                  {/* <th>serial no</th>   */}
                  <th>article title</th>
                  <th>author info</th>
                  <th>status</th>
                  <th>publisher</th>
                  <th>Make Premium</th>
                  <th>approve</th>
                  <th>decline</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {AllArticles.map((item, i) => (
                  <tr key={item._id}>
                    {/* <td> {(i = i + 1)}</td> */}
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
                          <div className="text-sm opacity-50">{item.date}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item.status}</td>
                    <td>{item.publisher}</td>
                    <th>
                      {item.isPremium === "Premium" ? (
                        "Premium"
                      ) : (
                        <button
                          onClick={() => {
                            handleIsPremium(item);
                          }}
                          className="rounded p-1 bg-purple-500 text-black hover:text-white w-full"
                        >
                          Premium
                        </button>
                      )}
                    </th>
                    <th>
                      {item.status === "approve" ? (
                        "Approve"
                      ) : (
                        <button
                          onClick={() => {
                            handleApproved(item);
                          }}
                          className="rounded p-1 bg-purple-500 text-black hover:text-white"
                        >
                          approve
                        </button>
                      )}
                    </th>
                    <th>
                      <Link to={"/dashboard/allArticlesAdmin/modal"}>
                        <button className="rounded p-1 bg-purple-500 text-black hover:text-white">
                          decline
                        </button>
                      </Link>
                    </th>
                    <th>
                      <button
                        onClick={() => {
                          handleDelete(item._id);
                        }}
                        className="btn btn-ghost btn-lg text-red-600"
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
      )}
    </div>
  );
};

export default AllArticlesAdmin;
