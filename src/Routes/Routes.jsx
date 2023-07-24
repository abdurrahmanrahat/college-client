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
        element: <CollegeDetails></CollegeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/colleges/${params.id}`),
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
        element: <AdmitForm></AdmitForm>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/colleges/${params.id}`),
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
