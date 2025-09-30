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
  { key: "bookingId", label: "Transaction ID", align: "text-center" },
  { key: "bookingDate", label: "Transaction Date", align: "text-center" },
  { key: "serviceLocation", label: "Transaction Fro", align: "text-center" },
  { key: "totalAmount", label: "Amount", align: "text-center" },
  { key: "status", label: "Status", align: "text-center" },
];

import {
  TransactionData,
  type Transaction,
} from "@/Dashboard/Admin/pages/transaction/data";
const statusColors: Record<Transaction["status"], string> = {
  Paid: "text-[#2DD4BF]",
  Refund: "text-[#DB2777]",
};

const PaymentHistory = () => {
  return (
    <Table className="border border-border text-center mb-10">
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
              <div className="flex gap-1 justify-center">
                <p>{booking.bookingDate.date}</p>
                <p>{booking.bookingDate.time}</p>
              </div>
            </TableCell>
            <TableCell className="border border-border text-center">
              {booking.serviceLocation}
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PaymentHistory;
