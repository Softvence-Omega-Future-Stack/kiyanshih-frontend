import { PiDotBold } from "react-icons/pi";
import BigTitle from "@/common/header/BigTitle";
import CommonHeader from "@/common/header/CommonHeader";
import { type FC } from "react";

interface serviceObject {
  title: string;
  services: string[];
  providers: string;
  image: string;
}
interface ServiceCardProps {
  service: serviceObject;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="p-5 border border-border rounded-[20px]">
      <div className=" pb-2.5">
        <img src={service.image} alt="" />
      </div>
      <div className="pb-5">
        <BigTitle className=" !text-[#0A1A33] !text-2xl">
          {service.title}
        </BigTitle>
      </div>
      <div className="pb-7.5 space-y-3">
        {service.services.map((service, index) => (
          <div className="flex items-start gap-1">
            <span className=" xl:text-2xl text-[#334155]">
              <PiDotBold />
            </span>
            <CommonHeader className=" !text-[#334155] " key={index}>
              {service}
            </CommonHeader>
          </div>
        ))}
      </div>

      <BigTitle className=" !text-[#1D4ED8] !text-lg">
        {service.providers}
      </BigTitle>
    </div>
  );
};

export default ServiceCard;
