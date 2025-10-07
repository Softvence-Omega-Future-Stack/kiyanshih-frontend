import type { FC } from "react";
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
  { key: "sl", label: "SL", align: "text-center  hidden 2xl:table-cell" },
  {
    key: "bookingId",
    label: "Booking ID",
    align: "text-center hidden 2xl:table-cell",
  },
  {
    key: "bookingDate",
    label: "Booking Date",
    align: "text-center hidden xl:table-cell",
  },
  {
    key: "serviceLocation",
    label: "Service Location",
    align: "text-center hidden xl:table-cell",
  },
  { key: "customerInfo", label: "Customer Info", align: "text-center" },
  {
    key: "providerInfo",
    label: "Provider Info",
    align: "text-center hidden lg:table-cell",
  },
  { key: "totalAmount", label: "Total Amount", align: "text-center" },
  { key: "status", label: "Status", align: "text-center hidden lg:table-cell" },
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
const SharedTable: FC<BookingTableProps> = ({
  bookings = [], // Added default empty array to prevent undefined error
  statusColors = defaultStatusColors,
  onViewClick,
  onDownloadClick,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className={tableDesign.header}>
          {bookingTableHead.map((col) => (
            <TableHead
              key={col.key}
              className={` ${col.align} ${tableDesign.cellHeader}`}
            >
              {col.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
          <TableRow key={booking.sl} className={tableDesign.bodyRow}>
            <TableCell className={` hidden 2xl:table-cell ${tableDesign.cell}`}>
              {booking.sl.toString().padStart(2, "0")}
            </TableCell>
            <TableCell className={`hidden 2xl:table-cell  ${tableDesign.cell}`}>
              {booking.bookingId}
            </TableCell>
            <TableCell className={` hidden xl:table-cell  ${tableDesign.cell}`}>
              <div>
                <p className="whitespace-nowrap">{booking.bookingDate.date}</p>
                <p className="whitespace-nowrap">{booking.bookingDate.time}</p>
              </div>
            </TableCell>
            <TableCell
              className={` hidden
              xl:table-cell  ${tableDesign.cell}`}
            >
              <div
                className="max-w-[150px] truncate"
                title={booking.serviceLocation}
              >
                {booking.serviceLocation}
              </div>
            </TableCell>
            <TableCell className={`  ${tableDesign.cell}`}>
              <div>
                <p title={booking.customerInfo.name}>
                  {booking.customerInfo.name}
                </p>
                <p className="whitespace-nowrap">
                  {booking.customerInfo.phone}
                </p>
              </div>
            </TableCell>
            <TableCell className={` hidden lg:table-cell  ${tableDesign.cell}`}>
              <div>
                <p title={booking.providerInfo.name}>
                  {booking.providerInfo.name}
                </p>
                <p className="whitespace-nowrap">
                  {booking.providerInfo.phone}
                </p>
              </div>
            </TableCell>
            <TableCell className={`  ${tableDesign.cell}`}>
              {booking.totalAmount}
            </TableCell>
            <TableCell
              className={` hidden lg:table-cell ${tableDesign.cell} ${
                statusColors[booking.status]
              }`}
            >
              {booking.status}
            </TableCell>
            <TableCell className="border border-border text-center min-w-[80px]">
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
