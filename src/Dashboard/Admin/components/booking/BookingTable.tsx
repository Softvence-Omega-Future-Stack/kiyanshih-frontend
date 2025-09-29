import SearchFilter from "@/Dashboard/Admin/common/SearchFilter";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";

import Pagination from "@/common/custom/Pagination";
import { bookings } from "./data";
import SharedTable from "./SharedTable";

const BookingTable: React.FC = () => {
  return (
    <CommonBorderWrapper className="!p-10 !border-0">
      <SearchFilter />

      <div className="pt-5">
        <SharedTable bookings={bookings} />
      </div>

      {/* Pagination */}
      <div className="w-full ml-auto flex items-center justify-end mt-10">
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </div>
    </CommonBorderWrapper>
  );
};

export default BookingTable;
