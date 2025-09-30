import CommonWrapper from "@/common/space/CommonWrapper";
import PopularServices from "../userComponents/overview/PopularServices";
import OverviewCardSection from "../userComponents/overview/OverviewCardSection";
import MyJob from "../userComponents/overview/MyJob";
import RecentActivity from "../userComponents/overview/RecentActivity";

const Overview = () => {
  return (
    <CommonWrapper>
      <OverviewCardSection />
      <PopularServices />
      <MyJob />
      <RecentActivity />
    </CommonWrapper>
  );
};

export default Overview;
