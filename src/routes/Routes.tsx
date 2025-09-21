import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Dashboard from "@/Dashboard/pages/Dashboard";
import BookingManagement from "@/Dashboard/pages/BookingManagement";
import ProviderManagement from "@/Dashboard/pages/ProviderManagement";
import UserManagement from "@/Dashboard/pages/UserManagement";
import ServiceManagement from "@/Dashboard/pages/ServiceManagement";
import BusinessManagement from "@/Dashboard/pages/BusinessManagement";
import DashboardLayout from "@/layout/DashboardLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "booking",
            element: <BookingManagement />,
          },
          {
            path: "provider",
            element: <ProviderManagement />,
          },
          {
            path: "user",
            element: <UserManagement />,
          },
          {
            path: "service",
            element: <ServiceManagement />,
          },
          {
            path: "business",
            element: <BusinessManagement />,
          },
        ],
      },
    ],
  },
]);
export default routes;
