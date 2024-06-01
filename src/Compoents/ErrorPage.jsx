import { Link } from "react-router-dom";
import img from "../assets/3747371.jpg";
import { Helmet } from "react-helmet-async";
const ErrorPages = () => {
  return (
    <div className="text-center items-center space-y-5 ">
       <Helmet><title>OnTimeNews | Error Page </title> </Helmet>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            {/* <h1 className="mb-5 text-5xl text-red-700 font-bold">Error Page</h1> */}

            <Link to={"/"}>
              <button className=" link link-warning  text-6xl">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPages;
