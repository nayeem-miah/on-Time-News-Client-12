import Chart from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["publicationA", 2],
  ["f publicationB", 3],
  ["f publicationC", 5],
  
];

export const options = {
  title: "the percentage of publication article",
  is3D: true,
};

const Chaarts = () => {
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
