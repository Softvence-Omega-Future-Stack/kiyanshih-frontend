import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "@/pages/Login";
import ClientSignUp from "@/pages/ClientSignUp";
import ProviderSignUp from "@/pages/ProviderSignUp";
import Service from "@/pages/Service";
import Provider from "@/pages/Provider";
import Work from "@/pages/Work";
import SingleService from "@/pages/SingleService";
import SingleProvider from "@/pages/SingleProvider";

import Test from "../components/home/Service";
import Dashboard from "@/Dashboard/Admin/pages/Dashboard";
import DashboardLayout from "@/layout/DashboardLayout";
import BookingManagement from "@/Dashboard/Admin/pages/BookingManagement";
import ProviderList from "@/Dashboard/Admin/pages/provider/ProviderList";
import AddProvider from "@/Dashboard/Admin/pages/provider/AddProvider";
import BackgroundCheck from "@/Dashboard/Admin/pages/provider/BackgroundCheck";
import CategorySetUp from "@/Dashboard/Admin/pages/category/CategorySetUp";
import SubCategorySetUp from "@/Dashboard/Admin/pages/category/SubCategorySetUp";
import UserManagement from "@/Dashboard/Admin/pages/UserManagement";
import Subscription from "@/Dashboard/Admin/pages/subscription/Subscription";
import Transaction from "@/Dashboard/Admin/pages/transaction/Transaction";

import UserLayout from "@/layout/UserLayout";
import Message from "@/Dashboard/userDashboard/pages/Message";
import Job from "@/Dashboard/userDashboard/pages/Job";
import Payment from "@/Dashboard/userDashboard/pages/Payment";
import ProviderProfile from "@/Dashboard/userDashboard/pages/ProviderProfile";
import ProviderLayout from "@/layout/ProviderLayout";
import Overview from "@/Dashboard/userDashboard/pages/Overview";
import SingleProviderReview from "@/components/service/SingleProvider/SingleProviderReview";
import Bookings from "@/Dashboard/userDashboard/pages/Bookings";
import BookingCheckout from "@/Dashboard/userDashboard/pages/BookingCheckout";
import UserSettings from "@/Dashboard/userDashboard/pages/UserSettings";
import UserProfile from "@/Dashboard/userDashboard/pages/UserProfile";

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
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "bookings",
        element: <Bookings />
      },
      {
        path: "booking-checkout",
        element: <BookingCheckout />,
      },
      {
        path: "settings",
        element: <UserSettings />,
      },
      {
        path:"user-profile",
        element: <UserProfile/>
      },
      {
        path: "overview/:title",
        element: <SingleProviderReview />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "my-jobs",
        element: <Job />,
      },
      {
        path: "payment-history",
        element: <Payment />,
      },
      {
        path: "Provider-profile",
        element: <ProviderProfile />,
      },
    ],
  },
  {
    path: "provider-dashboard",
    element: <ProviderLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "message",
        element: <Message />,
      },
    ],
  },
]);
export default routes;