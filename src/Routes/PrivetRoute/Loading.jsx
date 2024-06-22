import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div> */}
        <RiseLoader color={"#123abc"} loading={loading} size={15} />
    </div>
  );
};

export default Loading;
