import CommonWrapper from "@/common/space/CommonWrapper";
import ProviderNavbar from "./ProviderNavbar";
import OverviewProviderDashboard from "./OverviewProviderDashboard";
import JobsDashboard from "./JobsDashboard";
import JobsListing from "./JobsListing";

const OverviewPage = () => {
  return (
    <CommonWrapper>
      <ProviderNavbar />
      <OverviewProviderDashboard />
      <JobsDashboard />
      <JobsListing />
    </CommonWrapper>
  );
};

export default OverviewPage;
