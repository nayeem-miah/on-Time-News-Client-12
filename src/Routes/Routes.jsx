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
import MyArticlesPage from "../Pages/MyArticlesPage/MyArticlesPage";
import PremiumArticles from "../Pages/PremiumArticles/PremiumArticles";
import UpdateArticles from "../Pages/MyArticlesPage/UpdateArticles/UpdateArticles";
import AllArticlesAdmin from "../Pages/Dashboard/AllArticles/AllArticlesAdmin";
import Modal from "../Pages/Dashboard/AllArticles/modal";
import PaymentPage from "../Pages/Subscription/PaymentPage";

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
        path: '/subscription/:price',
        element: (
          <PrivetRouts>
            <Subscription></Subscription>
          </PrivetRouts>
        ),
      },
      {
        path: '/payment/:totalPrice',
        element: (
          <PrivetRouts>
            <PaymentPage></PaymentPage>
          </PrivetRouts>
        ),
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
        element: (
          <PrivetRouts>
            <UpdateUserProfile></UpdateUserProfile>
          </PrivetRouts>
        ),
      },
      {
        path: "/myArticles",
        element: (
          <PrivetRouts>
            <MyArticlesPage></MyArticlesPage>
          </PrivetRouts>
        ),
      },
      {
        path: "/updateArticles/:id",
        element: (
          <PrivetRouts>
            <UpdateArticles></UpdateArticles>
          </PrivetRouts>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/article/${params.id}`),
      },
      {
        path: "/premiumArticles",
        element: (
          <PrivetRouts>
            <PremiumArticles></PremiumArticles>
          </PrivetRouts>
        ),
      },
      {
        path: "/paymentPage",
        element: <PaymentPage></PaymentPage>
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
        path: "allArticlesAdmin",
        element: (
          <AdminRoute>
            <AllArticlesAdmin></AllArticlesAdmin>
          </AdminRoute>
        ),
      },
      {
        path: "allArticlesAdmin/modal",
        element: (
          <AdminRoute>
            <Modal></Modal>
          </AdminRoute>
        ),
      },
      {
        path: "allPublisher",
        element: (
          <AdminRoute>
            <AddPublisher></AddPublisher>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
