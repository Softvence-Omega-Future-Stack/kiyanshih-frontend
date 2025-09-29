import CommonWrapper from "@/common/space/CommonWrapper";
import Tabs from "../reuseable/Tabs";

const UserTabs = () => {
    const tabOptions = [
        { title: "Overview", value: "overview", href: "/user-dashboard/overview" },
        { title: "My Jobs", value: "jobs", href: "/user-dashboard/jobs" },
        { title: "Messages", value: "messages", href: "/user-dashboard/messages" },
        { title: "Bookings", value: "bookings", href: "/user-dashboard/bookings" },
        { title: "Payment History", value: "payments", href: "/user-dashboard/payments" },
        { title: "Settings", value: "settings", href: "/user-dashboard/settings" },
    ];

    return (
        <CommonWrapper>
            <div className="py-6">
                <Tabs tabs={tabOptions} />
            </div>
        </CommonWrapper>
    );
};

export default UserTabs;
