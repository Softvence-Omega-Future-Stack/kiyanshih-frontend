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
import Login from "@/pages/Login";
import ClientSignUp from "@/pages/ClientSignUp";
import ProviderSignUp from "@/pages/ProviderSignUp";
import Service from "@/pages/Service";
import Provider from "@/pages/Provider";
import Work from "@/pages/Work";
import SingleService from "@/pages/SingleService";
import SingleProvider from "@/pages/SingleProvider";

import Test from "../components/home/Service";

import UserLayout from "@/layout/UserLayout";
import Overview from "@/Dashboard/userDashboard/Overview";


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
        path: "/path",
        element: <Test />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/service/:category",
        element: <SingleService />,
      },
      {
        path: "/provider",
        element: <Provider />,
      },
      {
        path: "/provider/:name",
        element: <SingleProvider />,
      },
      {
        path: "/how-it-works",
        element: <Work />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/client-signup",
        element: <ClientSignUp />,
      },
      {
        path: "/provider-signup",
        element: <ProviderSignUp />,
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
  // user dashboard 
  {
    path: "user-dashboard",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Overview />
      },
      {
        path: "overview",
        element: <Overview />
      }
    ]
  }

]);
export default routes;
