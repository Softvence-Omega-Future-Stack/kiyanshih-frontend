import { type FC } from "react";
import { Eye, Download } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import type { Booking } from "./data";

interface BookingTableProps {
  bookings: Booking[];
  statusColors?: Record<Booking["status"], string>;
  onViewClick?: (booking: Booking) => void;
  onDownloadClick?: (booking: Booking) => void;
}

const defaultStatusColors: Record<Booking["status"], string> = {
  Pending: "text-orange-600",
  Cancelled: "text-red-600",
  Rejected: "text-red-600",
  Accepted: "text-green-600",
  "In-progress": "text-blue-600",
};

export const bookingTableHead = [
  { key: "sl", label: "SL" },
  { key: "bookingId", label: "Booking ID" },
  { key: "bookingDate", label: "Booking Date" },
  { key: "serviceLocation", label: "Service Location" },
  { key: "customerInfo", label: "Customer Info" },
  { key: "providerInfo", label: "Provider Info" },
  { key: "totalAmount", label: "Total Amount" },
  { key: "status", label: "Status" },
  { key: "action", label: "Action" },
];

const SharedTable: FC<BookingTableProps> = ({
  bookings,
  statusColors = defaultStatusColors,
  onViewClick,
  onDownloadClick,
}) => {
  return (
    <Table className="border border-border text-center">
      <TableHeader>
        <TableRow className="bg-[#EFF6FF] text-base text-[#2C2C2C] font-medium">
          {bookingTableHead.map((col) => (
            <TableHead
              key={col.key}
              className="border border-border text-center text-center"
            >
              {col.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
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
            <TableCell className="border border-border text-center">
              <div className="flex justify-center gap-3 text-blue-500">
                <button
                  className="hover:text-blue-700"
                  onClick={() => onViewClick?.(booking)}
                >
                  <Eye size={18} />
                </button>
                <button
                  className="hover:text-blue-700"
                  onClick={() => onDownloadClick?.(booking)}
                >
                  <Download size={18} />
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SharedTable;
