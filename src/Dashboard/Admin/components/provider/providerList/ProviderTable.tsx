import { type FC } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import CustomSwitch from "@/common/custom/CustomSwitch";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";
import Pagination from "@/common/custom/Pagination";

export interface Provider {
  sl: number;
  providerName: string;
  rating: number;
  avatar?: string;
  contactPhone: string;
  contactEmail: string;
  totalBookings: number;
  isAvailable: boolean;
  status: "Basic" | "Unlimited";
}

interface ProviderTableProps {
  providers: Provider[];
  onToggleAvailability?: (provider: Provider) => void;
  onDelete?: (provider: Provider) => void;
}
const tableHeaders = [
  { label: "SL", align: "text-center" },
  { label: "Provider", align: "text-left" },
  { label: "Contact Info", align: "text-left" },
  { label: "Total Bookings", align: "text-center" },
  { label: "Service Availability", align: "text-center" },
  { label: "Status", align: "text-center" },
  { label: "Action", align: "text-center" },
];
const ProviderTable: FC<ProviderTableProps> = ({
  providers,
  onToggleAvailability,
  onDelete,
}) => {
  return (
    <CommonBorderWrapper className=" border-0 !p-10">
      <Table>
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
          {providers.map((p) => (
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
                      <AvatarFallback>{p.providerName[0]}</AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <p className="font-medium">{p.providerName}</p>
                    <p className="text-orange-500 text-xs">
                      ★ {p.rating.toFixed(1)}
                    </p>
                  </div>
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
              <TableCell className="border border-border text-center">
                <div className=" flex justify-center">
                  <CustomSwitch
                    checked={p.isAvailable}
                    onChange={() => onToggleAvailability?.(p)}
                  />
                </div>
              </TableCell>
              <TableCell className="border border-border text-center">
                <div
                  className={p.isAvailable ? "text-blue" : "text-[##2C2C2C]"}
                >
                  {p.status}
                </div>
              </TableCell>
              <TableCell className="border border-border">
                <div className="flex justify-center gap-3 text-red-600 cursor-pointer">
                  <button
                    className="hover:text-red-800"
                    onClick={() => onDelete?.(p)}
                  >
                    <RiDeleteBinLine size={24} />
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

export default ProviderTable;
