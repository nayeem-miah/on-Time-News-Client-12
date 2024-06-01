import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AddArticles from "../Pages/AddArticles/AddArticles";
import AllArticles from "../Pages/AllArticles/AllArticles";
import Subscription from "../Pages/Subscription/Subscription";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addArticles",
        element: <AddArticles></AddArticles>,
      },
      {
        path: "/allArticles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "/subscription",
        element: <Subscription></Subscription>,
      },
    //   admin 
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
