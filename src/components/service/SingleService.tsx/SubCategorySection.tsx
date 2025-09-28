import sub1 from "@/assets/images/sub1.svg";
import sub2 from "@/assets/images/sub2.svg";
import sub3 from "@/assets/images/sub3.svg";
import sub4 from "@/assets/images/sub4.svg";
import sub5 from "@/assets/images/sub5.svg";
import CommonHeader from "@/common/header/CommonHeader";
import SectionHeader from "@/common/header/SectionHeader";
import CommonSpace from "@/common/space/CommonSpace";
const services = [
  {
    name: "Renovation",
    icon: sub1,
    description: "Complete home renovation services to transform your space",
    color: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    name: "Carpentry",
    icon: sub2,
    description: "Custom woodwork and precision carpentry for your home",
    color: "bg-green-100",
    textColor: "text-green-800",
  },
  {
    name: "Roofing",
    icon: sub3,
    description: "Professional roofing installation and repair services",
    color: "bg-red-100",
    textColor: "text-red-800",
  },
  {
    name: "Painting",
    icon: sub4,
    description: "Interior and exterior painting with quality finishes",
    color: "bg-purple-100",
    textColor: "text-purple-800",
  },
  {
    name: "Fencing",
    icon: sub5,
    description: "Custom fencing solutions for privacy and security",
    color: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  {
    name: "Painting",
    icon: sub4,
    description: "Specialty finishes and decorative painting techniques",
    color: "bg-indigo-100",
    textColor: "text-indigo-800",
  },
  {
    name: "Painting",
    icon: sub4,
    description: "Commercial painting services for businesses",
    color: "bg-pink-100",
    textColor: "text-pink-800",
  },
];
const SubCategorySection = () => {
  return (
    <CommonSpace className="">
      <SectionHeader
        className="!text-start "
        title="Popular Handyman Services"
        subtitle="Explore Services in Your Neighborhood"
      />

      <div className="w-full justify-center sm:justify-start flex flex-wrap gap-6 sm:gap-9 pt-7">
        {services.map((service, index) => (
          <div className="flex flex-col items-center gap-4" key={index}>
            <div
              key={index}
              className="bg-white border border-border p-3.5 rounded-md"
            >
              <div className="w-18 h-18 rounded-md flex items-center justify-center">
                <img className="w-12 h-12" src={service.icon} alt="" />
              </div>
            </div>
            <CommonHeader className="!text-[#1E293B] font-semibold">
              {service.name}
            </CommonHeader>
          </div>
        ))}
      </div>
    </CommonSpace>
  );
};

export default SubCategorySection;
