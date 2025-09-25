import CommonWrapper from "@/common/space/CommonWrapper";
import img from "../assets/images/login.png";
import logo from "../assets/images/logo.png";
import LargeTitle from "@/common/header/LargeTitle";
import CommonHeader from "@/common/header/CommonHeader";
import { LuUserRound } from "react-icons/lu";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";
import CommonButton from "@/common/button/CommonButton";
import { Link } from "react-router-dom";

const ClientSignUp = () => {
  const inputClass = {
    input:
      "w-full bg-[#EFF6FF]/40 rounded-md p-3 text-black font-Geist text-base leading-[24px] border border-[#EFF6FF] outline-none transition bg-[#EFF6FF]/40",
    label:
      "text-sm lg:text-base text-[#2D2D2D] font-medium font-Geist leading-[28px] block mb-2",
  };

  return (
    <CommonWrapper>
      <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center bg-white w-full gap-10 lg:gap-20 py-6">
        {/* Left Section */}
        <div className="w-full flex flex-col gap-5 lg:w-1/2">
          <div className="flex justify-start">
            <img src={logo} alt="Logo" className="h-10 sm:h-12 md:h-14" />
          </div>

          <div className="w-full flex justify-center lg:justify-start">
            <img
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full object-contain"
              src={img}
              alt="Illustration"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <LargeTitle className="mb-6 ">Client Registration</LargeTitle>

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

            {/* Submit Button */}
            <div className="pt-6">
              <CommonButton
                type="submit"
                className="mb-5 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Sign Up
              </CommonButton>

              <CommonHeader className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Sign In
                </Link>
              </CommonHeader>
            </div>
          </form>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default ClientSignUp;
