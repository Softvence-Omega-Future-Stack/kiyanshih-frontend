import CommonWrapper from "@/common/space/CommonWrapper";
import PaymentHistory from "../userComponents/paymentHistory/PaymentHistory";
import CurveSearch from "@/components/service/CurveSearch";
import ButtonWithIcon from "@/common/button/ButtonWithIcon";
import { MdArrowDownward } from "react-icons/md";
import { RiCalendarTodoFill } from "react-icons/ri";
import CommonSpace from "@/common/space/CommonSpace";

const Payment = () => {
  return (
    <CommonWrapper>
      <CommonSpace>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5 w-full">
            <CurveSearch className=" !max-w-[600px]" />
            <ButtonWithIcon
              icon={RiCalendarTodoFill}
              className=" !bg-white !text-[#0F172A] border border-border !py-4 !px-6 "
            >
              Date Range
            </ButtonWithIcon>
          </div>
          <ButtonWithIcon
            className="w-[180px] !py-4 !px-6 "
            icon={MdArrowDownward}
          >
            Export in Exel
          </ButtonWithIcon>
        </div>
      </CommonSpace>
      <PaymentHistory />
    </CommonWrapper>
  );
};

export default Payment;
