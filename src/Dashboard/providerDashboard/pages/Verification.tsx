import CommonHeader from "@/common/header/CommonHeader";
import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck, Star, Zap } from "lucide-react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Verification() {
  return (
    <div className=" py-6">
      <div className="mb-5">
        <h2 className="flex items-center gap-3 text-2xl text-slate-700 font-semibold mb-1">
          <ShieldCheck className="text-green-800" />
          Get Verified by Certn
        </h2>
        <p className="text-lg text-slate-700">
          Boost your credibility and earnings with professional background
          verification
        </p>
      </div>

      <div className="border border-slate-300 rounded-[12px] p-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between pb-10 border-b border-dotted border-[#1A1A1A2E]">
          <div className="max-w-[330px]">
            <div className=" flex items-center gap-3 mb-3">
              <Star className="text-yellow-500 w-6 h-6" />{" "}
              <h3 className="text-lg text-slate-900 font-semibold">
                Increased Trust
              </h3>
            </div>
            <p className="text-[#1A1A1AB2]">
              Verified providers get 3x more bookings on average
            </p>
          </div>
          <div className="max-w-[330px]">
            <div className=" flex items-center gap-3 mb-3">
              <Zap className="text-green-700 w-6 h-6" />{" "}
              <h3 className="text-lg text-slate-900 font-semibold">
                Priority Placement
              </h3>
            </div>
            <p className="text-[#1A1A1AB2]">
              Appear higher in search results and get featured placement
            </p>
          </div>
          <div className="max-w-[330px]">
            <div className=" flex items-center gap-3 mb-3">
              <Shield className="text-pink-700 w-6 h-6" />{" "}
              <h3 className="text-lg text-slate-900 font-semibold">
                Professional Credibility
              </h3>
            </div>
            <p className="text-[#1A1A1AB2]">
              verified badge builds instant client confidence
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold my-4">Verification Process</h2>
          <div className="space-y-3">
            <div className="flex gap-2.5 items-center ">
              <FaCheck className="text-[#149041]" />
              <CommonHeader className="!text-[#1A1A1A]">
                Criminal background check
              </CommonHeader>
            </div>
            <div className="flex gap-2.5 items-center ">
              <FaCheck className="text-[#149041]" />
              <CommonHeader className="!text-[#1A1A1A]">
                Address confirmation
              </CommonHeader>
            </div>
            <div className="flex gap-2.5 items-center ">
              <FaCheck className="text-[#149041]" />
              <CommonHeader className="!text-[#1A1A1A]">
                Professional references
              </CommonHeader>
            </div>
            <div className="flex gap-2.5 items-center ">
              <FaCheck className="text-[#149041]" />
              <CommonHeader className="!text-[#1A1A1A]">
                Identity verification
              </CommonHeader>
            </div>
            <div className="flex gap-2.5 items-center ">
              <FaCheck className="text-[#149041]" />
              <CommonHeader className="!text-[#1A1A1A]">
                Employment history review
              </CommonHeader>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-slate-300 p-5 rounded mt-12 mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-3">
            <div>
              <p className="text-lg text-zinc-950 font-semibold">
                Professional Verification
              </p>
              <p className="text-sm text-slate-700 mt-1">
                Powered by Certn - Canada's leading background check provider
              </p>
            </div>
            <div>
              <p className="text-3xl text-[#1A1A1A] font-semibold">$69</p>
              <p className="text-sm text-slate-700 mt-1">One-time fee</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-start gap-3 w-full">
          {/* Start With Verification */}
          <Button
            asChild
            className="bg-blue-700 text-white flex-1 cursor-pointer"
          >
            <Link to="/provider-dashboard/verification-information">
              Start With Verification Process
            </Link>
          </Button>

          {/* Maybe Later */}
          <Button
            asChild
            variant="outline"
            className="border border-slate-300 cursor-pointer"
          >
            <Link to="">Maybe Later</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
