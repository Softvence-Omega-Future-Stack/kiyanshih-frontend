import React, { type FC } from "react";

type MetricCardProps = {
  title: string;
  value: string | number;
  color?: "blue" | "green" | "purple" | "orange";
  progress?: number;
};

const MetricCard: FC<MetricCardProps> = ({
  title,
  value,
  color = "blue",
  progress = 50,
}) => (
  <div className={`bg-${color}-100 rounded-xl p-4 border border-${color}-300`}>
    <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
    <div className="text-2xl font-bold text-gray-800">{value}</div>
    <div className={`mt-2 w-full bg-${color}-200 rounded-full h-2`}>
      <div
        className={`bg-${color}-600 h-2 rounded-full`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

type Metric = {
  title: string;
  value: string | number;
  color: "blue" | "green" | "purple" | "orange";
  progress: number;
};

const DashboardCard: FC = () => {
  const metrics: Metric[] = [
    { title: "Total Spend", value: "$2,000", color: "blue", progress: 75 },
    { title: "Active Jobs", value: "03", color: "green", progress: 25 },
    { title: "Total Bookings", value: "05", color: "purple", progress: 50 },
    { title: "Proposals Received", value: "05", color: "orange", progress: 50 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <MetricCard key={i} {...metric} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
