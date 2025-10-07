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
import { categoryData } from "@/Dashboard/Admin/components/category/data";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

export const tableHeaders = [
  { key: "sl", label: "SL", align: "text-center lg:table-cell hidden" },
  { key: "category", label: "Category name", align: "text-center" },
  {
    key: "categoryCount",
    label: "Sub category count",
    align: "text-center hidden lg:table-cell",
  },

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
const CategoryTable = () => {
  return (
    <CommonSpace>
      <CommonBorderWrapper className=" border-0 !p-10">
        <Table className={tableDesign.header}>
          <TableHeader>
            <TableRow className="bg-[#EFF6FF] text-base text-[#2C2C2C] font-medium">
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
            {categoryData.map((category) => (
              <TableRow key={category.sl} className={tableDesign.bodyRow}>
                <TableCell
                  className={` hidden lg:table-cell  ${tableDesign.cell}`}
                >
                  {category.sl.toString().padStart(2, "0")}
                </TableCell>
                <TableCell className={`  ${tableDesign.cell}`}>
                  {category.categoryName}
                </TableCell>
                <TableCell
                  className={` lg:table-cell hidden  ${tableDesign.cell}`}
                >
                  {category.subCategoryCount}
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
        </Table>{" "}
        <div className="w-full  flex items-center justify-center lg:justify-end mt-10 ">
          <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
        </div>
      </CommonBorderWrapper>
    </CommonSpace>
  );
};

export default CategoryTable;
