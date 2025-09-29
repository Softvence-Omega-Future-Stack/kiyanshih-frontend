import CommonWrapper from "@/common/space/CommonWrapper";
import ProviderNavbar from "./ProviderNavbar";
import OverviewProviderDashboard from "./OverviewProviderDashboard";
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
