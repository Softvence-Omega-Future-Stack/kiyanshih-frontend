
import UserNavbar from "./UserNavbar";
import { Outlet } from "react-router-dom";
import ProviderTabs from "@/Dashboard/userDashboard/userComponents/userTabs/ProviderTabs";

const ProviderLayout = () => {
  return (
    <div>
      <UserNavbar />
      <ProviderTabs />
      <Outlet />
    </div>
  );
};

export default ProviderLayout;
