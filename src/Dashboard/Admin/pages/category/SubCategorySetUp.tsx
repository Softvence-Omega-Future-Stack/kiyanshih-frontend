import SubCategoryForm from "@/Dashboard/Admin/components/Subcategory/SubCategoryForm";
import SubCategoryTable from "@/Dashboard/Admin/components/Subcategory/SubCategoryTable";
import SubCategoryTop from "@/Dashboard/Admin/components/Subcategory/SubCategoryTop";

const SubCategorySetUp = () => {
  return (
    <div>
      <SubCategoryTop />
      <SubCategoryForm />
      <SubCategoryTable />
    </div>
  );
};

export default SubCategorySetUp;
