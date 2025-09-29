import upload from "@/assets/images/upload.png";
import { MdEdit } from "react-icons/md";
import SubHeader from "@/Dashboard/Admin/common/SubHeader";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";
import CommonButton from "@/common/button/CommonButton";
import CommonSelect from "@/common/custom/CommonSelect";
import { useState, type ChangeEvent } from "react";

const inputClass = {
  input:
    "w-full bg-white rounded-md p-3 text-black font-Geist text-base leading-[24px] border border-[#666666]/35 outline-none transition",
  label:
    "text-sm lg:text-base text-[#666] font-Geist leading-[24px] block mb-2",
};

const areaOptions = [
  { label: "Area 1", value: "Area 1" },
  { label: "Area 2", value: "Area 2" },
  { label: "Area 3", value: "Area 3" },
] as const;

const CategoryForm = () => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<
    "Area 1" | "Area 2" | "Area 3" | ""
  >("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setLogoPreview(null);
    setSelectedArea("");
  };

  return (
    <CommonBorderWrapper className="border-0 !p-10">
      <div className="max-w-3xl space-y-5">
        {/* Category Name */}
        <div>
          <label className={inputClass.label}>Category Name (Default)</label>
          <input type="text" name="businessName" className={inputClass.input} />
        </div>

        {/* Area Select */}
        <div>
          <label className={inputClass.label}>Areas</label>
          <CommonSelect
            value={selectedArea}
            item={areaOptions}
            onValueChange={(val) => setSelectedArea(val)}
            w={250}
            className={inputClass.input}
          />
        </div>

        {/* Logo Upload */}
        <div className="max-w-[350px] flex flex-col items-center border border-dashed border-black/45 rounded-lg p-4 mt-10">
          <SubHeader className="font-medium pb-3 text-[#18181A]">
            Company Logo
          </SubHeader>
          <div className="relative w-16 h-16 border border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center">
            {logoPreview ? (
              <img
                src={logoPreview}
                alt="Logo Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <span className="text-gray-400">
                <img src={upload} alt="Upload placeholder" />
              </span>
            )}
            <label className="absolute -bottom-3 -right-2 bg-[#C1CBFF] p-1 rounded-full cursor-pointer">
              <span className="text-[#4153B3]">
                <MdEdit size={12} />
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <SubHeader className="!text-[12px] !text-[#5E6472] pt-4 text-center !font-normal !leading-[18px]">
            Image format - jpg, png, jpeg
            <br />
            Image Size - maximum 2 MB
            <br />
            Image Ratio - 1:1
          </SubHeader>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-8">
          <CommonButton className="!bg-blue !px-8 !text-white w-[243px]">
            Submit
          </CommonButton>
          <CommonButton
            className="!px-8 w-[243px]"
            type="button"
            onClick={handleReset}
          >
            Reset
          </CommonButton>
        </div>
      </div>
    </CommonBorderWrapper>
  );
};

export default CategoryForm;
