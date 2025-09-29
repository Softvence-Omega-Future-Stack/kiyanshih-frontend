import CommonSpace from "@/common/space/CommonSpace";
import RecentTransactions from "./RecentTransactions";
import EarningsChart from "./EarningsChart";

const EarningSection = () => {
  return (
    <CommonSpace>
      <div className=" w-full flex flex-col lg:flex-row items-stretch  gap-7.5">
        <div className="w-full">
          <EarningsChart />
        </div>
        <div className="w-full xl:w-[440px]">
          <RecentTransactions />
        </div>
      </div>
    </CommonSpace>
  );
};

export default EarningSection;
