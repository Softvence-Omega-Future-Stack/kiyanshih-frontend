import CommonSpace from "@/common/space/CommonSpace";
import UserSectionHeader from "../reuseable/UserSectionHeader";
import CurveSearch from "@/components/service/CurveSearch";
import ButtonWithIcon from "@/common/button/ButtonWithIcon";
import { IoFilterSharp } from "react-icons/io5";

import f1 from "@/assets/images/f1.png";
import f3 from "@/assets/images/f3.png";
import f4 from "@/assets/images/f4.png";
import f5 from "@/assets/images/f5.png";
import FeaturedCard from "@/components/service/FeaturedCard";
import Pagination from "@/common/custom/Pagination";
const services = [
  {
    category: "Carpentry & Woodwork",
    provider: "Mike Handyman service",
    location: "Toronto, Canada",
    rating: 4.8,
    reviews: 170,
    price: 450.0,
    image: f1,
  },

  {
    category: "Painting and Finishing",
    provider: "Mike Handyman service",
    location: "Toronto, Canada",
    rating: 4.8,
    reviews: 170,
    price: 450.0,
    image: f3,
  },
  {
    category: "Installations",
    provider: "Mike Handyman service",
    location: "Toronto, Canada",
    rating: 3.8,
    reviews: 170,
    price: 450.0,
    image: f4,
  },
  {
    category: "Education & Training",
    provider: "Mike Gym Trainer service",
    location: "Toronto, Canada",
    rating: 4.8,
    reviews: 170,
    price: 450.0,
    image: f5,
  },
];
const PopularServices = () => {
  return (
    <>
      <CommonSpace>
        <div className="w-full ">
          <UserSectionHeader
            className="!w-full"
            title="Browse Services"
            subtitle="Browse verified providers in your area. Free for clients, transparent pricing, and reviews from real customers."
            button="Post a Job"
            buttonLink="/user-dashboard/job-postings"
          />
        </div>
        <div className="w-full max-w-lg flex items-center gap-5">
          <CurveSearch className="w-full " border="!border-border" />
          <ButtonWithIcon
            icon={IoFilterSharp}
            className=" !bg-white !text-[#0F172A] border border-border !py-4 !px-6"
          >
            Filter
          </ButtonWithIcon>
        </div>
      </CommonSpace>
      <div>
        <UserSectionHeader title="Popular Services " text="See All" />

        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 ">
          {services.map((service, index) => (
            <FeaturedCard key={index} feature={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularServices;
