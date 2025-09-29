import SubHeader from "@/Dashboard/Admin/common/SubHeader";
import type { BookingStatus } from "@/Dashboard/Admin/pages/BookingManagement";
import { type FC } from "react";

interface TablistProps {
  setTab: (tab: BookingStatus) => void;
  activeTab: BookingStatus;
  counts?: Record<BookingStatus, number>; // optional counts for each status
}

const Tablist: FC<TablistProps> = ({ setTab, activeTab, counts }) => {
  const tabs: BookingStatus[] = [
    "All Bookings",
    "Pending",
    "Accepted",
    "Rejected",
    "In-progress",
  ];

  return (
    <div className="flex gap-4 pb-[34px]">
      {tabs.map((status) => (
        <SubHeader
          key={status}
          className={`relative px-4 py-2 mb-2 rounded cursor-pointer transition-colors
        ${activeTab === status ? " bg-[#E2E8F0] font-medium" : "text-gray-800"}
      `}
          onClick={() => setTab(status)}
        >
          {status}
          {counts && counts[status] !== undefined && (
            <span className="ml-1">
              ({counts[status].toString().padStart(2, "0")})
            </span>
          )}
          {activeTab === status && (
            <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#007BFF] rounded-full" />
          )}
        </SubHeader>
      ))}
    </div>
  );
};

export default Tablist;
