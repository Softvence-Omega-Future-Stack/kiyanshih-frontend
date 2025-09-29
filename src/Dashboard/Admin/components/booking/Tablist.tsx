import SubHeader from "@/Dashboard/Admin/common/SubHeader";

interface TablistProps<T extends string> {
  setTab: (tab: T) => void;
  activeTab: T;
  counts?: Record<T, number>;
  tabs: T[];
}

const Tablist = <T extends string>({
  setTab,
  activeTab,
  counts,
  tabs,
}: TablistProps<T>) => {
  return (
    <div className="flex gap-4 pb-[34px]">
      {tabs.map((status) => (
        <SubHeader
          key={status}
          className={`relative px-4 py-2 mb-2 rounded cursor-pointer transition-colors
            ${
              activeTab === status
                ? " bg-[#E2E8F0] font-medium"
                : "text-gray-800"
            }
          `}
          onClick={() => setTab(status)}
        >
          {status}
          {counts && counts[status] !== undefined && (
            <span className="ml-1">
              ({counts[status].toString().padStart(2, "0")})
            </span>
          )}
          {activeTab === status && (
            <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#007BFF] rounded-full" />
          )}
        </SubHeader>
      ))}
    </div>
  );
};

export default Tablist;
