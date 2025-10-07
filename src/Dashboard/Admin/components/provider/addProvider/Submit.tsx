import CommonButton from "@/common/button/CommonButton";

const Submit = () => {
  return (
    <div className="flex flex-col  sm:flex-row gap-4">
      <CommonButton className=" !bg-blue !px-8 !text-white sm:w-[243px]">
        Submit
      </CommonButton>
      <CommonButton className="!px-8  sm:w-[243px]">Reset</CommonButton>
    </div>
  );
};

export default Submit;
