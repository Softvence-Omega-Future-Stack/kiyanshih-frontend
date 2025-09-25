import CommonWrapper from "@/common/space/CommonWrapper";
import hero from "@/assets/images/navHero2.png";
import CommonButton from "@/common/button/CommonButton";
import BigTitle from "@/common/header/BigTitle";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-[#93C5FD]">
      <div className="absolute inset-0 bg-black/10"></div>

      <CommonWrapper>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-24">
          {/* Left Content */}
          <div className="w-full lg:max-w-[555px] text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight md:leading-[72px] font-Bricolage">
              Find the Right Expert, Right Away
            </h1>

            <BigTitle className="!text-base sm:!text-lg md:!text-xl !text-[#1E293B] mt-4">
              Hire skilled professionals for cleaning, repairs, and home
              improvement — all trusted providers near you.
            </BigTitle>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-6 sm:mt-8">
              <CommonButton className="!bg-blue !text-white !border-0 w-full sm:w-auto">
                <Link to="/service">Browse Service</Link>
              </CommonButton>
              <CommonButton className="!bg-transparent !border-2 border-white !text-white w-full sm:w-auto">
                <Link to="/provider-signup">Become a Provider</Link>
              </CommonButton>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
            <img
              src={hero}
              alt="Professional service"
              className="w-full max-w-lg sm:max-w-xl md:max-w-2xl h-auto object-contain"
            />
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Hero;
