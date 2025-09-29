import CommonHeader from "@/common/header/CommonHeader";
import UserSectionHeader from "../reuseable/UserSectionHeader";
import Paragraph from "@/common/header/Paragraph";
import { GoDotFill } from "react-icons/go";

const RecentActivity = () => {
  return (
    <div>
      <UserSectionHeader
        title="Recent Activity"
        subtitle="View  your Recent activity"
      />

      <div className="w-full flex flex-col gap-2 border border-border rounded-md p-4 mb-10">
        <CommonHeader className="flex items-center gap-1">
          <span className="text-[#15803D]">
            <GoDotFill />
          </span>
          New Proposal Received
        </CommonHeader>
        <Paragraph className="!text-xs !leading-[18px] !text-[#716E6E]">
          5 min ago
        </Paragraph>
      </div>
    </div>
  );
};

export default RecentActivity;
