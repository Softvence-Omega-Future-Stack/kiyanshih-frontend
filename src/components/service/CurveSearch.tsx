import type { FC } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface CurveSearchProps {
  className?: string;
  border?: string;
}
const CurveSearch: FC<CurveSearchProps> = ({
  className,
  border = "border-[#2563EB]",
}) => {
  return (
    <div className={` ${className} w-full  `}>
      <div className="   font-Geist">
        <div
          className={`${border} flex items-center w-full h-13 gap-3 px-1 border  rounded-md bg-white}`}
        >
          <button className="w-12 h-12 relative flex items-center justify-center transition-colors duration-200">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 60 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.37263 6.80328e-05 1.90735e-05 5.37262 0 12V36C0 42.6274 5.37262 47.9999 12 48H36C42.6274 48 48 42.6274 48 36V32.3145L58.7998 26.0781C60.3998 25.1544 60.3998 22.8456 58.7998 21.9219L48 15.6865V12C48 5.37257 42.6274 0 36 0H12Z"
                fill="#1D4ED8"
              />
            </svg>

            <IoSearchOutline size={24} className="relative text-white z-10" />
          </button>
          <input
            type="text"
            placeholder="What Service Do you Need?"
            className="flex-grow outline-none bg-transparent text-gray-700 placeholder-slate-400"
          />
        </div>
      </div>
    </div>
  );
};

export default CurveSearch;
