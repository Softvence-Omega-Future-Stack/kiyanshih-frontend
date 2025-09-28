import CommonHeader from "@/common/header/CommonHeader";
import CommonWrapper from "@/common/space/CommonWrapper";
import { BsDot } from "react-icons/bs";

const featureCards = [
  {
    title: "Detailed job descriptions",
    subItems: ["Photo uploads", "Budget setting"],
    extraItems: ["Timeline preferences"],
    bgColor: "bg-[#FFFAF0]", // light cream
  },
  {
    title: "Background-checked providers",
    subItems: ["Customer reviews & ratings", "Portfolio galleries"],
    extraItems: ["Transparent pricing"],
    bgColor: "bg-[#FFFCF0]", // light yellowish
  },
  {
    title: "Direct communication",
    subItems: ["Progress tracking", "Secure payments"],
    extraItems: ["Satisfaction guarantee"],
    bgColor: "bg-[#F0FAF7]", // light green
  },
];

const MiniCard = () => {
  return (
    <CommonWrapper>
      <div className="w-full flex flex-col sm:flex-row flex-wrap justify-between gap-6">
        {featureCards.map((card, index) => (
          <div
            key={index}
            className={`p-5 sm:min-w-[364px] flex-1 ${card.bgColor} rounded-xl`}
          >
            <CommonHeader className="!text-black flex items-center">
              <span>
                <BsDot />
              </span>
              {card.title}
            </CommonHeader>
            <div className="ml-4">
              {card.subItems?.map((item, i) => (
                <CommonHeader className="!text-black flex items-center" key={i}>
                  <span>
                    <BsDot />
                  </span>
                  {item}
                </CommonHeader>
              ))}
            </div>
            <div className="ml-2 flex items-center">
              <span>
                <BsDot />
              </span>
              {card.extraItems}
            </div>
          </div>
        ))}
      </div>
    </CommonWrapper>
  );
};

export default MiniCard;
