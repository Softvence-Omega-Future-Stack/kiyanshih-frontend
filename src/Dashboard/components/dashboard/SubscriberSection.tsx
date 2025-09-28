import RecentBookings from "./RecentBookings";
import SubscriptionProviders from "./SubscriptionProviders";

const SubscriberSection = () => {
  return (
    <div className="w-full flex gap-7.5">
      <SubscriptionProviders />
      <RecentBookings />
    </div>
  );
};

export default SubscriberSection;
