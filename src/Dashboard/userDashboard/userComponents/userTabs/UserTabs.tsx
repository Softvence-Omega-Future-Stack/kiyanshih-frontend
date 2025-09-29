import CommonWrapper from "@/common/space/CommonWrapper";
import Tabs from "../reuseable/Tabs";
import overview from "@/assets/icon/tabIcons/Vector.svg";
import jobs from "@/assets/icon/tabIcons/briefcase-business.svg";
import messages from "@/assets/icon/tabIcons/message-square.svg";
import bookings from "@/assets/icon/tabIcons/coins.svg";
import payments from "@/assets/icon/tabIcons/message-square.svg";
import settings from "@/assets/icon/tabIcons/settings.svg";

const UserTabs = () => {
<<<<<<< HEAD
  const tabOptions = [
    { title: "Overview", value: "overview", href: "/user-dashboard/overview" },
    { title: "My Jobs", value: "jobs", href: "/user-dashboard/my-jobs" },
    { title: "Messages", value: "messages", href: "/user-dashboard/message" },
    { title: "Bookings", value: "bookings", href: "/user-dashboard/bookings" },
    {
      title: "Payment History",
      value: "payments",
      href: "/user-dashboard/payment-history",
    },
    { title: "Settings", value: "settings", href: "/user-dashboard/settings" },
  ];

  return (
    <CommonWrapper>
      <div className="py-6">
        <Tabs tabs={tabOptions} />
      </div>
    </CommonWrapper>
  );
=======
    const tabOptions = [

        { title: "Overview", value: "overview", href: "/user-dashboard/overview" },
        { title: "My Jobs", value: "jobs", href: "/user-dashboard/jobs" },
        { title: "Messages", value: "messages", href: "/user-dashboard/messages" },
        { title: "Bookings", value: "bookings", href: "/user-dashboard/bookings" },
        { title: "Payment History", value: "payments", href: "/user-dashboard/payments" },
        { title: "Settings", value: "settings", href: "/user-dashboard/settings" },
        { title: "Profile", value: "profile", href: "/provider-dashboard/profile" },

    ];

    return (
        <CommonWrapper>
            <div className="py-6 md:py-10">
                <Tabs tabs={tabOptions} />
            </div>
        </CommonWrapper>
    );
>>>>>>> a5aa7c69a8189fbc015c3a09e06327a219ade290
};

export default UserTabs;
