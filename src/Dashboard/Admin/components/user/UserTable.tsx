import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const tableHeaders = [
  { label: "SL", align: "text-center" },
  { label: "User name", align: "text-left" },
  { label: "Contact information", align: "text-left" },
  { label: "Total Bookings", align: "text-center" },
  { label: "Status", align: "text-center" },
  { label: "Action", align: "text-center" },
];

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
const UserTable = () => {
  return (
    <CommonBorderWrapper className=" border-0 !p-10">
      <Table className="">
        <TableHeader>
          <TableRow className="bg-[#EFF6FF] text-base text-[#2C2C2C] font-medium">
            {tableHeaders.map((header) => (
              <TableHead
                key={header.label}
                className={`border border-border ${header.align}`}
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {userData.map((p) => (
            <TableRow
              key={p.sl}
              className="hover:bg-gray-50 text-[#2C2C2C] text-base font-normal"
            >
              <TableCell className="border border-border py-4 text-center">
                {p.sl.toString().padStart(2, "0")}
              </TableCell>
              <TableCell className="border border-border ">
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
              <TableCell className="border border-border">
                <div>
                  <p>{p.contactPhone}</p>
                  <p>{p.contactEmail}</p>
                </div>
              </TableCell>
              <TableCell className="border border-border text-center">
                {p.totalBookings}
              </TableCell>
              <TableCell
                className={`  border border-border text-center font-medium ${
                  defaultStatusColors[p.status]
                }`}
              >
                {p.status}
              </TableCell>
              <TableCell className="border border-border text-center">
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
      <div className="w-full ml-auto flex items-center justify-end mt-8">
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </div>
    </CommonBorderWrapper>
  );
};

export default UserTable;
