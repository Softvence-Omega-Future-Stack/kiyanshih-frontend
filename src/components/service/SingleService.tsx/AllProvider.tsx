import BigTitle from "@/common/header/BigTitle";
import f1 from "@/assets/images/f1.png";
import f2 from "@/assets/images/f2.png";
import f3 from "@/assets/images/f3.png";
import f4 from "@/assets/images/f4.png";
import f5 from "@/assets/images/f5.png";
import FeaturedCard from "../FeaturedCard";
import Pagination from "@/common/custom/Pagination";
import ButtonWithIcon from "@/common/button/ButtonWithIcon";
import { IoFilterSharp } from "react-icons/io5";
import CommonDropdown from "@/common/custom/CommonDropdown";
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
  {
    category: "Cleaning",
    provider: "Sparkle Home Services",
    location: "Halifax, Canada",
    rating: 4.9,
    reviews: 220,
    price: 250.0,
    image: f1,
  },
  {
    category: "Moving",
    provider: "SafeMove Relocation",
    location: "Quebec City, Canada",
    rating: 4.3,
    reviews: 180,
    price: 700.0,
    image: f2,
  },
  {
    category: "Automotive Repair",
    provider: "AutoFix Garage",
    location: "Toronto, Canada",
    rating: 4.4,
    reviews: 140,
    price: 550.0,
    image: f3,
  },
  {
    category: "Landscaping",
    provider: "GreenScape Landscaping",
    location: "Calgary, Canada",
    rating: 4.6,
    reviews: 130,
    price: 480.0,
    image: f4,
  },
  {
    category: "IT & Tech Support",
    provider: "TechSavvy Solutions",
    location: "Vancouver, Canada",
    rating: 5.0,
    reviews: 210,
    price: 500.0,
    image: f5,
  },
  {
    category: "Photography",
    provider: "Lens Masters",
    location: "Toronto, Canada",
    rating: 4.9,
    reviews: 190,
    price: 650.0,
    image: f3,
  },
  {
    category: "Catering",
    provider: "Tasty Events Catering",
    location: "Ottawa, Canada",
    rating: 4.7,
    reviews: 175,
    price: 900.0,
    image: f5,
  },
  {
    category: "Event Management",
    provider: "Elite Event Planners",
    location: "Montreal, Canada",
    rating: 4.8,
    reviews: 200,
    price: 1200.0,
    image: f4,
  },
  {
    category: "Fitness Training",
    provider: "FitLife Trainers",
    location: "Winnipeg, Canada",
    rating: 4.9,
    reviews: 160,
    price: 350.0,
    image: f1,
  },
  {
    category: "Beauty & Spa",
    provider: "Glow Beauty Spa",
    location: "Toronto, Canada",
    rating: 4.8,
    reviews: 180,
    price: 220.0,
    image: f2,
  },
  {
    category: "Pet Care",
    provider: "Happy Paws Pet Services",
    location: "Calgary, Canada",
    rating: 4.7,
    reviews: 210,
    price: 300.0,
    image: f3,
  },
  {
    category: "Home Appliance Repair",
    provider: "Appliance Doctors",
    location: "Edmonton, Canada",
    rating: 4.5,
    reviews: 190,
    price: 400.0,
    image: f4,
  },
];

const dropdownItems = [
  {
    label: "All Categories",
    onClick: () => console.log("All Categories clicked"),
  },
  {
    label: "Renovation",
    onClick: () => console.log("Renovation clicked"),
  },
  {
    label: "Carpentry",
    onClick: () => console.log("Carpentry clicked"),
  },
  {
    label: "Roofing",
    onClick: () => console.log("Roofing clicked"),
  },
  {
    label: "Fencing",
    onClick: () => console.log("Fencing clicked"),
  },
  {
    label: "Interior",
    onClick: () => console.log("Interior clicked"),
  },
];
const AllProvider = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <BigTitle className="!text-[#000] !text-lg">All Providers</BigTitle>

        <CommonDropdown
          items={dropdownItems}
          trigger={
            <ButtonWithIcon
              icon={IoFilterSharp}
              className="bg-[#18181B] text-white"
            >
              Filter
            </ButtonWithIcon>
          }
        />
      </div>

      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6  pt-6 pb-10 sm:pb-20">
        {services.map((service, index) => (
          <FeaturedCard key={index} feature={service} />
        ))}
      </div>
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
    </div>
  );
};

export default AllProvider;
