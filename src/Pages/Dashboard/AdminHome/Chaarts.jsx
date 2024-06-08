import { useQuery } from "@tanstack/react-query";
import Chart from "react-google-charts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export const options = {
  title: "the percentage of publication article",
  is3D: true,
};

const Chaarts = () => {
  const axiosSeour = useAxiosSecure();
  const { data: AllPublisher = [] } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSeour.get("/articles");
      return res.data;
    },
  });
  // console.log(AllPublisher);
  const da = AllPublisher.reduce((acc, current) => {
    if (acc[current.publisher]) {
      acc[current.publisher] = acc[current.publisher] + 1;
    } else {
      acc[current.publisher] = 1;
    }
    return acc;
  }, {});
  // console.log(da);
  const data = [["Task", "Hours per Day"], ...Object.entries(da)];
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default Chaarts;
