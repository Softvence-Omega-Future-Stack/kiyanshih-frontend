import CommonWrapper from "@/common/space/CommonWrapper";
import { useState } from "react";
import BookingTabs from "../userComponents/reuseable/BookingTabs";
import Pending from "../userComponents/Pending";

export type BookingStatus =
  | "Pending"
  | "Accepted"
  | "Rejected"
  | "In-progress"
  | "Completed";

const counts: Record<BookingStatus, number> = {
  Pending: 2,
  Accepted: 5,
  Rejected: 0,
  "In-progress": 1,
  Completed: 0,
};

const Bookings = () => {
  const [tab, setTab] = useState<BookingStatus>("Pending");

  return (
    <CommonWrapper>
      <div>
        <div>
          <h4 className="text-sm md:text-[20px]">Booking Services</h4>
          <p>View All Bookings customers have done</p>
        </div>

        <BookingTabs<BookingStatus>
          title="Manage Bookings"
          tabs={["Pending", "Accepted", "Rejected", "In-progress", "Completed"]}
          activeTab={tab}
          setTab={setTab}
          counts={counts}
        />

        {/* Example content */}
        <div className="mt-6">
          {tab === "Pending" && <Pending/>}
          {tab === "Accepted" && <p>Showing accepted bookings...</p>}
          {tab === "Rejected" && <p>Showing rejected bookings...</p>}
          {tab === "In-progress" && <p>Showing in-progress bookings...</p>}
          {tab === "Completed" && <p>Showing completed bookings...</p>}
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Bookings;
