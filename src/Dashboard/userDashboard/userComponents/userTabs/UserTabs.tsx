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
};

export default UserTabs;
