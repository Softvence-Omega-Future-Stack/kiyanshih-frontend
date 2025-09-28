import CommonWrapper from "@/common/space/CommonWrapper";
import line1 from "@/assets/frame/line1.png";
import Briefcase from "@/assets/frame/briefcase-business.svg";
import User from "@/assets/frame/user-check.svg";
import CheckCircle from "@/assets/frame/badge-check.svg";
import MediumHeader from "@/common/header/MediumHeader";
import SubHeader from "@/Dashboard/common/SubHeader";
import SectionHeader from "@/common/header/SectionHeader";

const steps = [
  {
    title: "Post Your Job",
    description:
      "Connect with verified professionals for home improvement, cleaning, maintenance, and more. Quality service providers in your neighborhood.",
    icon: Briefcase,
    bgColor:
      "bg-[#9672FF] shadow-[0_100px_80px_rgba(150,114,255,0.07),0_64.815px_46.852px_rgba(150,114,255,0.05),0_38.519px_25.481px_rgba(150,114,255,0.04),0_20px_13px_rgba(150,114,255,0.04),0_8.148px_6.519px_rgba(150,114,255,0.03),0_1.852px_3.148px_rgba(150,114,255,0.02)]",
  },
  {
    title: "Choose a Provider",
    description:
      "Compare profiles, reviews, and prices. All providers are background-checked and verified for your peace of mind.",
    icon: User,
    bgColor:
      "bg-[#4DDFFD] shadow-[0_100px_80px_rgba(77,223,253,0.07),0_64.815px_46.852px_rgba(77,223,253,0.05),0_38.519px_25.481px_rgba(77,223,253,0.04),0_20px_13px_rgba(77,223,253,0.04),0_8.148px_6.519px_rgba(77,223,253,0.03),0_1.852px_3.148px_rgba(77,223,253,0.02)]",
  },
  {
    title: "Get it Done",
    description:
      "Work gets completed to your satisfaction. Pay securely through our platform or arrange cash/e-transfer directly.",
    icon: CheckCircle,
    bgColor:
      "bg-[#F2B8EC] shadow-[0_100px_80px_0_rgba(242,184,236,0.07),0_64.815px_46.852px_0_rgba(242,184,236,0.05),0_38.519px_25.481px_0_rgba(242,184,236,0.04),0_20px_13px_0_rgba(242,184,236,0.04),0_8.148px_6.519px_0_rgba(242,184,236,0.03),0_1.852px_3.148px_0_rgba(242,184,236,0.02)]",
  },
];

interface FixListProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const FixList: React.FC<FixListProps> = ({ title, subtitle, className }) => {
  return (
    <CommonWrapper>
      <section className={`bg-white pb-10  ${className}`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 md:mb-16">
            <SectionHeader title={title} subtitle={subtitle} />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-18">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center flex flex-col items-center">
                  <div
                    className={` w-22.5 h-22.5 mb-10 rounded-[20px] flex items-center justify-center ${step.bgColor}`}
                  >
                    <img
                      className="w-7.5 h-7.5"
                      src={step.icon}
                      alt={step.title}
                    />
                  </div>

                  <MediumHeader className="!text-[22px] mb-4">
                    {step.title}
                  </MediumHeader>

                  <SubHeader className="!text-[#333] max-w-sm mx-auto">
                    {step.description}
                  </SubHeader>
                </div>

                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div
                    className={`hidden md:block absolute top-[40px] translate-x-[60%] px-4 ${
                      index % 2 !== 0 ? "rotate-180" : ""
                    }`}
                  >
                    <img src={line1} alt="" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </CommonWrapper>
  );
};

export default FixList;
