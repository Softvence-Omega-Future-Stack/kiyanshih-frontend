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
  { label: "Provider", align: "text-left" },
  { label: "Contact information", align: "text-left" },
  { label: "Subscription", align: "text-center" },
  { label: "Active plan", align: "text-center" },
  { label: "Verification Plan", align: "text-center" },
  { label: "Action", align: "text-center" },
];
import { FiEdit } from "react-icons/fi";

import { RiDeleteBinLine } from "react-icons/ri";
import { SubscriptionData } from "../../pages/subscription/data";
import Pagination from "@/common/custom/Pagination";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";

const SubscriptionTable = () => {
  return (
    <CommonBorderWrapper className=" border-0 !p-10">
      <Table className="border border-border">
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
          {SubscriptionData.map((p) => (
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
                {p.subscription}
              </TableCell>
              <TableCell
                className={`border border-border text-center  ${
                  p.plain === "Basic" ? "text-[#334155]" : "text-[#1D4ED8]"
                } 
            `}
              >
                {p.plain}
              </TableCell>
              <TableCell
                className={`  border border-border text-center font-medium ${
                  p.verification === "Complete"
                    ? "text-[#334155]"
                    : "text-[#B91C1C]"
                } 
                
              `}
              >
                {p.verification}
              </TableCell>
              <TableCell className="border border-border text-center">
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
      <div className="w-full ml-auto flex items-center justify-end mt-10">
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </div>
    </CommonBorderWrapper>
  );
};

export default SubscriptionTable;
