import CommonHeader from "@/common/header/CommonHeader";
import LargeTitle from "@/common/header/LargeTitle";
import CommonWrapper from "@/common/space/CommonWrapper";
import SubHeader from "@/Dashboard/common/SubHeader";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { Link } from "react-router-dom";
import PersonalForm from "./PersonalForm";

export default function ClipPathSection() {
  return (
    <div className="relative mt-50">
      {/* SVG mask */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="sectionClip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 Q0.5,0.4 0.8,0.4 L1,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <section
        className="relative text-white py-30 overflow-hidden"
        style={{
          clipPath: "url(#sectionClip)",
          WebkitClipPath: "url(#sectionClip)",
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full -z-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <rect width="100%" height="100%" fill="#3B82F6" />
        </svg>

        <CommonWrapper>
          <div className="relative py-20">
            <LargeTitle className="!text-5xl font-bold !leading-[72px] !text-white">
              Give us a call for more <br /> information
            </LargeTitle>
            <CommonHeader className="my-4 !text-white max-w-xl">
              Register now and take advantage of our services — connect with
              trusted providers and make daily life easier
            </CommonHeader>
            <div className="flex gap-6">
              <Link
                to="/"
                className=" text-[#0A142F] text-2xl bg-white p-3 rounded-full"
              >
                <RiFacebookFill />
              </Link>
              <Link
                to="/"
                className=" text-[#0A142F] text-2xl bg-white p-3 rounded-full"
              >
                <FaInstagramSquare />
              </Link>
              <Link
                to="/"
                className=" text-[#0A142F] text-2xl bg-white p-3 rounded-full"
              >
                <IoLogoTwitter />
              </Link>
            </div>
          </div>
        </CommonWrapper>

        <SubHeader className="!bg-black !text-white absolute bottom-0 w-full py-3 text-center">
          © 2025 Fixlist. All rights reserved. For inquiries, contact us at +255
          88520.
        </SubHeader>
      </section>

      <div className="min-w-[560px] absolute top-20 right-40">
        <PersonalForm />
      </div>
    </div>
  );
}
