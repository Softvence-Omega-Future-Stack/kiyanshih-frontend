import CommonHeader from "@/common/header/CommonHeader";
import { LuUserRound } from "react-icons/lu";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";

const PersonalInformation = () => {
  const inputClass = {
    input:
      "w-full bg-[#EFF6FF]/40 rounded-md p-3 text-black font-Geist text-base leading-[24px] border border-[#EFF6FF] outline-none transition bg-[#EFF6FF]/40",
    label:
      "text-sm lg:text-base text-[#2D2D2D] font-medium font-Geist leading-[28px] block mb-2",
  };

  return (
    <form className="space-y-6">
      <CommonBorderWrapper className="!p-6 sm:!p-8 md:!p-10">
        <div>
          <CommonHeader className="font-medium mb-6 flex items-center gap-2 !text-lg sm:!text-xl">
            <span>
              <LuUserRound />
            </span>
            Personal Information
          </CommonHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* First Name */}
            <div>
              <label className={inputClass.label}>First name</label>
              <input
                type="text"
                placeholder="First name"
                defaultValue="Sarah"
                className={inputClass.input}
              />
            </div>

            {/* Last Name */}
            <div>
              <label className={inputClass.label}>Last name</label>
              <input
                type="text"
                placeholder="Last name"
                defaultValue="Johnson"
                className={inputClass.input}
              />
            </div>

            {/* Phone */}
            <div>
              <label className={inputClass.label}>Phone</label>
              <input
                type="tel"
                placeholder="Phone"
                defaultValue="+1 (555) 123-4567"
                className={inputClass.input}
              />
            </div>

            {/* Email */}
            <div>
              <label className={inputClass.label}>Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                defaultValue="sarah.johnson@email.com"
                className={inputClass.input}
              />
            </div>

            {/* City */}
            <div>
              <label className={inputClass.label}>City</label>
              <input
                type="text"
                placeholder="City"
                defaultValue="Canada"
                className={inputClass.input}
              />
            </div>

            {/* Area */}
            <div>
              <label className={inputClass.label}>Area</label>
              <input
                type="text"
                placeholder="Area"
                defaultValue="Trento"
                className={inputClass.input}
              />
            </div>

            {/* Password */}
            <div>
              <label className={inputClass.label}>Password</label>
              <input
                type="password"
                placeholder="Password"
                className={inputClass.input}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className={inputClass.label}>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className={inputClass.input}
              />
            </div>
          </div>
        </div>
      </CommonBorderWrapper>
    </form>
  );
};

export default PersonalInformation;
