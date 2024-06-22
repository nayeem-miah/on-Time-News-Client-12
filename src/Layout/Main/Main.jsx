import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      {/* navbar */}
      <div>
        <Navbar></Navbar>
      </div>
      {/* outlet */}
      <Outlet></Outlet>
      {/* footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
