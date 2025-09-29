import UserTabs from "@/Dashboard/userDashboard/userComponents/userTabs/UserTabs";
import UserNavbar from "./UserNavbar";
import { Outlet } from "react-router-dom";
import CommonWrapper from "@/common/space/CommonWrapper";

const ProviderLayout = () => {
  return (
    <div>
      <CommonWrapper>
        <UserNavbar />
        <UserTabs />
        <Outlet />
      </CommonWrapper>
    </div>
  );
};

export default ProviderLayout;
