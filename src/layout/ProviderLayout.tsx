
import UserNavbar from "./UserNavbar";
import { Outlet } from "react-router-dom";

import ProviderTabs from "@/Dashboard/userDashboard/userComponents/userTabs/ProviderTabs";

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
