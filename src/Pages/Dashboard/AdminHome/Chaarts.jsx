/* eslint-disable react-refresh/only-export-components */
import { useQuery } from "@tanstack/react-query";
import Chart from "react-google-charts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export const options = {
  // title: "Publication Article Distribution",
  is3D: true,
  pieHole: 0.4, // Makes it a donut chart
  slices: {
    0: { offset: 0.1, color: "#4285F4" },
    1: { offset: 0.05, color: "#EA4335" },
    2: { offset: 0.05, color: "#FBBC05" },
    3: { offset: 0.05, color: "#34A853" },
  },
  legend: { position: "bottom", textStyle: { color: "#555", fontSize: 14 } },
  backgroundColor: "#f9f9f9",
  chartArea: { width: "85%", height: "75%" },
  animation: {
    startup: true,
    duration: 1000,
    easing: "out",
  },
};

const Charts = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allPublishers = [] } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articles");
      return res.data;
    },
  });

  const publisherData = allPublishers.reduce((acc, current) => {
    acc[current.publisher] = (acc[current.publisher] || 0) + 1;
    return acc;
  }, {});

  const data = [["Publisher", "Number of Articles"], ...Object.entries(publisherData)];

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-4 text-purple-500">Publication Article Distribution</h2>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default Charts;
