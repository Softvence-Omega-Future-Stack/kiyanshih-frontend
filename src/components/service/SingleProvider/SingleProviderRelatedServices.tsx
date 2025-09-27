import f1 from "@/assets/images/f1.png";
import f2 from "@/assets/images/f2.png";
import f3 from "@/assets/images/f3.png";
import f4 from "@/assets/images/f4.png";
import f5 from "@/assets/images/f5.png";
import FeaturedCard from "../FeaturedCard";
import SectionHeader from "@/common/header/SectionHeader";
import Pagination from "@/common/custom/Pagination";
const services = [
  {
    category: "Carpentry & Woodwork",
    provider: "Mike Handyman Service",
    location: "Toronto, Canada",
    rating: 4.8,
    reviews: 170,
    price: 450.0,
    image: f1,
  },
  {
    category: "Maintenance",
    provider: "FixIt Maintenance Crew",
    location: "Vancouver, Canada",
    rating: 5.0,
    reviews: 200,
    price: 500.0,
    image: f2,
  },
  {
    category: "Painting & Finishing",
    provider: "Pro Painters Inc.",
    location: "Montreal, Canada",
    rating: 4.8,
    reviews: 145,
    price: 400.0,
    image: f3,
  },
  {
    category: "Installations",
    provider: "QuickFix Installations",
    location: "Calgary, Canada",
    rating: 3.8,
    reviews: 120,
    price: 380.0,
    image: f4,
  },
  {
    category: "Education & Training",
    provider: "Mike Gym Trainer",
    location: "Toronto, Canada",
    rating: 4.8,
    reviews: 170,
    price: 450.0,
    image: f5,
  },
  {
    category: "Plumbing",
    provider: "FlowPro Plumbing",
    location: "Ottawa, Canada",
    rating: 4.6,
    reviews: 210,
    price: 300.0,
    image: f1,
  },
  {
    category: "Electrical",
    provider: "BrightSpark Electricians",
    location: "Winnipeg, Canada",
    rating: 4.7,
    reviews: 195,
    price: 350.0,
    image: f3,
  },
  {
    category: "Roofing",
    provider: "Skyline Roofers",
    location: "Edmonton, Canada",
    rating: 4.5,
    reviews: 160,
    price: 600.0,
    image: f5,
  },
];
const SingleProviderRelatedServices = () => {
  return (
    <div>
      <SectionHeader className=" !text-start" title="Related Services" />
      <div className=" w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-6 pb-20">
        {services.map((service, index) => (
          <FeaturedCard key={index} feature={service} />
        ))}
      </div>
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
    </div>
  );
};

export default SingleProviderRelatedServices;
