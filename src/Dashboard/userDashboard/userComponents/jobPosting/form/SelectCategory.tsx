import image from "@/assets/frame/p4.svg";
import InfoSection from "../InfoSection";
import UserSectionHeader from "../../reuseable/UserSectionHeader";
import CurveSearch from "@/components/service/CurveSearch";
import SubCategorySection from "@/components/service/SingleService.tsx/SubCategorySection";
import CommonButton from "@/common/button/CommonButton";
const services = [
  "Plumbing",
  "Installation",
  "Carpentry",
  "Roofing",
  "Flooring",
  "Painting",
  "Others",
];
const SelectCategory = () => {
  return (
    <div>
      <InfoSection
        className=""
        image={image}
        title="Tell us about your Job"
        subtitle="The more details you provide. the better matches you'll get from qualified professionals."
      />
      <div>
        <UserSectionHeader title="Choose a Category" className="!pb-0" />
        <CurveSearch className=" " border="!border-border" />
      </div>
      <div>
        <SubCategorySection hide />
      </div>
      <UserSectionHeader subtitle="Choose Specific Service in Home Improvement" />

      <div className="flex flex-wrap gap-3">
        {services.map((service, index) => (
          <CommonButton className="w-[200px]" key={index}>
            {service}
          </CommonButton>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
