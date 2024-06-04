import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import React from "react";
import { useCountUp } from "react-countup";

const AllUsersCount = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const countUpRef = React.useRef(null);
  const { reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    // end: 2356,
    delay: 10,
    // duration: 400,
  });
  return (
    <div className="bg-slate-200 w-1/2">
      <div className="text-6xl text-green-600  text-center" ref={countUpRef} />
      <div className="flex justify-around p-5">
        <h3 className="text-4xl text-purple-500">
          All Users : ({users.length})
        </h3>
        <button className="text-4xl text-green-600 btn" onClick={reset}>
          Reset
        </button>

        <button
          className="text-4xl text-green-600 btn"
          onClick={() => update(users.length)}
        >
          Count Start
        </button>
      </div>
    </div>
  );
};

export default AllUsersCount;
