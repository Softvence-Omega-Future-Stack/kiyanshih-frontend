import { useState } from "react";
import { MapPin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface Job {
  id: number;
  title: string;
  location: string;
  budget: string;
  postedBy: string;
  image: string;
  status: "pending" | "submitted";
}

type TabType = "all" | "pending" | "accepted" | "rejected";

const AvailableJobs = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 2; // static pagination (2 jobs per page)

  const jobs: Job[] = [
    {
      id: 1,
      title: "Professional Home Cleaning",
      location: "Ontario, TX",
      budget: "$35/hr",
      postedBy: "Sarah Smith",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      status: "pending",
    },
    {
      id: 2,
      title: "Professional Home Cleaning",
      location: "Ontario, TX",
      budget: "$35/hr",
      postedBy: "Sarah Smith",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      status: "pending",
    },
    {
      id: 3,
      title: "Professional Home Cleaning",
      location: "Ontario, TX",
      budget: "$35/hr",
      postedBy: "Sarah Smith",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      status: "pending",
    },
    {
      id: 4,
      title: "Professional Home Cleaning",
      location: "Ontario, TX",
      budget: "$35/hr",
      postedBy: "Sarah Smith",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      status: "submitted",
    },
  ];

  const tabs = [
    { key: "all" as TabType, label: "All Jobs", count: 10 },
    { key: "pending" as TabType, label: "Pending", count: 2 },
    { key: "accepted" as TabType, label: "Accepted", count: 5 },
    { key: "rejected" as TabType, label: "Rejected", count: 0 },
  ];

  // Filter jobs by active tab
  const filteredJobs =
    activeTab === "all" ? jobs : jobs.filter((job) => job.status === activeTab);

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const JobCard = ({ job }: { job: Job }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex gap-4">
        {/* Job Image */}
        <img
          src={job.image}
          alt={job.title}
          className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
        />

        {/* Job Details */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-base mb-1">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500 flex items-center gap-1 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                {job.location}
              </p>
              <p className="text-sm text-gray-900 mb-1">
                <span className="font-semibold">Budget:</span> {job.budget}
              </p>
              <p className="text-xs text-gray-400">Posted by {job.postedBy}</p>
            </div>

            {/* Status Badge */}
            <span className="bg-yellow-50 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
              {job.status === "pending" ? "Pending" : "Submitted"}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4">
        {job.status === "submitted" ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Proposal Submitted</span>
            </div>
            <div className="flex gap-2">
              <button className="text-gray-700 hover:text-gray-900 font-medium text-sm px-4 py-2">
                Message
              </button>
              <button className="text-gray-700 hover:text-gray-900 font-medium text-sm px-4 py-2">
                Details
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <Link to="/fixedjob-post">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-6 py-2 rounded-lg transition-colors">
                Submit Proposal
              </button>
            </Link>
            <div className="flex gap-2">
              <button className="text-gray-700 hover:text-gray-900 font-medium text-sm px-4 py-2">
                Message
              </button>
              <button className="text-gray-700 hover:text-gray-900 font-medium text-sm px-4 py-2">
                Details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Available jobs
          </h1>
          <p className="text-sm text-gray-600">
            View All jobs customers have posted
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setCurrentPage(1);
              }}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
                activeTab === tab.key
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}({tab.count.toString().padStart(2, "0")})
              {activeTab === tab.key && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></span>
              )}
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div>
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableJobs;
