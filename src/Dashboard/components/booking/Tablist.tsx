import SubHeader from "@/Dashboard/common/SubHeader";
import type { BookingStatus } from "@/Dashboard/pages/BookingManagement";
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
          className={`px-4 py-2 rounded cursor-pointer ${
            activeTab === status ? "bg-[#E2E8F0]" : "text-gray-800"
          }`}
          onClick={() => setTab(status)}
        >
          {status}
          {counts && counts[status] !== undefined && (
            <span className="ml-1">
              ({counts[status].toString().padStart(2, "0")})
            </span>
          )}
        </SubHeader>
      ))}
    </div>
  );
};

export default Tablist;
