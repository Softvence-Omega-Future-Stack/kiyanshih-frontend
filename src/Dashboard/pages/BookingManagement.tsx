import { useState } from "react";
import AllBookingTopSection from "../Admin/components/booking/allBooking/AllBookingTopSection";
import Tablist from "../Admin/components/booking/Tablist";
import AllBooking from "../Admin/components/booking/allBooking/AllBooking";
import PendingTable from "../Admin/components/booking/pending/PendingTable";
import AcceptTable from "../Admin/components/booking/accept/AcceptTable";
import RejectedTable from "../Admin/components/booking/Rejected/RejectedTable";
import ProgressTable from "../Admin/components/booking/Progress/ProgressTable";
// import Tablist from "../components/booking/Tablist";
// import AllBookingTopSection from "../components/booking/allBooking/AllBookingTopSection";
// import AllBooking from "../components/booking/allBooking/AllBooking";
// import PendingTable from "../components/booking/pending/PendingTable";
// import AcceptTable from "../components/booking/accept/AcceptTable";
// import RejectedTable from "../components/booking/Rejected/RejectedTable";
// import ProgressTable from "../components/booking/Progress/ProgressTable";
export type BookingStatus =
  | "All Bookings"
  | "Pending"
  | "Accepted"
  | "Rejected"
  | "In-progress";

const counts = {
  "All Bookings": 15,
  Pending: 2,
  Accepted: 5,
  Rejected: 0,
  "In-progress": 1,
};
const BookingManagement = () => {
  const [tab, setTab] = useState<BookingStatus>("All Bookings");
  return (
    <div>
      <AllBookingTopSection />
      <Tablist activeTab={tab} setTab={setTab} counts={counts} />
      {tab === "All Bookings" && <AllBooking />}
      {tab === "Pending" && <PendingTable />}
      {tab === "Accepted" && <AcceptTable />}
      {tab === "Rejected" && <RejectedTable />}
      {tab === "In-progress" && <ProgressTable />}
    </div>
  );
};

export default BookingManagement;
