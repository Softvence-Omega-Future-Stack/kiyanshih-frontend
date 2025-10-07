import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { RiDeleteBinLine } from "react-icons/ri";

import { userData, type User } from "./data";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";
import Pagination from "@/common/custom/Pagination";

const defaultStatusColors: Record<User["status"], string> = {
  Pending: "text-orange-600",
  Cancelled: "text-red-600",
  Rejected: "text-red-600",
  Accepted: "text-green-600",
  "In-progress": "text-blue-600",
};

const tableHeaders = [
  { label: "SL", align: "text-center hidden 2xl:table-cell" },
  { label: "User name", align: "text-center" },
  { label: "Contact information", align: "text-center xl:table-cell hidden" },
  { label: "Total Bookings", align: "text-center lg:table-cell hidden" },
  { label: "Status", align: "text-center" },
  { label: "Action", align: "text-center" },
];

const tableDesign = {
  header:
    "text-lg font-Geist text-[#2C2C2C] font-medium bg-[#EFF6FF] hover:bg-[#EFF6FF] md:h-12 leading-[28px]",
  cellHeader: "border border-border px-4 ",
  bodyRow:
    "text-[#2C2C2C] font-Geist text-lg font-normal md:h-12 leading-[28px]",
  cell: "border border-border px-4 text-center",
};
const UserTable = () => {
  return (
    <CommonBorderWrapper className=" border-0 !p-10">
      <Table className="">
        <TableHeader>
          <TableRow className={tableDesign.header}>
            {tableHeaders.map((header) => (
              <TableHead
                key={header.label}
                className={` ${tableDesign.cellHeader} ${header.align}`}
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {userData.map((p) => (
            <TableRow key={p.sl} className={tableDesign.bodyRow}>
              <TableCell
                className={`hidden 2xl:table-cell  ${tableDesign.cell}`}
              >
                {p.sl.toString().padStart(2, "0")}
              </TableCell>
              <TableCell className={`  ${tableDesign.cell}`}>
                <div className="flex gap-2">
                  <Avatar className="h-8 w-8">
                    {p.avatar ? (
                      <AvatarImage src={p.avatar} />
                    ) : (
                      <AvatarFallback>{p.userName}</AvatarFallback>
                    )}
                  </Avatar>
                  {p.userName}
                </div>
              </TableCell>
              <TableCell
                className={`xl:table-cell hidden  ${tableDesign.cell}`}
              >
                <div>
                  <p>{p.contactPhone}</p>
                  <p>{p.contactEmail}</p>
                </div>
              </TableCell>
              <TableCell
                className={`hidden lg:table-cell  ${tableDesign.cell}`}
              >
                {p.totalBookings}
              </TableCell>
              <TableCell
                className={`  border border-border text-center font-medium ${
                  defaultStatusColors[p.status]
                }`}
              >
                {p.status}
              </TableCell>
              <TableCell className={`  ${tableDesign.cell}`}>
                <div className=" flex justify-center gap-4">
                  <span className=" text-2xl cursor-pointer text-[#B91C1C]">
                    <RiDeleteBinLine />
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-full flex items-center justify-between lg:justify-end mt-10">
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </div>
    </CommonBorderWrapper>
  );
};

export default UserTable;
