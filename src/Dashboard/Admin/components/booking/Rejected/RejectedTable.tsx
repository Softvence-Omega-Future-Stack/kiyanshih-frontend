import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";
import SearchFilter from "@/Dashboard/Admin/common/SearchFilter";
import SharedTable from "../SharedTable";
import Pagination from "@/common/custom/Pagination";
import { reject } from "./data";

const RejectedTable = () => {
  return (
    <div>
      <CommonBorderWrapper className="!p-10 !border-0">
        <SearchFilter />

        <div className="overflow-x-auto pt-6">
          <SharedTable bookings={reject} />
        </div>

        {/* Pagination */}
        <div className="w-full ml-auto flex items-center justify-end mt-10">
          <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
        </div>
      </CommonBorderWrapper>
    </div>
  );
};

export default RejectedTable;
