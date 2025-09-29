import ServiceCard from "./ServiceCard";
import m1 from "@/assets/icon/litter receptacle.svg";
import m2 from "@/assets/icon/pets on leash.svg";
import m3 from "@/assets/icon/rock collecting.svg";
import m4 from "@/assets/icon/tree-palm.svg";
import m5 from "@/assets/icon/car.svg";
import m6 from "@/assets/icon/laptop.svg";
import m7 from "@/assets/icon/services_trash_dumpster.svg";
import m8 from "@/assets/icon/stay_on_trail.svg";
import { Link } from "react-router-dom";
import { slugify } from "@/help/help";
import SectionHeader from "@/common/header/SectionHeader";

const services = [
  {
    title: "Handyman Service",
    services: [
      "Renovation, Remodelling & Flooring",
      "Carpentry & Woodwork",
      "Roofing & Siding",
      "Fencing & Gates",
      "Painting & Decorating",
    ],
    providers: "50 + Providers",
    image: m1,
  },
  {
    title: "Pet Care Service",
    services: [
      "Veterinary Services",
      "Grooming & Hygiene",
      "Dog Walking",
      "Pet Sitting",
      "Obedience Training",
    ],
    providers: "50 + Providers",
    image: m2,
  },
  {
    title: "Assembly Service",
    services: [
      "Flat-Pack Furniture",
      "Tables, Chairs & Desks",
      "Office Furniture",
      "Playground & Sports Equipment",
      "Garden Furniture & BBQs",
    ],
    providers: "50 + Providers",
    image: m3,
  },
  {
    title: "Yard & Garden Service",
    services: [
      "Mowing & Edging",
      "Planting & Landscaping",
      "Spring & Fall Cleanups",
      "Mulching & Soil Care",
      "Fertilizing & Seeding",
    ],
    providers: "50 + Providers",
    image: m4,
  },
  {
    title: "Automotive Service",
    services: [
      "Engine Diagnostics & Repair",
      "Transmission Repair",
      "Roofing & Siding",
      "Fencing & Gates",
      "Painting & Decorating",
    ],
    providers: "50 + Providers",
    image: m5,
  },
  {
    title: "Tech Service",
    services: [
      "Engine Diagnostics & Repair",
      "Transmission Repair",
      "Roofing & Siding",
      "Fencing & Gates",
      "Painting & Decorating",
    ],
    providers: "50 + Providers",
    image: m6,
  },
  {
    title: "Cleaning Service",
    services: [
      "Renovation, Remodelling & Flooring",
      "Carpentry & Woodwork",
      "Roofing & Siding",
      "Fencing & Gates",
      "Painting & Decorating",
    ],
    providers: "50 + Providers",
    image: m7,
  },
  {
    title: "Education & Training",
    services: [
      "Private Tutoring",
      "High School Services",
      "Gym Instructors",
      "Yoga & Meditation Coaches",
      "Nutrition & Diet Plans",
    ],
    providers: "50 + Providers",
    image: m8,
  },
];
const ServiceCardSection = () => {
  return (
    <>
      <SectionHeader
        className=" !text-start pb-10"
        title="Browse Service By category "
        subtitle="Explore Services in Your Neighborhood"
      />
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link to={`/service/${slugify(service.title)}`} key={index}>
            <ServiceCard service={service} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ServiceCardSection;
