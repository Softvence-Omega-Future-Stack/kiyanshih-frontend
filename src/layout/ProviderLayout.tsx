import UserTabs from "@/Dashboard/userDashboard/userComponents/userTabs/UserTabs";
import UserNavbar from "./UserNavbar";
import { Outlet } from "react-router-dom";

const ProviderLayout = () => {
  return (
    <div>
      <UserNavbar />
      <UserTabs />
      <Outlet />
    </div>
  );
};

export default ProviderLayout;
