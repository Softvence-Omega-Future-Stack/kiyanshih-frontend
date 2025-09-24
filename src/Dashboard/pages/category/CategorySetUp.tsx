import CategoryTop from "@/Dashboard/components/category/CategoryTop";
import CategoryTable from "../../components/category/CategoryTable";
import CategoryForm from "@/Dashboard/components/category/CategoryForm";

const CategorySetUp = () => {
  return (
    <div>
      <CategoryTop />
      <CategoryForm />
      <CategoryTable />
    </div>
  );
};

export default CategorySetUp;
