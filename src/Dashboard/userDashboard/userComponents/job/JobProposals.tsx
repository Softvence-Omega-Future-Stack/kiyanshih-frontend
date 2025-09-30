import { MapPin } from "lucide-react";
import image from "@/assets/images/f1.png";
import CommonHeader from "@/common/header/CommonHeader";
import Paragraph from "@/common/header/Paragraph";
import CommonButton from "@/common/button/CommonButton";
import type { FC } from "react";

interface JobProposalsProps {
  setViewProposals: React.Dispatch<React.SetStateAction<boolean>>;
}
const JobProposals: FC<JobProposalsProps> = ({ setViewProposals }) => {
  return (
    <div className=" border-t border-b border-border py-4 mt-4">
      <div className="flex items-start gap-4 mb-4">
        <img src={image} className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <div>
            <CommonHeader className="!text-lg text-[#475569]">
              Mike Handyman service
            </CommonHeader>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <CommonHeader className="!text-[#2E4A61]">
                Service Provider
              </CommonHeader>
              <MapPin className="w-4 h-4 text-[#1D4ED8]" />
              <Paragraph className=" !text-black/80">Ontario, Canada</Paragraph>
            </div>
            <CommonHeader className="flex items-center gap-4 !text-[#334155]">
              <span> Budget:</span>
              <span className="text-lg font-semibold text-orange-600">
                $180.00
              </span>
              <span className="text-sm text-gray-600">2-3 hours same day</span>
            </CommonHeader>
          </div>
          <div className="mb-6">
            <Paragraph className="font-semibold !text-black mb-2">
              About Service
            </Paragraph>
            <Paragraph className="text-[#334155] ">
              Hi Charlotte! I've been doing cabinet repairs for over 8 years and
              this sounds like a straightforward fix. I can usually adjust
              hinges and plane doors to get them closing perfectly. I have all
              the necessary tools and can come prepared with replacement hinges
              if needed. I'm available this week and can work around your
              schedule.
            </Paragraph>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CommonButton className="!bg-blue  !text-white">
                Accept
              </CommonButton>
              <CommonButton
                onClick={() => setViewProposals(false)}
                className=" !bg-[#B91C1C] !text-white"
              >
                Decline
              </CommonButton>
            </div>
            <div className="flex items-center gap-4">
              <CommonHeader className="!text-[#475569]">Message</CommonHeader>
              <CommonHeader className="!text-[#475569]">Profile</CommonHeader>
              <CommonHeader className="!text-blue">Details</CommonHeader>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobProposals;
