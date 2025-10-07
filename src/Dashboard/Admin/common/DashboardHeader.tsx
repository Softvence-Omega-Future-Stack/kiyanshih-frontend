import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuMessageSquareText } from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.png";
import DashboardSearch from "./DashboardSearch";
import profile from "@/assets/images/man.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa6";
import NotificationIcon from "./NotificationIcon";
import CommonDropdown from "@/common/custom/CommonDropdown";
import { languageItems } from "./data";

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full  bg-white rounded-[10px]">
      <div className="flex justify-between items-center h-16 px-5 py-2.5 ">
        <div>
          <img className=" w-[160px] h-[60px]" src={logo} alt="logo" />
        </div>

        <div className=" flex gap-6">
          <div className="hidden lg:block">
            <DashboardSearch />
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <CommonDropdown
                items={languageItems}
                trigger={
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Globe className="h-4 w-4" />
                    English (en)
                    <BiSolidDownArrow className="h-4 w-4" />
                  </Button>
                }
              />
            </div>

            <NotificationIcon
              icon={<LuMessageSquareText />}
              count={1}
              color="bg-[#4153B3]"
            />
            <NotificationIcon
              icon={<FaRegBell />}
              count={12}
              color="bg-[#4153B3]"
            />

            {/* Profile dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <Button variant="ghost" className="gap-2 p-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={profile} />
                    <AvatarFallback>ADMIN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white border border-border"
              >
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
