import { Outlet, useLocation } from "react-router-dom";
import UserTabs from "@/Dashboard/userDashboard/userComponents/userTabs/UserTabs";
import UserNavbar from "./UserNavbar";

const UserLayout = () => {
  const location = useLocation();
  const { pathname } = location; // ✅ extract once

  const hiddenPaths = [
    "/user-dashboard/booking-checkout",
    "/user-dashboard/user-profile",
  ];

  const hideTabs = hiddenPaths.includes(pathname);

  return (
    <div>
      <UserNavbar />
      {!hideTabs && <UserTabs />}
      <Outlet />
    </div>
  );
};

export default UserLayout;
