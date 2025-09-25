import CommonWrapper from "@/common/space/CommonWrapper";
import { ArrowRight } from "lucide-react";

import Settings from "@/assets/frame/settings.svg";
import Home from "@/assets/frame/layers-3.svg";
import Sparkles from "@/assets/frame/fan.svg";
import TreePine from "@/assets/frame/land-plot.svg";
import MediumHeader from "@/common/header/MediumHeader";
import LandingTitle from "@/common/header/LandingTitle";

const categories = [
  {
    title: "Handyman Service",
    description:
      "Reliable and versatile handyman solutions for homes and businesses, delivering dependable repairs, practical upgrades, and everyday convenience",
    icon: Settings,
    bgColor: "bg-[#FEFCE8]",
  },
  {
    title: "Home Improvement",
    description:
      "High-quality and durable roofing solutions for residential and commercial properties, long-lasting protection, and aesthetic appeal.",
    icon: Home,
    bgColor: "bg-[#EFF6FF]",
  },
  {
    title: "Cleaning Service",
    description:
      "Reliable lawn cleaning solutions that remove debris, enhance curb appeal, and maintain a tidy outdoor space year-round.",
    icon: Sparkles,
    bgColor: "bg-[#ECFEFF]",
  },
  {
    title: "Yard & Garden",
    description:
      "Trusted and compassionate pet care services for dogs, cats, and more",
    icon: TreePine,
    bgColor: "bg-[#FDF2F8]",
  },
];

const Service = () => {
  return (
    <CommonWrapper>
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <LandingTitle className="mb-2">
              Popular Service category
            </LandingTitle>
            <MediumHeader className="!text-[#334155]">
              Explore Services in Your Neighborhood
            </MediumHeader>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              return (
                <div>
                  <div
                    key={index}
                    className={`${category.bgColor} rounded-2xl p-6 h-full flex flex-col`}
                  >
                    <div className={`w-12 h-12  mb-6`}>
                      <img src={category.icon} alt="" />
                    </div>

                    <MediumHeader className=" mb-10">
                      {category.title}
                    </MediumHeader>

                    <MediumHeader className="!text-lg !text-[#515355] font-medium">
                      {category.description}
                    </MediumHeader>
                  </div>
                  <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </CommonWrapper>
  );
};

export default Service;
