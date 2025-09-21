import { Outlet } from "react-router-dom";
import React, { useState } from "react";

import DashboardHeader from "@/Dashboard/common/DashboardHeader";
import Sidebar from "@/Dashboard/common/Sidebar";
import CommonHeader from "@/common/header/CommonHeader";

// ✅ Sidebar item type

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  return (
    <div className="min-h-screen bg-[#F8FAFC] pl-6 pt-6 pb-4 pr-10">
      <DashboardHeader />
      <div className="flex items-start my-10 gap-6">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setOpenMenus={setOpenMenus}
          openMenus={openMenus}
        />

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 ">
          <Outlet />
        </main>
      </div>
      <div className="w-full flex items-center justify-between">
        <CommonHeader className="!text-black">
          All Right reserved by Fixlist©2025
        </CommonHeader>
        <CommonHeader className="text-[#1E40AF]">
          Software version 3.3
        </CommonHeader>
      </div>
    </div>
  );
};

export default DashboardLayout;
