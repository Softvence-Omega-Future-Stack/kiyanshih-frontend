import RecentBookings from "./RecentBookings";
import SubscriptionProviders from "./SubscriptionProviders";

const SubscriberSection = () => {
  return (
    <div className="w-full flex-col lg:flex-row flex gap-7.5">
      <SubscriptionProviders />
      <RecentBookings />
    </div>
  );
};

export default SubscriberSection;
