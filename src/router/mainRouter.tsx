import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingScreen from "../pages/auth/LandingScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
// import SigninScreen from "../pages/auth/SigninScreen";
import Layout from "../components/common/Layout";
import HomeScreen from "../pages/home/HomeScreen";
import MailScreen from "../pages/auth/MailScreen";
import Sign from "../pages/auth/Sign";
import PrivateRoute from "./PrivateRoute";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminScreen from "../pages/admin/AdminScreen";
import UpdateScreen from "../pages/home/UpdateScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },

  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/mail",
    element: <MailScreen />,
  },
  {
    path: "/signin",
    element: <Sign />,
  },
  {
    path: "/overseer",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminScreen />,
      },
    ],
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
      <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/home/update",
        element: <UpdateScreen />,
      },
    ],
  },
]);
