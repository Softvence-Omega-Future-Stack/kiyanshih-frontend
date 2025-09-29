import { useState, useMemo } from "react";
import CommonSelect from "@/common/custom/CommonSelect";
import CommonHeader from "@/common/header/CommonHeader";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// --- Fake datasets ---
const yearlyData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 110 },
  { month: "May", value: 65 },
  { month: "Jun", value: 105 },
  { month: "Jul", value: 75 },
  { month: "Aug", value: 110 },
  { month: "Sep", value: 95 },
  { month: "Oct", value: 130 },
  { month: "Nov", value: 120 },
  { month: "Dec", value: 150 },
];

const monthlyData = Array.from({ length: 30 }, (_, i) => ({
  day: `Day ${i + 1}`,
  value: Math.floor(Math.random() * 150),
}));

const weeklyData = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 55 },
  { day: "Wed", value: 35 },
  { day: "Thu", value: 110 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 90 },
  { day: "Sun", value: 75 },
];

// --- Options ---
const periodOptions = [
  { label: "Yearly", value: "yearly" },
  { label: "Monthly", value: "monthly" },
  { label: "Weekly", value: "weekly" },
] as const;

const yearOptions = [
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
] as const;

// --- Types ---
type Year = (typeof yearOptions)[number]["value"];
type Period = (typeof periodOptions)[number]["value"];

function EarningsChart() {
  const [period, setPeriod] = useState<Period>("yearly");
  const [year, setYear] = useState<Year>("2025");

  // Compute chart data dynamically
  const chartData = useMemo(() => {
    switch (period) {
      case "monthly":
        return monthlyData;
      case "weekly":
        return weeklyData;
      default:
        return yearlyData;
    }
  }, [period, year]);

  return (
    <CommonBorderWrapper className="w-full">
      {/* Header with Selects */}
      <div className="flex flex-col lg:flex-row items-center justify-between pb-6 gap-2">
        <CommonHeader>Earning Statistics ({year})</CommonHeader>
        <div className="flex items-center gap-2">
          <CommonSelect<Period>
            value={period}
            item={periodOptions}
            onValueChange={setPeriod}
            w={130}
            className="h-10"
          />
          <CommonSelect<Year>
            value={year}
            item={yearOptions}
            onValueChange={setYear}
            w={120}
            className="h-10"
          />
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey={period === "yearly" ? "month" : "day"}
              axisLine={false}
              tickLine={false}
              className="text-gray-500"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 200]}
              className="text-gray-500"
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#D96B3B"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CommonBorderWrapper>
  );
}

export default EarningsChart;
