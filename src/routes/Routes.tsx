import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Dashboard from "@/Dashboard/pages/Dashboard";
import BookingManagement from "@/Dashboard/pages/BookingManagement";
import UserManagement from "@/Dashboard/pages/UserManagement";
import DashboardLayout from "@/layout/DashboardLayout";
import AddProvider from "@/Dashboard/pages/provider/AddProvider";
import BackgroundCheck from "@/Dashboard/pages/provider/BackgroundCheck";
import ProviderList from "@/Dashboard/pages/provider/ProviderList";
import CategorySetUp from "@/Dashboard/pages/category/CategorySetUp";
import SubCategorySetUp from "@/Dashboard/pages/category/SubCategorySetUp";
import Transaction from "@/Dashboard/pages/transaction/Transaction";
import Subscription from "@/Dashboard/pages/subscription/Subscription";

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
            path: "provider-list",
            element: <ProviderList />,
          },
          {
            path: "add-provider",
            element: <AddProvider />,
          },
          {
            path: "background-check",
            element: <BackgroundCheck />,
          },
          {
            path: "category",
            element: <CategorySetUp />,
          },
          {
            path: "sub-category",
            element: <SubCategorySetUp />,
          },
          {
            path: "user",
            element: <UserManagement />,
          },
          {
            path: "subscription",
            element: <Subscription />,
          },
          {
            path: "transaction",
            element: <Transaction />,
          },
        ],
      },
    ],
  },
]);
export default routes;
