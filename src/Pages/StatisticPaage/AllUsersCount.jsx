import { useQuery } from "@tanstack/react-query";

import React from "react";
import { useCountUp } from "react-countup";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AllUsersCount = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });
  const countUpRef = React.useRef(null);
  const { reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,

    delay: 10,
  });
  return (
    <div className="bg-slate-200 lg:w-1/3 w-full rounded">
      <div className="text-6xl text-green-600  text-center" ref={countUpRef} />
      <div className="lg:flex justify-around p-5">
        <button
          className="text-3xl text-green-600 btn lg:my-0 my-3 mr-6"
          onClick={reset}
        >
          Reset
        </button>

        <button
          className="text-3xl text-green-600 btn"
          onClick={() => update(users.length)}
        >
          Count Start
        </button>
      </div>
      <h3 className="text-4xl text-purple-500 p-4 text-center">All Users : ({users.length})</h3>
    </div>
  );
};

export default AllUsersCount;
