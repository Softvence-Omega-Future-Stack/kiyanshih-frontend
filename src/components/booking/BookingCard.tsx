import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

interface Booking {
  id: string;
  serviceName: string;
  serviceIcon: string;
  jobPost: string;
  budget: string;
  bookingId: string;
  clientName: string;
  paymentMethod: string;
  date: string;
  time: string;
  location: string;
  status: "pending" | "accepted" | "rejected" | "in-progress" | "completed";
  handleAccept?: (id: string) => void;
  handleReject?: (id: string) => void;
  handleComplete?: (id: string) => void;
}

const BookingCard: React.FC<Booking> = ({
  id,
  serviceName,
  serviceIcon,
  jobPost,
  budget,
  bookingId,
  clientName,
  paymentMethod,
  date,
  time,
  location,
  status,
  handleAccept,
  handleReject,
  handleComplete,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow flex flex-col md:flex-row md:justify-between gap-4">
      {/* Left Info */}
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">{serviceIcon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 truncate">{serviceName}</h3>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <span>{jobPost}</span>
            <span>Budget: {budget}</span>
          </div>
          <div className="text-sm text-gray-500 mt-1 truncate">Booking id: {bookingId}</div>
        </div>
      </div>

      {/* Right Info */}
      <div className="flex flex-col gap-2 md:items-end text-sm text-gray-600 min-w-[200px]">
        <div className="text-gray-900 font-medium">Client: {clientName}</div>
        <div>Payment: {paymentMethod}</div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 mt-2 text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> <span className="truncate">{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> <span className="truncate">{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" /> <span className="truncate">{location}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-2 mt-4 md:mt-0">
        {status === "pending" && (
          <>
            <button
              onClick={() => handleAccept?.(id)}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={() => handleReject?.(id)}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              Reject
            </button>
          </>
        )}
        {status === "accepted" && (
          <button className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors">
            Accepted
          </button>
        )}
        {status === "rejected" && (
          <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium cursor-default rounded-lg">
            Rejected
          </button>
        )}
        {status === "in-progress" && (
          <>
            <button className="px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-yellow-700 transition-colors">
              In-Progress
            </button>
            <button
              onClick={() => handleComplete?.(id)}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Complete
            </button>
          </>
        )}
        {status === "completed" && (
          <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg cursor-default">
            Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
