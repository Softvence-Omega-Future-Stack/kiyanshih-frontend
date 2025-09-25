// src/components/Login.tsx
import React, { useState } from "react";
import img from "@/assets/images/singin.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import LargeTitle from "@/common/header/LargeTitle";
import CommonHeader from "@/common/header/CommonHeader";
import CommonButton from "@/common/button/CommonButton";
import { Link } from "react-router-dom";
import CommonWrapper from "@/common/space/CommonWrapper";
import line from "@/assets/images/line.svg";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, password });
  };

  const inputClass = {
    input:
      "w-full bg-white rounded-md p-3 text-black font-Geist text-base leading-[24px] border border-[#666666]/35 outline-none transition",
    label:
      "text-sm lg:text-base text-[#666] font-Geist leading-[24px] block mb-2",
  };

  return (
    <CommonWrapper>
      <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center bg-white w-full gap-10 lg:gap-20 ">
        {/* Left Illustration Section */}
        <div className="w-full flex justify-center lg:w-1/2">
          <img
            src={img}
            alt="Illustration"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full lg:max-h-[800px] object-contain"
          />
        </div>

        {/* Right Login Form */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md sm:max-w-lg relative">
            <LargeTitle className="text-[#333] mb-2 text-xl sm:text-2xl md:text-3xl text-center lg:text-left">
              Welcome back! Please Sign in <br className="hidden md:block" />
              to continue.
            </LargeTitle>

            <div className="absolute top-6 sm:top-10 right-6 sm:right-16 hidden sm:block">
              <img src={line} alt="decoration" />
            </div>

            <CommonHeader className="text-xs sm:text-sm md:text-base !text-black mb-6 text-center lg:text-left">
              Access your dashboard, manage services, and stay connected.
            </CommonHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <div>
                <label className={inputClass.label}>User name</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className={inputClass.input}
                />
              </div>

              {/* Password */}
              <div>
                <label className={inputClass.label}>Your password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className={inputClass.input}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg cursor-pointer"
                  >
                    {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <CommonButton
                type="submit"
                className="w-full sm:w-[178px] !px-8 !py-3.5 !bg-blue-600 !text-white mt-4"
              >
                Sign In
              </CommonButton>
            </form>

            <CommonHeader className="text-xs sm:text-sm md:text-base text-[#333] mt-4 text-center lg:text-left">
              Don’t have an account?
              <Link to="/client-signup" className="text-[#1D4ED8] pl-1">
                Sign Up
              </Link>
            </CommonHeader>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Login;
