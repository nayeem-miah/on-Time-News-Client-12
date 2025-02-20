import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const TotalArticles = () => {
  const axiosPublic = useAxiosPublic();
  const countUpRef = useRef(null);

  // Fetching articles using React Query
  const { data: allArticles = [] } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/articles");
      return res.data;
    },
    staleTime: 1000 * 60, // Cache for 1 minute
  });

  // Use countUp to animate numbers
  const { update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: allArticles.length,
    duration: 2,
    enableScrollSpy: true, // Starts animation when visible
  });

  // Update count when data changes
  useEffect(() => {
    update(allArticles.length);
  }, [allArticles.length, update]);

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-green-400 mb-4">
        Total Articles
      </h2>
      <div className="text-7xl font-extrabold text-center text-green-500" ref={countUpRef} />
    
    </div>
  );
};

export default TotalArticles;
