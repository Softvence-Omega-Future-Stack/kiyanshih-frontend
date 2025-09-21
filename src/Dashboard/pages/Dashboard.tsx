import DashboardCardSection from "../components/dashboard/DashboardCardSection";
import EarningSection from "../components/dashboard/EarningSection";
import SubscriberSection from "../components/dashboard/SubscriberSection";

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
