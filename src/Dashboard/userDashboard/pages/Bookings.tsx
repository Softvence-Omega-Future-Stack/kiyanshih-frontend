import { useState } from "react";
import CommonWrapper from "@/common/space/CommonWrapper";
import BookingTabs from "../userComponents/reuseable/BookingTabs";
import Pending from "../userComponents/UserPending";
import UserAccepted from "../userComponents/UserAccepted";
import UserRejected from "../userComponents/UserRejected";
import UserInProgress from "../userComponents/UserInProgress";
import UserCompleted from "../userComponents/UserCompleted";

// Import all your service data
import {
  serviceCardData,
  type ServiceItem,
} from "@/lib/serviceCardData"; // adjust the path
import Pagination from "@/common/custom/Pagination";

export type BookingStatus =
  | "Pending"
  | "Accepted"
  | "Rejected"
  | "In-progress"
  | "Completed";

const ITEMS_PER_PAGE = 5;

const Bookings = () => {
  const [tab, setTab] = useState<BookingStatus>("Pending");
  const [currentPage, setCurrentPage] = useState(1);

  // Map services by tab
  const servicesMap: Record<BookingStatus, ServiceItem[]> = {
    Pending: serviceCardData,
    Accepted: serviceCardData,
    Rejected: serviceCardData,
    "In-progress": serviceCardData,
    Completed: serviceCardData,
  };

  const currentServices = servicesMap[tab] || [];

  // Pagination logic
  const totalPages = Math.ceil(currentServices.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedServices = currentServices.slice(startIndex, endIndex);

  // Reset page when tab changes
  const handleTabChange = (newTab: BookingStatus) => {
    setTab(newTab);
    setCurrentPage(1);
  };

  // Counts for tabs
  const counts: Record<BookingStatus, number> = {
    Pending: serviceCardData.length,
    Accepted: serviceCardData.length,
    Rejected: serviceCardData.length,
    "In-progress": serviceCardData.length,
    Completed: serviceCardData.length,
  };

  return (
    <CommonWrapper>
      <div>
        <div className="mb-6 space-y-2">
          <h4 className="text-sm md:text-[20px]">Booking Services</h4>
          <p>View all bookings customers have done</p>
        </div>

        <BookingTabs<BookingStatus>
          tabs={["Pending", "Accepted", "Rejected", "In-progress", "Completed"]}
          activeTab={tab}
          setTab={handleTabChange}
          counts={counts}
        />

        <div className="mt-6 space-y-6">
          {tab === "Pending" && <Pending services={paginatedServices} />}
          {tab === "Accepted" && <UserAccepted services={paginatedServices} />}
          {tab === "Rejected" && <UserRejected services={paginatedServices} />}
          {tab === "In-progress" && <UserInProgress services={paginatedServices} />}
          {tab === "Completed" && <UserCompleted services={paginatedServices} />}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Bookings;
