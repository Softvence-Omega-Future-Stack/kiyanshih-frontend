import CommonSpace from "@/common/space/CommonSpace";
import CurveSearch from "./CurveSearch";
import CommonHeader from "@/common/header/CommonHeader";
import { GoGraph } from "react-icons/go";
import SectionHeader from "@/common/header/SectionHeader";

const servicesMini = [
  "Handyman service",
  "Cleaning service",
  "Tech service",
  "Renovation, Remodelling service",
  "Automotive service",
];

const ServiceTopSection = () => {
  return (
    <CommonSpace className="!py-20">
      <div className="max-w-3xl  ">
        <SectionHeader
          className=" !text-start"
          title="Find Local Services"
          subtitle="  Browse verified providers in your area. Free for clients, transparent
          pricing, and reviews from real customers."
        />
      </div>
      <div className=" max-w-2xl pt-4 pb-2">
        <CurveSearch />
      </div>

      <div className="max-w-2xl  bg-white border border-border px-10 pb-10 pt-5 rounded-2xl">
        <div className=" flex gap-1">
          <span>
            <GoGraph />
          </span>

          <CommonHeader className=" mb-8 !text-black">
            Popular Services
          </CommonHeader>
        </div>

        <div className="flex flex-wrap gap-2">
          {servicesMini.map((service, index) => (
            <CommonHeader
              key={index}
              className=" border border-border px-4 py-2 !rounded-full"
            >
              {service}
            </CommonHeader>
          ))}
        </div>
      </div>
    </CommonSpace>
  );
};

export default ServiceTopSection;
