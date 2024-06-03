import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AddArticles from "../Pages/AddArticles/AddArticles";
import AllArticles from "../Pages/AllArticles/AllArticles";
import Subscription from "../Pages/Subscription/Subscription";

import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import ErrorPages from "../Compoents/ErrorPage";
import PrivetRouts from "./PrivetRoute/PrivetRoute";
import ArticlesDetails from "../Pages/AllArticles/ArticlesDetails";
import Dashboard from "../Layout/Dashboard ";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddPublisher from "../Pages/Dashboard/AddPublisher/AddPublisher";
import UpdateUserProfile from "../Pages/Login&Register/updateUserProfile";
import AdminRoute from "./AdminRoute/AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages></ErrorPages>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addArticles",
        element: (
          <PrivetRouts>
            <AddArticles></AddArticles>
          </PrivetRouts>
        ),
      },
      {
        path: "/allArticles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "/articlesDetails/:id",
        element: (
          <PrivetRouts>
            <ArticlesDetails></ArticlesDetails>
          </PrivetRouts>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/articles/${params.id}`),
      },
      {
        path: "/subscription",
        element: <Subscription></Subscription>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateUserProfile",
        element: <UpdateUserProfile></UpdateUserProfile>,
      },
    ],
  },
  // admin route ------------------>
  {
    path: "dashboard",
    element: (
      <AdminRoute>
        <Dashboard></Dashboard>
      </AdminRoute>
    ),
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "allArticles",
        element: (
          <AdminRoute>
            <AllArticles></AllArticles>
          </AdminRoute>
        ),
      },
      {
        path: "allPublisher",
        element: (
          <AdminRoute>
            {" "}
            <AddPublisher></AddPublisher>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
