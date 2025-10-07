import { IoSearchOutline } from "react-icons/io5";

const DashboardSearch = ({ className }: { className?: string }) => {
  return (
    <div>
      <div
        className={`w-full sm:w-[451px] mx-auto px-4 font-Geist ${className}`}
      >
        <div className="flex items-center w-full h-12 px-3 gap-3 border border-[#93C5FD] rounded-full bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow outline-none bg-transparent text-gray-700 placeholder-slate-400"
          />
          <button className="w-8 h-8 flex items-center justify-center bg-blue text-white rounded-full transition-colors duration-200">
            <IoSearchOutline size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSearch;
