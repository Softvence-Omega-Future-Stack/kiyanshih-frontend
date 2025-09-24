import AddBusinessInfo from "@/Dashboard/components/provider/addProvider/AddBusinessInfo";
import AddProviderPersonal from "@/Dashboard/components/provider/addProvider/AddProviderPersonal";
import AddProviderTop from "@/Dashboard/components/provider/addProvider/AddProviderTop";
import Submit from "../../components/provider/addProvider/Submit";

const AddProvider = () => {
  return (
    <div>
      <AddProviderTop />
      <AddProviderPersonal />
      <AddBusinessInfo />
      <Submit />
    </div>
  );
};

export default AddProvider;
