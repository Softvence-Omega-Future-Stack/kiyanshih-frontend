import Pagination from "@/common/custom/Pagination";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";
import CommonSpace from "@/common/space/CommonSpace";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { categoryData } from "@/Dashboard/components/category/data";

export const tableHeaders = [
  { key: "sl", label: "SL", align: "text-center" },
  { key: "category", label: "Category name", align: "text-center" },
  {
    key: "categoryCount",
    label: "Sub category count",
    align: "text-center",
  },

  { key: "action", label: "Action", align: "text-center" },
];

import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const CategoryTable = () => {
  return (
    <CommonSpace>
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
            {categoryData.map((category) => (
              <TableRow
                key={category.sl}
                className="hover:bg-gray-50 text-[#2C2C2C] text-base font-normal"
              >
                <TableCell className="border border-border text-center py-4">
                  {category.sl.toString().padStart(2, "0")}
                </TableCell>
                <TableCell className="border border-border text-center">
                  {category.categoryName}
                </TableCell>
                <TableCell className="border border-border text-center">
                  {category.subCategoryCount}
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
        </Table>{" "}
        <div className="w-full ml-auto flex items-center justify-end mt-4 ">
          <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
        </div>
      </CommonBorderWrapper>
    </CommonSpace>
  );
};

export default CategoryTable;
