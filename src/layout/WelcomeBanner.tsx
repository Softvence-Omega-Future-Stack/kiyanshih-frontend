import React from "react";

interface WelcomeBannerProps {
  name?: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ name }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-6 mb-4 mx-auto my-auto px-4 md:px-10 w-full max-w-[1400px]">
      {/* Greeting Section */}
      <div>
        <h2 className="text-xl font-semibold">{`Welcome back, ${name}`}</h2>
        <p className="text-gray-400">
          Manage your services and track your performance
        </p>
      </div>

      {/* Action Button */}
      <div>
        <button className="px-4 py-2 text-white hover:scale-105 transition-transform rounded-md border border-zinc-800 bg-zinc-950">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default WelcomeBanner;
