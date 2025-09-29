import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  Calendar,
  MessageCircle,
  Briefcase,
  FileText,
  ListChecks,
} from "lucide-react";

const ProviderNavbar = () => {
  const location = useLocation();

  const navItems = [
    {
      to: "/provider-dashboard/overview",
      label: "Overview",
      icon: LayoutDashboard,
    },
    {
      to: "/provider-dashboard/jobs-listing",
      label: "My Jobs listing",
      icon: Briefcase,
    },
    {
      to: "/provider-dashboard/available-jobs",
      label: "Available Jobs",
      icon: ListChecks,
    },
    {
      to: "/provider-dashboard/bookings",
      label: "Bookings",
      icon: Calendar,
    },
    {
      to: "/provider-dashboard/message",
      label: "Message",
      icon: MessageCircle,
    },
    {
      to: "/provider-dashboard/report",
      label: "Report",
      icon: FileText,
    },
    {
      to: "/provider-dashboard/settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  const isActive = (path: any) => location.pathname === path;

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 mb-1">
              Welcome back, Mike Johnson
            </h1>
            <p className="text-sm text-gray-600">
              Manage your services and track your performance
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
            Get Verified
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const active = isActive(item.to);

            return (
              <Link
                key={idx}
                to={item.to}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  active
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default ProviderNavbar;
