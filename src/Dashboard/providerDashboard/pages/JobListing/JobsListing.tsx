import  { useState } from "react";
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

const JobsListing = () => {
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
    {
      id: 3,
      title: "Lawn Mowing Service",
      location: "Dallas, TX",
      budget: "$25/hr",
      postedTime: "Posted 2 hours ago",
      views: 40,
      applications: 5,
      bookings: 2,
      rating: 4.2,
      image:
        "https://res.cloudinary.com/dkqdwcguu/image/upload/v1759133045/licensed-image_1_1_ojismo.png",
      status: "Pending",
    },
    {
      id: 4,
      title: "Dog Walking Service",
      location: "Austin, TX",
      budget: "$20/hr",
      postedTime: "Posted 3 hours ago",
      views: 25,
      applications: 3,
      bookings: 1,
      rating: 4.5,
      image:
        "https://res.cloudinary.com/dkqdwcguu/image/upload/v1759133045/licensed-image_1_1_ojismo.png",
      status: "Active",
    },
    {
      id: 5,
      title: "Grocery Delivery",
      location: "Houston, TX",
      budget: "$15/hr",
      postedTime: "Posted yesterday",
      views: 50,
      applications: 8,
      bookings: 4,
      rating: 4.7,
      image:
        "https://res.cloudinary.com/dkqdwcguu/image/upload/v1759133045/licensed-image_1_1_ojismo.png",
      status: "Pending",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = activeJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(activeJobs.length / jobsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const JobCard = ({
    job,
    showActions = false,
  }: {
    job: Job;
    showActions?: boolean;
  }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 mx-w-5xl">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-40 md:w-48 lg:w-56 h-40 flex-shrink-0">
          <img
            src={job.image}
            alt={job.title}
            className="w-full h-40 sm:h-full rounded-lg object-cover"
          />
        </div>
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
                  {job.location}
                </p>
                <p className="text-sm font-semibold text-gray-900 mt-1">
                  Budget: <span className="text-gray-700">{job.budget}</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">{job.postedTime}</p>
              </div>
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
          {showActions && (
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600 mt-3">
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
              <div className="flex flex-wrap gap-2">
                {job.isBoosted ? (
                  <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <Rocket size={16} /> Boosted
                  </button>
                ) : (
                  <Link to="/provider-dashboard/boost-service">
                    <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                      <Rocket size={16} /> Boost
                    </button>
                  </Link>
                )}
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  <Edit size={16} /> Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="mx-w-7xl mx-auto space-y-8">
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
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} showActions />
          ))}

          {/* Previous / Next Pagination */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded border ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Previous
            </button>
            <span className="px-4 py-2 rounded text-gray-700">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded border ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsListing;
