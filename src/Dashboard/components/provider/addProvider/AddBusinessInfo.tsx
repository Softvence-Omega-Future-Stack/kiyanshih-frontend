import CommonSpace from "@/common/space/CommonSpace";
import SubHeader from "@/Dashboard/common/SubHeader";
import upload from "@/assets/images/miniUpload.svg";
const AddBusinessInfo = () => {
  const inputClass = {
    input:
      "w-full bg-white rounded-md p-3 text-black font-Geist text-base leading-[24px] border border-[#666666]/35  outline-none transition",
    label:
      "text-sm lg:text-base text-[#666]  font-Geist leading-[24px] block mb-2",
  };
  return (
    <CommonSpace>
      <div className="p-6 bg-white rounded-[20px]  max-w-2xl">
        {/* Header */}
        <SubHeader className="!text-[#4153B3] mb-3">
          Business Information
        </SubHeader>

        {/* Identity Type */}
        <div className=" pb-6">
          <input
            type="text"
            placeholder="Select Identity Type"
            className={inputClass.input}
          />
        </div>

        {/* Identity Number */}
        <div className="">
          <input
            type="text"
            placeholder="Identity Number"
            className={inputClass.input}
          />
        </div>

        {/* Identification Image */}
        <div className="  w-full sm:w-[70%] pt-8">
          <SubHeader className="!text-[#18181A] mb-2">
            Identification Image
          </SubHeader>

          <div className="border border-border rounded-lg p-4 flex items-center space-x-5 bg-gray-50">
            {/* Image placeholder */}
            <div className="w-20 h-20 flex items-center justify-center  rounded bg-gray-100 text-gray-400">
              <img src={upload} alt="" />
            </div>

            {/* File Upload */}
            <div>
              <SubHeader className="!text-sm !text-black mb-2">
                Please upload square image, size less than 100KB
              </SubHeader>
              <label className="flex items-center space-x-2 cursor-pointer">
                <span className="px-4 py-2 bg-gray-100 border rounded-lg text-gray-700 hover:bg-gray-200">
                  Choose File
                </span>
                <span className="text-sm text-gray-500">No File Chosen</span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </CommonSpace>
  );
};

export default AddBusinessInfo;
