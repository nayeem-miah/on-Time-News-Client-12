import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Loader from "../../../Compoents/EmptyState/loader";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleCreateAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`).then(res => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} is an admin Now !`);
      }
    });
  };
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="">
          <div className="flex justify-evenly my-4 mt-1 ">
            <h2 className="text-3xl text-purple-500">All Users</h2>
            <h2 className="text-3xl text-purple-500">
              Total Users :
              <span className=""> {users.length}</span>
            </h2>
          </div>
          <div className="overflow-x-auto text-white">
            <table className="table w-full">
              <thead>
                <tr className="text-white">
                  <th>sl</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>profile picture</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={user._id} className="bg-gray-800 hover:bg-gray-600">
                    <th>{(i = i + 1)}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <img
                        src={user?.photo}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => {
                            handleCreateAdmin(user);
                          }}
                          className="btn bg-purple-500 text-2xl text-white btn-md"
                        >
                          <FaUser></FaUser>
                        </button>
                      )}
                    </td>
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

export default AllUsers;
