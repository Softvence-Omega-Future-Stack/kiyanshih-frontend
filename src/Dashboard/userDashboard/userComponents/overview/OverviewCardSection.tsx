import DashboardCard from "./DashboardCard";
import image1 from "@/assets/frame/dollar-sign.svg";
import image2 from "@/assets/frame/greenBag.svg";
import image3 from "@/assets/icon/briefcase-business.svg";
import image4 from "@/assets/frame/blue.svg";
const metrics = [
  {
    title: "Total Spend",
    value: "$2,000",
    color: "bg-[#FFF7ED]",
    image: image1,
  },
  {
    title: "Active Jobs",
    value: "03",
    color: "bg-[#FEFCE8]",
    image: image3,
  },
  {
    title: "Total Bookings",
    value: "05",
    color: "bg-[#F0FDF4]",
    image: image2,
  },
  {
    title: "Proposals Received",
    value: "05",
    color: "bg-[#CFFAFE]",
    image: image4,
  },
];
const OverviewCardSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
        <DashboardCard metrics={metrics} />
      </div>
    </>
  );
};

export default OverviewCardSection;
