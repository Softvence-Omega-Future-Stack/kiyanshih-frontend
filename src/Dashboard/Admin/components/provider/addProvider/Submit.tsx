import CommonButton from "@/common/button/CommonButton";

const Submit = () => {
  return (
    <div className="flex gap-4">
      <CommonButton className=" !bg-blue !px-8 !text-white w-[243px]">
        Submit
      </CommonButton>
      <CommonButton className="!px-8  w-[243px]">Reset</CommonButton>
    </div>
  );
};

export default Submit;
