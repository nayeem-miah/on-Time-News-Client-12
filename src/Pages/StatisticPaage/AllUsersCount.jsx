import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useInView } from "react-intersection-observer";

const AllUsersCount = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  const countUpRef = useRef(null);
  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: users.length,
    duration: 2,
  });

  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);

  return (
    <div ref={ref} className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-green-400 mb-4">
        Total Users
      </h2>
      <div className="text-7xl font-extrabold text-center text-green-500" ref={countUpRef} />
     
     </div>
  );
};

export default AllUsersCount;