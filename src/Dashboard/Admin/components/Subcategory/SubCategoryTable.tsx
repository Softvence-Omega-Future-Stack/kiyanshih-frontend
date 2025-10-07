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
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { subCategories } from "./data";

export const tableHeaders = [
  { key: "sl", label: "SL", align: "text-center lg:table-cell hidden" },
  { key: "subCategory", label: "Sub Category", align: "text-center" },
  {
    key: "category",
    label: "category",
    align: "text-center lg:table-cell hidden",
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
const SubCategoryTable = () => {
  return (
    <CommonSpace>
      <CommonBorderWrapper className=" border-0 !p-10">
        <Table className={tableDesign.header}>
          <TableHeader>
            <TableRow className={tableDesign.header}>
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
            {subCategories.map((category) => (
              <TableRow key={category.sl} className={tableDesign.bodyRow}>
                <TableCell
                  className={`lg:table-cell hidden  ${tableDesign.cell}`}
                >
                  {category.sl.toString().padStart(2, "0")}
                </TableCell>
                <TableCell className={`  ${tableDesign.cell}`}>
                  {category.Subcategory}
                </TableCell>
                <TableCell
                  className={` hidden lg:table-cell  ${tableDesign.cell}`}
                >
                  {category.category}
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
        </Table>
        <div className="w-full  flex items-center justify-center lg:justify-end mt-10 ">
          <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
        </div>
      </CommonBorderWrapper>
    </CommonSpace>
  );
};

export default SubCategoryTable;
