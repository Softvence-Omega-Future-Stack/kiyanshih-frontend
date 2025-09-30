import UserNavbar from "./UserNavbar";
import { Outlet } from "react-router-dom";
import CommonWrapper from "@/common/space/CommonWrapper";
import ProviderTabs from "@/Dashboard/userDashboard/userComponents/userTabs/ProviderTabs";
import WelcomeBanner from "./WelcomeBanner";

const ProviderLayout = () => {
  return (
    <div>
      {/* <UserNavbar /> */}

      {/* <Outlet /> */}

      <UserNavbar />
      <CommonWrapper>
        <WelcomeBanner name="Charlotte Davis" />
        <ProviderTabs />
        <Outlet />
      </CommonWrapper>
    </div>
  );
};

export default ProviderLayout;
