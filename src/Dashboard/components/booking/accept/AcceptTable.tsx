import SearchFilter from "@/Dashboard/common/SearchFilter";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";
import SharedTable from "../SharedTable";
import Pagination from "@/common/custom/Pagination";
import { accept } from "./data";

const AcceptTable = () => {
  return (
    <div>
      <CommonBorderWrapper className="!p-10 !border-0">
        <SearchFilter />

        <div className="overflow-x-auto pt-6">
          <SharedTable bookings={accept} />
        </div>

        {/* Pagination */}
        <div className="w-full ml-auto flex items-center justify-end mt-10">
          <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
        </div>
      </CommonBorderWrapper>
    </div>
  );
};

export default AcceptTable;
