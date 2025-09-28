import CommonHeader from "@/common/header/CommonHeader";
import d1 from "@/assets/images/dash1.svg";
import d2 from "@/assets/images/dash2.svg";
import d3 from "@/assets/images/dash3.svg";
import d4 from "@/assets/images/dash4.svg";
import CurveCard from "@/Dashboard/common/CurveCard";
const analyticsData = [
  {
    title: "Total earning",
    value: "80,190.15$",
    icon: d1,
    opacity: "opacity-20",
    bgColor: "!bg-[#ECFEFF]",
    curveColor: "bg-[#A5F3FC]",
    textColor: "text-[#0891B2]",
  },
  {
    title: "Total subscription",
    value: "25",
    icon: d4,
    opacity: "opacity-100",
    bgColor: "!bg-[#F0FDF4]",
    curveColor: "bg-[#DCFCE7]",
    textColor: "text-[#14532D]",
  },

  {
    title: "Total Provider",
    value: "3",
    icon: d3,
    opacity: "opacity-5",
    bgColor: "!bg-[#FFF7ED]",
    curveColor: "!bg-[#FDBA74]",
    textColor: "text-[#EA580C]",
  },
  {
    title: "Total booking served",
    value: "33",
    icon: d2,
    opacity: "opacity-5",
    bgColor: "!bg-[#FDF2F8]",
    curveColor: "bg-[#F9A8D4]",
    textColor: "!text-[#9D174D]",
  },
];

const DashboardCardSection = () => {
  return (
    <div className="bg-white p-5 rounded-[10px] border border-border">
      <CommonHeader className="pb-3">Business Analytics</CommonHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {analyticsData.map((item, index) => (
          <CurveCard
            key={index}
            {...item}
            value={item.value}
            title={item.title}
            icon={item.icon}
            bgColor={item.bgColor}
            textColor={item.textColor}
            curveColor={item.curveColor}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardCardSection;
