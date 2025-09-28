import Pagination from "@/common/custom/Pagination";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export const tableHeaders = [
  { key: "sl", label: "SL", align: "text-center" },
  { key: "bookingId", label: "Booking ID", align: "text-center" },
  { key: "bookingDate", label: "Booking Date", align: "text-center" },
  { key: "serviceLocation", label: "Service Location", align: "text-center" },
  { key: "customerInfo", label: "Customer Info", align: "text-center" },
  { key: "providerInfo", label: "Provider Info", align: "text-center" },
  { key: "totalAmount", label: "Total Amount", align: "text-center" },
  { key: "status", label: "Status", align: "text-center" },
  { key: "action", label: "Action", align: "text-center" },
];

import {
  TransactionData,
  type Transaction,
} from "@/Dashboard/pages/transaction/data";
const statusColors: Record<Transaction["status"], string> = {
  Paid: "text-[#2DD4BF]",
  Refund: "text-[#DB2777]",
};

import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const TransactionTable = () => {
  return (
    <CommonBorderWrapper className=" border-0 !p-10">
      <Table className="border border-border text-center">
        <TableHeader>
          <TableRow className="bg-[#EFF6FF] text-base text-[#2C2C2C] font-medium">
            {tableHeaders.map((header) => (
              <TableHead
                key={header.key}
                className={`border border-border text-center ${header.align}`}
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {TransactionData.map((booking) => (
            <TableRow
              key={booking.sl}
              className="hover:bg-gray-50 text-[#2C2C2C] text-base font-normal"
            >
              <TableCell className="border border-border text-center py-4">
                {booking.sl.toString().padStart(2, "0")}
              </TableCell>
              <TableCell className="border border-border text-center">
                {booking.bookingId}
              </TableCell>
              <TableCell className="border border-border text-center">
                <div>
                  <p>{booking.bookingDate.date}</p>
                  <p>{booking.bookingDate.time}</p>
                </div>
              </TableCell>
              <TableCell className="border border-border text-center">
                {booking.serviceLocation}
              </TableCell>
              <TableCell className="border border-border text-center">
                <div>
                  <p>{booking.customerInfo.name}</p>
                  <p>{booking.customerInfo.phone}</p>
                </div>
              </TableCell>
              <TableCell className="border border-border text-center">
                <div>
                  <p>{booking.providerInfo.name}</p>
                  <p>{booking.providerInfo.phone}</p>
                </div>
              </TableCell>
              <TableCell className="border border-border text-center">
                {booking.totalAmount}
              </TableCell>
              <TableCell
                className={`border border-border text-center font-medium ${
                  statusColors[booking.status]
                }`}
              >
                {booking.status}
              </TableCell>
              <TableCell className="border border-border text-center ">
                <div className="flex justify-center gap-3 text-blue-500">
                  <button className="hover:text-blue-700">
                    <FiEdit size={18} />
                  </button>
                  <button className="text-[#B91C1C]">
                    <RiDeleteBinLine size={18} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-full ml-auto flex items-center justify-end mt-10">
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </div>
    </CommonBorderWrapper>
  );
};

export default TransactionTable;
