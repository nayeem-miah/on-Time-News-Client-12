import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users : {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>profile picture</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id} className="bg-base-200">
                <th>{(i = i + 1)}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><img
                    src={user?.photo}
                    className="w-10 h-10 rounded-full"
                  /></td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => {
                        // handleMakeAdmin(user);
                      }}
                      className="btn bg-orange-500 text-2xl text-white btn-lg"
                    >
                      <FaUser></FaUser>
                    </button>
                  )}
                </td>
                {/* <td>
                  <button
                    onClick={() => {
                    //   handleDelete(user);
                    }}
                    className="btn bg-orange-500 text-2xl text-white btn-lg"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
