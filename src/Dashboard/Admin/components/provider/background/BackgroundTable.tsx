import { type FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import type { BackgroundProvider } from "./data";
import { IoCheckmarkOutline, IoCloseSharp } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";

interface ProviderTableProps {
  providers: BackgroundProvider[];
  onDelete?: (provider: BackgroundProvider) => void;
  handleToggleAvailability?: (provider: BackgroundProvider) => void;
}
const tableHeaders = [
  { label: "SL", align: "text-center" },
  { label: "Provider Information", align: "text-left" },
  { label: "Contact information", align: "text-left" },
  { label: "Insurance number", align: "text-center" },
  { label: "Documents(Govt id)", align: "text-center" },
  { label: "Professional Documents", align: "text-center" },
];

import image from "@/assets/images/image.svg";
import pdf from "@/assets/images/pdf.svg";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";
import Pagination from "@/common/custom/Pagination";
const BackgroundTable: FC<ProviderTableProps> = ({
  providers,
  handleToggleAvailability,
  onDelete,
}) => {
  return (
    <CommonBorderWrapper className=" !p-8 !border-0">
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
                {p.insuranceNumber}
              </TableCell>
              <TableCell className="border border-border text-center">
                <div className=" flex justify-center gap-2">
                  <img src={image} alt="" />
                  <img src={pdf} alt="" />
                </div>
              </TableCell>
              <TableCell className="border border-border text-center">
                <div className=" flex justify-center gap-4">
                  <span
                    onClick={() => handleToggleAvailability?.(p)}
                    className=" text-2xl cursor-pointer text-[#1D4ED8]"
                  >
                    <FaRegEye />
                  </span>
                  <span className=" text-2xl cursor-pointer text-[#15803D]">
                    <IoCheckmarkOutline />
                  </span>
                  <span
                    onClick={() => onDelete?.(p)}
                    className=" text-2xl cursor-pointer text-[#B91C1C]"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-full ml-auto flex items-center justify-end pt-8">
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </div>
    </CommonBorderWrapper>
  );
};

export default BackgroundTable;
