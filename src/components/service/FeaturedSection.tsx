import FeaturedCard from "./FeaturedCard";
import CommonSpace from "@/common/space/CommonSpace";
import f1 from "@/assets/images/f1.png";
import f2 from "@/assets/images/f2.png";
import f3 from "@/assets/images/f3.png";
import f4 from "@/assets/images/f4.png";
import f5 from "@/assets/images/f5.png";
import SectionHeader from "@/common/header/SectionHeader";
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
    category: "Maintenance",
    provider: "Mike Handyman service",
    location: "Toronto, Canada",
    rating: 5,
    reviews: 170,
    price: 450.0,
    image: f2,
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
const FeaturedSection = () => {
  return (
    <CommonSpace className="">
      <div className="max-w-3xl  ">
        <SectionHeader
          className=" !text-start"
          title="Featured Provider"
          subtitle="Explore Services in Your Neighborhood"
        />
      </div>

      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 pt-6">
        {services.map((service, index) => (
          <FeaturedCard key={index} feature={service} />
        ))}
      </div>
    </CommonSpace>
  );
};

export default FeaturedSection;
