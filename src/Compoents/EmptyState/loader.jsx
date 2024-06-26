import { ScaleLoader } from "react-spinners";
const Loader = ({loading}) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">
      <ScaleLoader size={100} color="#d33" loading={loading}></ScaleLoader>
    </div>
  );
};

export default Loader;
