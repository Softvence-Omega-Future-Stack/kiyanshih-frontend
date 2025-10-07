import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { FiEdit } from "react-icons/fi";

import { RiDeleteBinLine } from "react-icons/ri";
import { SubscriptionData } from "../../pages/subscription/data";
import Pagination from "@/common/custom/Pagination";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";

const tableHeaders = [
  { label: "SL", align: "text-center hidden 2xl:table-cell" },
  { label: "Provider", align: "text-left" },
  { label: "Contact information", align: "text-center 2xl:table-cell hidden" },
  { label: "Subscription", align: "text-center" },
  { label: "Active plan", align: "text-center xl:table-cell hidden" },
  { label: "Verification Plan", align: "text-center lg:table-cell hidden" },
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
const SubscriptionTable = () => {
  return (
    <CommonBorderWrapper className=" border-0 !p-10">
      <Table className="">
        <TableHeader>
          <TableRow className={tableDesign.header}>
            {tableHeaders.map((header) => (
              <TableHead
                key={header.label}
                className={` ${tableDesign.cellHeader}  ${header.align}`}
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {SubscriptionData.map((p) => (
            <TableRow key={p.sl} className={tableDesign.bodyRow}>
              <TableCell
                className={`2xl:table-cell hidden  ${tableDesign.cell}`}
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
                className={` 2xl:table-cell hidden  ${tableDesign.cell}`}
              >
                <div>
                  <p>{p.contactPhone}</p>
                  <p>{p.contactEmail}</p>
                </div>
              </TableCell>
              <TableCell className={`  ${tableDesign.cell}`}>
                {p.subscription}
              </TableCell>
              <TableCell
                className={`xl:table-cell hidden ${tableDesign.cell}  ${
                  p.plain === "Basic" ? "text-[#334155]" : "text-[#1D4ED8]"
                } 
            `}
              >
                {p.plain}
              </TableCell>
              <TableCell
                className={`lg:table-cell hidden  ${tableDesign.cell} ${
                  p.verification === "Complete"
                    ? "text-[#334155]"
                    : "text-[#B91C1C]"
                } 
                
              `}
              >
                {p.verification}
              </TableCell>
              <TableCell className={`  ${tableDesign.cell}`}>
                <div className=" flex justify-center gap-4">
                  <span className=" text-2xl cursor-pointer ">
                    <FiEdit />
                  </span>
                  <span className=" text-2xl cursor-pointer text-[#B91C1C]">
                    <RiDeleteBinLine />
                  </span>
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

export default SubscriptionTable;
