// import DashboardCardSection from "../components/dashboard/DashboardCardSection";
// import EarningSection from "../components/dashboard/EarningSection";
// import SubscriberSection from "../components/dashboard/SubscriberSection";

import DashboardCardSection from "../Admin/components/dashboard/DashboardCardSection";
import EarningSection from "../Admin/components/dashboard/EarningSection";
import SubscriberSection from "../Admin/components/dashboard/SubscriberSection";

const Dashboard = () => {
  return (
    <div>
      <DashboardCardSection />
      <EarningSection />
      <SubscriberSection />
    </div>
  );
};

export default Dashboard;
