import CommonWrapper from "@/common/space/CommonWrapper";
import ProviderNavbar from "./providerNavbar/ProviderNavbar";
import OverviewProviderDashboard from "./OverviewProviderDashboard/OverviewProviderDashboard";
import JobsDashboard from "./JobDashboard/JobsDashboard";


const OverviewPage = () => {
  return (
    <CommonWrapper>
      <ProviderNavbar />
      <OverviewProviderDashboard />
      <JobsDashboard />
  
    </CommonWrapper>
  );
};

export default OverviewPage;
