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
  { label: "SL", align: "text-center hidden 2xl:table-cell" },
  { label: "Provider", align: "text-left" },
  { label: "Contact Info", align: "text-center xl:table-cell hidden" },
  { label: "Total Bookings", align: "text-center hidden lg:table-cell" },
  { label: "Service Availability", align: "text-center" },
  { label: "Status", align: "text-center hidden xl:table-cell" },
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
const ProviderTable: FC<ProviderTableProps> = ({
  providers,
  onToggleAvailability,
  onDelete,
}) => {
  return (
    <CommonBorderWrapper className=" border-0 !p-10">
      <Table>
        <TableHeader>
          <TableRow className={tableDesign.header}>
            {tableHeaders.map((header) => (
              <TableHead
                key={header.label}
                className={`${tableDesign.cellHeader} ${header.align}`}
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {providers.map((p) => (
            <TableRow key={p.sl} className={tableDesign.bodyRow}>
              <TableCell
                className={` hidden 2xl:table-cell  ${tableDesign.cell}`}
              >
                {p.sl.toString().padStart(2, "0")}
              </TableCell>
              <TableCell className={`  ${tableDesign.cell}`}>
                <div className="flex items-start gap-2">
                  <Avatar className="h-8 w-8 mt-1">
                    {p.avatar ? (
                      <AvatarImage src={p.avatar} />
                    ) : (
                      <AvatarFallback>{p.providerName[0]}</AvatarFallback>
                    )}
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <p className="font-medium">{p.providerName}</p>
                    <p className="text-orange-500 text-xs">
                      ★ {p.rating.toFixed(1)}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell
                className={` hidden xl:table-cell  ${tableDesign.cell}`}
              >
                <div>
                  <p>{p.contactPhone}</p>
                  <p>{p.contactEmail}</p>
                </div>
              </TableCell>
              <TableCell
                className={` hidden lg:table-cell  ${tableDesign.cell}`}
              >
                {p.totalBookings}
              </TableCell>
              <TableCell className={`  ${tableDesign.cell}`}>
                <div className=" flex justify-center">
                  <CustomSwitch
                    checked={p.isAvailable}
                    onChange={() => onToggleAvailability?.(p)}
                  />
                </div>
              </TableCell>
              <TableCell
                className={` hidden xl:table-cell  ${tableDesign.cell}`}
              >
                <div
                  className={p.isAvailable ? "text-blue" : "text-[##2C2C2C]"}
                >
                  {p.status}
                </div>
              </TableCell>
              <TableCell className={`  ${tableDesign.cell}`}>
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
      <div className="w-full  flex items-center justify-center lg:justify-end mt-10">
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </div>
    </CommonBorderWrapper>
  );
};

export default ProviderTable;
