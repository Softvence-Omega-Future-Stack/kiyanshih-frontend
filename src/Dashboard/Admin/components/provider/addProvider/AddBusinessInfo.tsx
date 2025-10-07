import React, { useState } from "react";
import CommonSpace from "@/common/space/CommonSpace";
import SubHeader from "@/Dashboard/Admin/common/SubHeader";
import upload from "@/assets/images/miniUpload.svg";

const AddBusinessInfo = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        alert("Only JPG, JPEG, PNG files are allowed");
        return;
      }

      // Validate file size (< 100KB)
      const maxSize = 100 * 1024; // 100KB
      if (file.size > maxSize) {
        alert("File size exceeds 100KB");
        return;
      }

      // Revoke previous preview
      if (preview) URL.revokeObjectURL(preview);

      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

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
        <div className="w-full sm:w-[70%] pt-8">
          <SubHeader className="!text-[#18181A] mb-2">
            Identification Image
          </SubHeader>

          <div className="border border-border rounded-lg p-4 flex items-center space-x-5 bg-gray-50">
            {/* Image placeholder / preview */}
            <div className="w-20 h-20 flex items-center justify-center rounded bg-gray-100 text-gray-400 overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img src={upload} alt="Upload" />
              )}
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
                <span className="text-sm text-gray-500">
                  {selectedFile ? selectedFile.name : "No File Chosen"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </CommonSpace>
  );
};

export default AddBusinessInfo;
