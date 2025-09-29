import UserNavbar from "./UserNavbar";
import { Outlet } from "react-router-dom";

const ProviderLayout = () => {
  return (
    <div>
      <UserNavbar />

      <Outlet />
    </div>
  );
};

export default ProviderLayout;
