import { Helmet } from "react-helmet-async";
import Newsletter from "./NewsLetter/NewsLetter";
import Header from "./Header/Header";
import AllPublisher from "./AllPublisher/AllPublisher";

const Home = () => {
    return (
     
        <div>
             <Helmet><title>OnTimeNews | Home Page </title> </Helmet>
          {/* headers */}
          <Header></Header>

             <AllPublisher></AllPublisher>
           {/* extra section */}
          <div className="my-9">
          <Newsletter></Newsletter>
          </div>
        </div>
    );
};

export default Home;