
import UserNavbar from "./UserNavbar";
import { Outlet } from "react-router-dom";
import CommonWrapper from "@/common/space/CommonWrapper";
import ProviderTabs from "@/Dashboard/userDashboard/userComponents/userTabs/ProviderTabs";
import Footer from "./Footer";
import WelcomeBanner from "./WelcomeBanner";


const ProviderLayout = () => {
  return (
    <div>
      {/* <UserNavbar /> */}

      {/* <Outlet /> */}

      <CommonWrapper>
        <UserNavbar />
        <WelcomeBanner name="Charlotte Davis"/>
        <ProviderTabs />
        <Outlet />
        <Footer />
      </CommonWrapper>

    </div>
  );
};

export default ProviderLayout;
