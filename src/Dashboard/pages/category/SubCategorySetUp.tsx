import SubCategoryForm from "@/Dashboard/components/Subcategory/SubCategoryForm";
import SubCategoryTable from "@/Dashboard/components/Subcategory/SubCategoryTable";
import SubCategoryTop from "@/Dashboard/components/Subcategory/SubCategoryTop";

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
