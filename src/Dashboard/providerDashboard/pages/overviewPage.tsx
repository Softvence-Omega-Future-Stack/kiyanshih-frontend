import CommonWrapper from "@/common/space/CommonWrapper";
import ProviderNavbar from "./ProviderNavbar";
import OverviewProviderDashboard from "./OverviewProviderDashboard";

const OverviewPage = () => {
  return (
    <CommonWrapper>
      <ProviderNavbar />
      <OverviewProviderDashboard/>
    </CommonWrapper>
  );
};

export default OverviewPage;
