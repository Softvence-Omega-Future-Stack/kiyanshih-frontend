import CommonSpace from "@/common/space/CommonSpace";
import RecentTransactions from "./RecentTransactions";
import EarningsChart from "./EarningsChart";

const EarningSection = () => {
  return (
    <CommonSpace>
      <div className=" w-full flex items-stretch  gap-7.5">
        <EarningsChart />
        <div className=" w-[440px]">
          <RecentTransactions />
        </div>
      </div>
    </CommonSpace>
  );
};

export default EarningSection;
