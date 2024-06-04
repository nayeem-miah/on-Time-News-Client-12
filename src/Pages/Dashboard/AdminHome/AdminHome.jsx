import { Chart } from "react-google-charts";

const AdminHome = () => {
  return (
    <div>
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

export default AdminHome;
