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
import {
  TransactionData,
  type Transaction,
} from "@/Dashboard/Admin/pages/transaction/data";

export const tableHeaders = [
  { key: "sl", label: "SL", align: "text-center hidden 2xl:table-cell" },
  {
    key: "bookingId",
    label: "Booking ID",
    align: "text-center hidden 2xl:table-cell",
  },
  {
    key: "bookingDate",
    label: "Booking Date",
    align: "text-center hidden 2xl:table-cell",
  },
  {
    key: "serviceLocation",
    label: "Service Location",
    align: "text-center xl:table-cell hidden",
  },
  { key: "customerInfo", label: "Customer Info", align: "text-center" },
  { key: "providerInfo", label: "Provider Info", align: "text-center " },
  {
    key: "totalAmount",
    label: "Total Amount",
    align: "text-center xl:table-cell hidden",
  },
  { key: "status", label: "Status", align: "text-center lg:table-cell hidden" },
  { key: "action", label: "Action", align: "text-center" },
];

const tableDesign = {
  header:
    "text-lg font-Geist text-[#2C2C2C] font-medium bg-[#EFF6FF] hover:bg-[#EFF6FF] md:h-12 leading-[28px]",
  cellHeader: "border border-border px-4 ",
  bodyRow:
    "text-[#2C2C2C] font-Geist text-lg font-normal md:h-12 leading-[28px]",
  cell: "border border-border px-4 text-center",
};

const statusColors: Record<Transaction["status"], string> = {
  Paid: "text-[#2DD4BF]",
  Refund: "text-[#DB2777]",
};

import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const TransactionTable = () => {
  return (
    <CommonBorderWrapper className=" border-0 !p-10">
      <Table className="">
        <TableHeader>
          <TableRow className={tableDesign.header}>
            {tableHeaders.map((header) => (
              <TableHead
                key={header.key}
                className={` ${tableDesign.cellHeader} ${header.align}`}
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {TransactionData.map((booking) => (
            <TableRow key={booking.sl} className={tableDesign.bodyRow}>
              <TableCell
                className={`2xl:table-cell hidden  ${tableDesign.cell}`}
              >
                {booking.sl.toString().padStart(2, "0")}
              </TableCell>
              <TableCell
                className={`2xl:table-cell hidden  ${tableDesign.cell}`}
              >
                {booking.bookingId}
              </TableCell>
              <TableCell
                className={`2xl:table-cell hidden  ${tableDesign.cell}`}
              >
                <div>
                  <p>{booking.bookingDate.date}</p>
                  <p>{booking.bookingDate.time}</p>
                </div>
              </TableCell>
              <TableCell
                className={` xl:table-cell hidden  ${tableDesign.cell}`}
              >
                {booking.serviceLocation}
              </TableCell>
              <TableCell className={`  ${tableDesign.cell}`}>
                <div>
                  <p>{booking.customerInfo.name}</p>
                  <p>{booking.customerInfo.phone}</p>
                </div>
              </TableCell>
              <TableCell className={`  ${tableDesign.cell}`}>
                <div>
                  <p>{booking.providerInfo.name}</p>
                  <p>{booking.providerInfo.phone}</p>
                </div>
              </TableCell>
              <TableCell
                className={`xl:table-cell hidden  ${tableDesign.cell}`}
              >
                {booking.totalAmount}
              </TableCell>
              <TableCell
                className={`lg:table-cell hidden ${tableDesign.cell} ${
                  statusColors[booking.status]
                }`}
              >
                {booking.status}
              </TableCell>
              <TableCell className={`  ${tableDesign.cell}`}>
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
      <div className="w-full ml-auto flex items-center justify-center lg:justify-end mt-10">
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </div>
    </CommonBorderWrapper>
  );
};

export default TransactionTable;
