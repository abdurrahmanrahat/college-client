import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import CollegeDetails from "../Pages/Home/Colleges/CollegeDetails";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import AdmitForm from "../Pages/Admission/AdmitForm";
import MyCollege from "../Pages/MyCollege/MyCollege";
import UserProfile from "../Pages/UserProfile/UserProfile";
import ProfileEdit from "../Pages/UserProfile/ProfileEdit/ProfileEdit";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "college/:id",
        element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://college-server-gilt.vercel.app/colleges/${params.id}`),
      },
      {
        path: "colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "admission",
        element: <Admission></Admission>,
      },
      {
        path: "admitForm/:id",
        element: <PrivateRoute><AdmitForm></AdmitForm></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://college-server-gilt.vercel.app/colleges/${params.id}`),
      },
      {
        path: "myCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "profileEdit",
        element: <ProfileEdit></ProfileEdit>
      }
    ],
  },
]);

export default router;
