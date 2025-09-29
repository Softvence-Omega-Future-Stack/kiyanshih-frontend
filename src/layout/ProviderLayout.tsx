
import UserNavbar from "./UserNavbar";
import { Outlet } from "react-router-dom";


import CommonWrapper from "@/common/space/CommonWrapper";
import ProviderTabs from "@/Dashboard/userDashboard/userComponents/userTabs/ProviderTabs";
import Footer from "./Footer";


const ProviderLayout = () => {
  return (
    <div>

      <CommonWrapper>
        <UserNavbar />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-6 mb-4 mx-8">
          <div>
            <h2 className="text-xl font-semibold font-weight-600">Welcome back, Charlotte Davis</h2>
            <p className="text-gray-400">Manage your services and track your performance</p>
          </div>
          <div>
            <button className="px-4 py-2 bg-black text-white rounded-sm hover:scale-105 transition">
              Get Verified
            </button>
          </div>
        </div>
        <ProviderTabs />
        <Outlet />
        <Footer />
      </CommonWrapper>

    </div>
  );
};

export default ProviderLayout;
