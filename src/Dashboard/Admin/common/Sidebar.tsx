import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  UserCheck,
  Settings,
  CreditCard,
  Receipt,
  ChevronDown,
} from "lucide-react";
import { type FC, useEffect } from "react";
import profile from "@/assets/images/man.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CommonHeader from "@/common/header/CommonHeader";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  path?: string;
  section: string;
  notification?: boolean;
  children?: { label: string; path: string }[];
}

interface SidebarProps {
  sidebarOpen: boolean;
  openMenus: Record<string, boolean>;
  setOpenMenus: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

const sidebarItems: SidebarItem[] = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
    section: "Main",
  },
  {
    icon: Calendar,
    label: "Bookings",
    section: "Booking Management",
    notification: true,
    children: [{ label: "Booking Requests", path: "/dashboard/booking" }],
  },
  {
    icon: Users,
    label: "Providers",
    section: "Provider Management",
    children: [
      { label: "Provider List", path: "/dashboard/provider-list" },
      { label: "Add Provider", path: "/dashboard/add-provider" },
    ],
  },
  {
    icon: UserCheck,
    label: "Background check",
    path: "/dashboard/background-check",
    section: "Provider Management",
  },
  {
    icon: Settings,
    label: "Categories",
    section: "Service Management",
    children: [
      { label: "Category setup", path: "/dashboard/category" },
      { label: "Subcategory setup", path: "/dashboard/sub-category" },
    ],
  },
  {
    icon: Users,
    label: "Users",
    path: "/dashboard/user",
    section: "User Management",
  },
  {
    icon: CreditCard,
    label: "Subscription",
    path: "/dashboard/subscription",
    section: "Business Management",
  },
  {
    icon: Receipt,
    label: "Transaction",
    path: "/dashboard/transaction",
    section: "Business Management",
  },
];

const Sidebar: FC<SidebarProps> = ({
  sidebarOpen,
  setOpenMenus,
  openMenus,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Group items by section
  const groupedItems = sidebarItems.reduce((acc, item) => {
    if (!acc[item.section]) acc[item.section] = [];
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, SidebarItem[]>);

  // Auto expand parent if current path matches any child
  useEffect(() => {
    sidebarItems.forEach((item) => {
      if (item.children) {
        const match = item.children.some((child) =>
          pathname.startsWith(child.path)
        );
        if (match) {
          setOpenMenus((prev) => ({ ...prev, [item.label]: true }));
        }
      }
    });
  }, [pathname, setOpenMenus]);

  const toggleMenu = (item: SidebarItem) => {
    setOpenMenus((prev) => {
      const newState = { ...prev, [item.label]: !prev[item.label] };

      // If opening a parent menu, navigate to its first child
      if (!prev[item.label] && item.children?.length) {
        const firstChild = item.children[0];
        if (firstChild?.path) {
          navigate(firstChild.path);
        }
      }

      return newState;
    });
  };

  return (
    <aside
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-40 w-[280px] transition-transform duration-300 ease-in-out md:translate-x-0 md:static bg-white rounded-[10px] px-5 py-6`}
    >
      {/* Profile */}
      <div className="flex items-center gap-3 bg-white border border-[#F1F5F9] rounded-[5px] px-3 py-2 mb-5">
        <Avatar className="h-8 w-8">
          <AvatarImage src={profile} />
          <AvatarFallback>ADMIN</AvatarFallback>
        </Avatar>
        <div className="text-left font-Geist">
          <div className="text-sm text-slate-700">admin@admin.com</div>
          <div className="text-base text-slate-900">super-admin</div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto">
        {Object.entries(groupedItems).map(([section, items]) => (
          <div key={section} className="mb-6">
            <CommonHeader className="!text-black mb-2">{section}</CommonHeader>
            <div className="space-y-1">
              {items.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    {/* Parent */}
                    <div
                      className={`w-full justify-between h-10 flex items-center gap-3 cursor-pointer px-1.5 rounded-md 
                        ${
                          openMenus[item.label]
                            ? "bg-[#E2E8F0] text-orange"
                            : ""
                        }`}
                      onClick={() => toggleMenu(item)}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        <CommonHeader
                          className={
                            openMenus[item.label]
                              ? "text-orange"
                              : "text-[#334155]"
                          }
                        >
                          {item.label}
                        </CommonHeader>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openMenus[item.label] ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Children */}
                    {openMenus[item.label] && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            end
                            className={({ isActive }) =>
                              `px-2 py-1 text-sm rounded flex gap-3 ${
                                isActive
                                  ? "text-orange font-medium"
                                  : "text-[#334155]"
                              }`
                            }
                          >
                            {child.label}
                            {item.notification && (
                              <div className="h-5 w-6 flex items-center justify-center bg-blue px-4 rounded-full text-white">
                                07
                              </div>
                            )}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Single item (no children)
                  <NavLink
                    key={item.label}
                    to={item.path!}
                    end
                    className={({ isActive }) =>
                      `flex items-center gap-3 w-full h-10 px-2 rounded ${
                        isActive
                          ? "bg-[#E2E8F0] text-orange font-medium"
                          : "hover:bg-muted/50"
                      }`
                    }
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </NavLink>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
