import React, { useState } from "react";
import upload from "@/assets/images/upload.png";
import { MdEdit } from "react-icons/md";
import SubHeader from "@/Dashboard/Admin/common/SubHeader";
import BigTitle from "@/common/header/BigTitle";
import { IoCheckmarkOutline } from "react-icons/io5";
import CommonSelect from "@/common/custom/CommonSelect";
const areaOptions = [
  { label: "Area 1", value: "Area 1" },
  { label: "Area 2", value: "Area 2" },
  { label: "Area 3", value: "Area 3" },
] as const;
interface BusinessFormData {
  businessName: string;
  userName: string;
  email: string;
  area: string;
  rates: string;
  logo?: File;
}

const AddProviderPersonal: React.FC = () => {
  const [formData, setFormData] = useState<BusinessFormData>({
    businessName: "",
    userName: "",
    email: "",
    area: "",
    rates: "",
  });
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<
    "Area 1" | "Area 2" | "Area 3" | ""
  >("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, logo: e.target.files[0] });
      setLogoPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputClass = {
    input:
      "w-full bg-white rounded-md p-3 text-black font-Geist text-base leading-[24px] border border-[#666666]/35  outline-none transition",
    label:
      "text-sm lg:text-base text-[#666]  font-Geist leading-[24px] block mb-2",
  };

  return (
    <form onSubmit={handleSubmit} className="p-12 bg-white rounded-[20px] ">
      <div className=" pb-6 flex gap-4">
        <div className="flex items-start gap-2">
          <span className="bg-blue h-7 w-7 flex items-center justify-center text-white rounded-full">
            <IoCheckmarkOutline />
          </span>
          <SubHeader className=" !text-[#5E6472] mb-4">Business info</SubHeader>
        </div>
        <div className="flex items-start gap-2">
          <span className="bg-blue h-7 w-7 flex items-center justify-center text-white rounded-full">
            2
          </span>

          <SubHeader className=" !text-[#5E6472]">Set Business Plan </SubHeader>
        </div>
      </div>
      <SubHeader className="!text-[#4153B3] mb-3">
        General Information
      </SubHeader>
      <div className="flex items-start gap-10">
        {/* Left Form */}
        <div className="w-full sm:w-2/3 space-y-4">
          <div>
            <label className={inputClass.label}>Business name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className={inputClass.input}
            />
          </div>
          <div>
            <label className={inputClass.label}>User name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className={inputClass.input}
            />
          </div>
          <div>
            <label className={inputClass.label}>Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass.input}
            />
          </div>
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
          <div>
            <label className={inputClass.label}>Rates</label>
            <input
              type="text"
              name="rates"
              value={formData.rates}
              onChange={handleChange}
              className={inputClass.input}
            />
          </div>
        </div>

        {/* Right Logo Upload */}
        <div className="w-full sm:w-1/3 flex flex-col items-center">
          <BigTitle className="font-medium  pb-3 text-[#18181A]">
            Company Logo
          </BigTitle>
          <div className="relative w-55 h-55 border border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center">
            {logoPreview ? (
              <img
                src={logoPreview}
                alt="Logo Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <span className="text-gray-400">
                <img src={upload} alt="" />
              </span>
            )}
            <label className="absolute -bottom-3 -right-2 bg-[#C1CBFF] text-white p-1 rounded-full cursor-pointer">
              <span className="text-[#4153B3]">
                <MdEdit size={24} />
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
              />
            </label>
          </div>
          <BigTitle className="!text-[20px] !text-[#5E6472] pt-4 text-center !font-normal">
            Image format - jpg, png, jpeg
            <br />
            Image Size - maximum 2 MB
            <br />
            Image Ratio - 1:1
          </BigTitle>
        </div>
      </div>
    </form>
  );
};

export default AddProviderPersonal;
