import {
  Eye,
  FileText,
  Calendar,
  Star,
  MoreVertical,
  Rocket,
  Edit,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Job {
  id: number;
  title: string;
  location: string;
  budget: string;
  postedTime: string;
  views: number;
  applications: number;
  bookings: number;
  rating: number;
  image: string;
  status?: "Active" | "Pending";
  isBoosted?: boolean;
}

const JobsDashboard = () => {
  const activeJobs: Job[] = [
    {
      id: 1,
      title: "Professional Home Cleaning",
      location: "Ontario, TX",
      budget: "$35/hr",
      postedTime: "Posted a minute ago",
      views: 69,
      applications: 12,
      bookings: 8,
      rating: 4.8,
      image:
        "https://res.cloudinary.com/dkqdwcguu/image/upload/v1759133045/licensed-image_1_1_ojismo.png",
      status: "Active",
    },
    {
      id: 2,
      title: "Furniture Assembly Service",
      location: "Ontario, TX",
      budget: "$35/hr",
      postedTime: "Posted a minute ago",
      views: 69,
      applications: 12,
      bookings: 8,
      rating: 4.8,
      image:
        "https://res.cloudinary.com/dkqdwcguu/image/upload/v1759133045/licensed-image_1_1_ojismo.png",
      status: "Active",
      isBoosted: true,
    },
  ];

  const recentBookings: Job[] = [
    {
      id: 3,
      title: "Professional Home Cleaning",
      location: "Ontario, TX",
      budget: "$35/hr",
      postedTime: "Posted 10 minute ago",
      views: 0,
      applications: 0,
      bookings: 0,
      rating: 0,
      image:
        "https://res.cloudinary.com/dkqdwcguu/image/upload/v1759133045/licensed-image_1_1_ojismo.png",
      status: "Pending",
    },
  ];

  const availableJobs: Job[] = [
    {
      id: 4,
      title: "Professional Home Cleaning",
      location: "Ontario, TX",
      budget: "$35/hr",
      postedTime: "Posted by Sarah Smith",
      views: 0,
      applications: 0,
      bookings: 0,
      rating: 0,
      image:
        "https://res.cloudinary.com/dkqdwcguu/image/upload/v1759133045/licensed-image_1_1_ojismo.png",
      status: "Pending",
    },
  ];

  const JobCard = ({
    job,
    showActions = false,
    showSubmit = false,
  }: {
    job: Job;
    showActions?: boolean;
    showSubmit?: boolean;
  }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      {/* Responsive flex layout */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Image */}
        <div className="w-full sm:w-40 md:w-48 lg:w-56 flex-shrink-0">
          <img
            src={job.image}
            alt={job.title}
            className="w-full h-40 sm:h-full rounded-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="grid gap-3">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  {job.isBoosted && (
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
                      Boost
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {job.location}
                </p>
                <p className="text-sm font-semibold text-gray-900 mt-1">
                  Budget: <span className="text-gray-700">{job.budget}</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">{job.postedTime}</p>
              </div>

              {/* Status + menu */}
              <div className="flex items-center gap-2 self-end sm:self-start">
                {job.status && (
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      job.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-yellow-50 text-yellow-700"
                    }`}
                  >
                    {job.status}
                  </span>
                )}
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          {showActions && (
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600 mt-3">
              {/* icons */}
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-1">
                  <Eye size={16} />
                  {job.views} views
                </span>
                <span className="flex items-center gap-1">
                  <FileText size={16} />
                  {job.applications} applications
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {job.bookings} bookings
                </span>
                <span className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  {job.rating}
                </span>
              </div>

              {/* actions */}
              <div className="flex flex-wrap gap-2">
                {job.isBoosted ? (
                  <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <Rocket size={16} />
                    Boosted
                  </button>
                ) : (
                  <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <Rocket size={16} />
                    Boost
                  </button>
                )}
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  <Edit size={16} />
                  Edit
                </button>
              </div>
            </div>
          )}

          {/* Submit Proposal Section */}
          {showSubmit && (
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <Link to="/fixedjob-post">
                <button className="bg-orange-500 hover:bg-orange-600 w-fit text-white px-6 py-2 rounded-lg text-sm font-medium ">
                  Submit Proposal
                </button>
              </Link>
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex-1 sm:flex-none">
                Message
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex-1 sm:flex-none">
                Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className=" space-y-8">
        {/* Active Jobs Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Active Jobs</h2>
              <p className="text-sm text-gray-600">
                View all your currently active job postings
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View All
            </button>
          </div>
          {activeJobs.map((job) => (
            <JobCard key={job.id} job={job} showActions />
          ))}
        </div>

        {/* Recent Bookings Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Recent Bookings
              </h2>
              <p className="text-sm text-gray-600">
                View latest bookings of your job postings
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View All
            </button>
          </div>
          {recentBookings.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Available Jobs Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Available jobs
              </h2>
              <p className="text-sm text-gray-600">
                View All jobs customers have posted
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View All
            </button>
          </div>
          {availableJobs.map((job) => (
            <JobCard key={job.id} job={job} showSubmit />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsDashboard;
