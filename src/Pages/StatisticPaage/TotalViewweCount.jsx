import { useQuery } from "@tanstack/react-query";

import React from "react";
import { useCountUp } from "react-countup";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const TotalViewweCount = () => {
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
    start: 230,
    end:100000,

  });
  return (
    <div className="  w-full rounded">
      <div className="text-6xl text-green-600  text-center" ref={countUpRef} />
      <div className="lg:flex justify-around p-5">
        {/* <button
          className="text-3xl text-green-600 btn lg:my-0 my-3 mr-6"
          onClick={reset}
        >
          Reset
        </button> */}
      <p>{update}</p>
        {/* <button
          className="text-3xl text-green-600 btn"
          onClick={() => update(100000)}
        >
          Count Start
        </button> */}
      </div>
      {/* <h3 className="text-2xl text-purple-500 p-4 text-center">
        total viewer per month : ({100000})
      </h3> */}
    </div>
  );
};

export default TotalViewweCount;
