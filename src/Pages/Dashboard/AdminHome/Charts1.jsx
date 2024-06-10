import { Chart } from "react-google-charts";
const Charts1 = () => {
  return (
    <div className="border-t-2">
      <Chart
        chartType="ScatterChart"
        data={[
          ["Age", "Weight"],
          [4, 5.5],
          [8, 12],
        ]}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
};

export default Charts1;
