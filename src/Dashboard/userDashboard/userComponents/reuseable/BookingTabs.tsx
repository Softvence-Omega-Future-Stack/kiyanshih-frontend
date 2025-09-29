
interface TablistProps<T extends string> {
  title?: string; // optional heading above tabs
  tabs: T[]; // list of tab labels
  activeTab: T;
  setTab: (tab: T) => void;
  counts?: Partial<Record<T, number>>; // optional counts for each tab
}

const BookingTabs = <T extends string>({
  title,
  tabs,
  activeTab,
  setTab,
  counts,
}: TablistProps<T>) => {
  return (
    <div className="w-full">
      {title && (
        <h4 className="text-sm md:text-lg font-medium mb-3">{title}</h4>
      )}
      <div className="flex gap-4 pb-[20px] flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`relative px-4 py-2 mb-2 rounded cursor-pointer transition-colors
              ${
                activeTab === tab
                  ? "bg-[#E2E8F0] font-medium"
                  : "text-gray-800 hover:bg-gray-100"
              }
            `}
            onClick={() => setTab(tab)}
          >
            {tab}
            {counts && counts[tab] !== undefined && (
              <span className="ml-1">
                ({counts[tab]!.toString().padStart(2, "0")})
              </span>
            )}
            {activeTab === tab && (
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#007BFF] rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookingTabs;
