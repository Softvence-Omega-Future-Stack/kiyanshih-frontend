import CommonWrapper from "@/common/space/CommonWrapper";
import Tabs from "../reuseable/Tabs";
import overview from "@/assets/icon/tabIcons/Vector.svg";
import jobs from "@/assets/icon/tabIcons/briefcase-business.svg";
import messages from "@/assets/icon/tabIcons/message-square.svg";
import bookings from "@/assets/icon/tabIcons/coins.svg";
import payments from "@/assets/icon/tabIcons/message-square.svg";
import settings from "@/assets/icon/tabIcons/settings.svg";

const UserTabs = () => {
  const tabOptions = [
    {
      title: "Overview",
      value: "overview",
      href: "/user-dashboard/overview",
      icon: <img src={overview} />,
    },
    {
      title: "My Jobs",
      value: "jobs",
      href: "/user-dashboard/my-jobs",
      icon: <img src={jobs} />,
    },
    {
      title: "Messages",
      value: "messages",
      href: "/user-dashboard/message",
      icon: <img src={messages} />,
    },
    {
      title: "Bookings",
      value: "bookings",
      href: "/user-dashboard/bookings",
      icon: <img src={bookings} />,
    },
    {
      title: "Payment History",
      value: "payments",
      href: "/user-dashboard/payment-history",
      icon: <img src={payments} />,
    },
    {
      title: "Settings",
      value: "settings",
      href: "/user-dashboard/settings",
      icon: <img src={settings} />,
    },
  ];

  return (
    <CommonWrapper>
      <div className="py-6 md:py-10">
        <Tabs tabs={tabOptions} />
      </div>
    </CommonWrapper>
  );
};

export default UserTabs;
