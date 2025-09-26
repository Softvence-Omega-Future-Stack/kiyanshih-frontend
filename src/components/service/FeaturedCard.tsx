import type { FC } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import RenderStars from "./RenderStars";
import CommonButton from "@/common/button/CommonButton";
import CommonHeader from "@/common/header/CommonHeader";
import Paragraph from "@/common/header/Paragraph";

interface FeatureList {
  category: string;
  provider: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
}
interface FeaturedCardProps {
  feature: FeatureList;
}

const FeaturedCard: FC<FeaturedCardProps> = ({ feature }) => {
  return (
    <div className="p-5 border border-border rounded-[20px]">
      <div className="rounded-lg max-h-[120px] overflow-hidden mb-4">
        <img
          src={feature.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" space-y-2">
        <div>
          <CommonHeader className=" !text-lg !leading-[28px]">
            {feature.category}
          </CommonHeader>
        </div>
        <div className="flex items-center gap-1">
          <span className=" text-[#1D4ED8]">
            <HiOutlineLocationMarker />
          </span>
          <Paragraph className=" !text-black/81">{feature.location}</Paragraph>
        </div>
        <div className=" flex items-center gap-1">
          <RenderStars rating={feature.rating} />
          <p>{feature.rating} </p>
          <Paragraph className=" !text-[#475569]">
            ({feature.reviews} Reviews){" "}
          </Paragraph>
        </div>
      </div>
      <div className="py-4">
        <Paragraph className="!text-[#475569]">Start From </Paragraph>
        <CommonHeader className="!text-[#1D4ED8]">
          {feature.price}.0$
        </CommonHeader>
      </div>
      <div className="flex items-center gap-3">
        <CommonButton className="!px-4 !py-2 bg-[#1D4ED8] !text-white">
          Book Now{" "}
        </CommonButton>
        <CommonButton>View Details </CommonButton>
      </div>
    </div>
  );
};

export default FeaturedCard;
