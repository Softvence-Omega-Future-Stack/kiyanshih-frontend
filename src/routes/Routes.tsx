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

import Job from "@/Dashboard/userDashboard/pages/Job";
import Payment from "@/Dashboard/userDashboard/pages/Payment";
// import ProviderProfile from "@/Dashboard/providerDashboard/pages/ProviderProfile";
import SingleOverview from "@/Dashboard/userDashboard/pages/SingleOverview";


import Message from "@/Dashboard/userDashboard/pages/Message";
import ProviderLayout from "@/layout/ProviderLayout";
import OverviewPage from "@/Dashboard/providerDashboard/pages/overviewPage";
import JobsListing from "@/Dashboard/providerDashboard/pages/JobListing/JobsListing";
import BoostService from "@/Dashboard/providerDashboard/pages/JobListing/BoostService";
import AvailableJobs from "@/Dashboard/providerDashboard/pages/AvailableJobs/AvailableJobs";
import SubmitProposal from "@/Dashboard/providerDashboard/pages/SubmitProposal/SubmitProposal";
import FixListJobPosting from "@/Dashboard/providerDashboard/pages/FixingListJob/FixingListJobPost";
import FixListAvailabilityStep from "@/Dashboard/providerDashboard/pages/FixingListJob/FixListAvailabilityStep";
import ServiceDetailsForm from "@/Dashboard/providerDashboard/pages/FixingListJob/ServiceDeatils";
import JobReviewPublish from "@/Dashboard/providerDashboard/pages/FixingListJob/ServicePublishForm";
import Overview from "@/Dashboard/userDashboard/pages/Overview";
import Bookings from "@/Dashboard/userDashboard/pages/Bookings";
import BookingServiceDashboard from "@/components/booking/BookingServiceDashboard";


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
        path: "/provider-profile/:name",
        element: <ProviderProfile />,
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
        path: "overview/:title",
        element: <SingleOverview />,
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
        path: "job-postings",
        element: <JobPost />,
      },
      {

        path: "payment-history",
        element: <Payment />,

        path: "bookings",
        element: <Bookings />,

      },
    ],
  },
  {
    path: "provider-dashboard",
    element: <ProviderLayout />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: "overview",
        element: <OverviewPage />,
      },
      {
        path: "message",
        element: <Message />,
      },

      {
        path: "job-listing",
        element: <JobsListing />,
      },
      {
        path: "boost-service",
        element: <BoostService />,
      },
      {
        path: "available-job",
        element: <AvailableJobs />,
      },
      {
        path: "submit-proposal",
        element: <SubmitProposal />,
      },
      {
        path: "fixedjob-post",
        element: <FixListJobPosting />,
      },
      {
        path: "fixedjob-list",
        element: <FixListAvailabilityStep />,
      },
      {
        path: "fixedjob-details",
        element: <ServiceDetailsForm />,
      },
      {
        path: "job-published",
        element: <JobReviewPublish />,
      },
      {
        path: "bookings",
        element: <BookingServiceDashboard />,
      },

    ],
  },
]);
export default routes;
