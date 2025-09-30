import CommonWrapper from "@/common/space/CommonWrapper";
import Tabs from "../reuseable/Tabs";

const ProviderTabs = () => {
    const tabOptions = [
        { title: "Overview", value: "overview", href: "/provider-dashboard/overview" },
        { title: "My Jobs", value: "jobs", href: "/provider-dashboard/jobs" },
        { title: "Messages", value: "messages", href: "/provider-dashboard/messages" },
        { title: "Bookings", value: "bookings", href: "/provider-dashboard/bookings" },
        { title: "Payment History", value: "payments", href: "/provider-dashboard/payments" },
        { title: "Report", value: "report", href: "/provider-dashboard/report" },
        { title: "Settings", value: "settings", href: "/provider-dashboard/settings" },
    ];

    return (
        <CommonWrapper>
            <div className="py-6">
                <Tabs tabs={tabOptions} />
            </div>
        </CommonWrapper>
    );
};

export default ProviderTabs;
