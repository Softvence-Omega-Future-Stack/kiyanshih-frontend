import w1 from "@/assets/images/w1.png";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import CommonHeader from "@/common/header/CommonHeader";
import Paragraph from "@/common/header/Paragraph";
import RenderStars from "../RenderStars";
import BigTitle from "@/common/header/BigTitle";
import { IoIosCheckmarkCircle } from "react-icons/io";
import calender from "@/assets/images/clock.svg";
import CommonButton from "@/common/button/CommonButton";
const SingleProviderInformation = () => {
  const { state } = useLocation();

  const features = [
    "Custom tables, chairs, wardrobes, shelves",
    "Modular kitchen cabinets & storage units",
    "Fixing broken chairs, tables, and beds",
  ];
  return (
    <div>
      <div className=" text-white flex justify-center items-start  gap-8">
        <div className="flex-1 ">
          <div className=" flex w-full justify-between">
            <div className="flex items-center gap-4">
              <img
                src={state.image || w1}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <CommonHeader className=" !text-lg !leading-[28px]">
                  {state.category}
                </CommonHeader>

                <CommonHeader className="!text-lg !font-normal !leading-[28px] text-[#2E4A61]">
                  Service Provider
                </CommonHeader>
                <div className="flex items-center gap-1">
                  <span className=" text-[#1D4ED8]">
                    <HiOutlineLocationMarker />
                  </span>
                  <Paragraph className=" !text-black/81">
                    {state.location}
                  </Paragraph>
                </div>
              </div>
            </div>

            <div className=" flex items-center gap-1">
              <RenderStars rating={state.rating} />
              <p>{state.rating} </p>
              <Paragraph className=" !text-[#475569]">
                ({state.reviews} Reviews)
              </Paragraph>
            </div>
            <div className=" flex items-center gap-1">
              <span className=" text-[#FFC100] text-xl">
                <RiVerifiedBadgeLine />
              </span>
              <Paragraph className=" !text-[#000]">Verified</Paragraph>
            </div>
          </div>

          <hr className="my-4.5 border border-[#F5E4DF]" />
          {/* Service Details */}
          <BigTitle className="text-[#212529] !text-2xl pb-5 mt-10">
            Service Details
          </BigTitle>
          <CommonHeader className="!text-lg !font-normal !leading-[28px] text-[#2E4A61]">
            Get professional carpentry and woodwork solutions for your home,
            office, or business. From custom furniture design and installation
            to repairing doors, windows, and wooden fixtures, our skilled
            carpenters deliver quality craftsmanship with attention to detail.
            Whether you need a new wardrobe, polished cabinets, or furniture
            restoration, we provide durable and tailored solutions that fit your
            space and style.
          </CommonHeader>

          <BigTitle className="text-[#212529] !text-xl mt-6">
            What You will Get:
          </BigTitle>
          <CommonHeader className="!text-lg !font-normal !leading-[28px] text-[#2E4A61] pt-2">
            {state.category}
          </CommonHeader>

          <div className="space-y-2 mt-5">
            {features.map((text, index) => (
              <CommonHeader
                key={index}
                className="!text-lg !font-normal !leading-[28px] text-[#032642] flex items-center gap-2"
              >
                <IoIosCheckmarkCircle className="text-[#FACC15]" />
                {text}
              </CommonHeader>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="w-[464px] bg-white border border-border rounded-[20px] p-6">
          <div className="flex justify-between items-start">
            <CommonHeader className=" !text-lg !leading-[28px]">
              {state.category}
            </CommonHeader>
            <div className="flex items-center gap-1">
              <Paragraph className="!text-[#475569]">Start From </Paragraph>
              <CommonHeader className="!text-[#1D4ED8]">
                {state.price}.0$
              </CommonHeader>
            </div>
          </div>

          {/* Duration */}
          <div className=" py-2 ">
            <Paragraph className="!text-[#212529] !font-medium">
              Duration
            </Paragraph>

            <div className="flex items-center gap-2 pt-2">
              <img src={calender} alt="" />
              <Paragraph className="!text-[#212529] !font-sans !text-lg">
                1 Days
              </Paragraph>
            </div>
          </div>

          {/* Skills */}
          <Paragraph className="!font-medium !text-[#212529] mt-6">
            Skills and Services
          </Paragraph>
          <div className="flex flex-wrap gap-2 mt-6">
            {["Handyman", "Gardening", "Renovation"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm border border-border rounded-lg text-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-3">
            <CommonButton className="w-full ">Message</CommonButton>
            <CommonButton className="w-full !bg-[#1D4ED8] !text-white">
              Book Service
            </CommonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProviderInformation;
