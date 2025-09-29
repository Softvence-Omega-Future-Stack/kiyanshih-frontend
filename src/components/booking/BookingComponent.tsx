import React, { useState } from "react";
import { MessageSquare, Eye, Star, DollarSign, Calendar, Clock, MapPin } from "lucide-react";

// ========== Types ==========
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
}

// ========== Demo Data ==========
const demoBookings: Booking[] = [
  {
    id: "1",
    serviceName: "Carpentry & Woodwork",
    serviceIcon: "🪵",
    jobPost: "Job Post:20-10-2025",
    budget: "$350",
    bookingId: "0185692",
    clientName: "Sarah Smith",
    paymentMethod: "card",
    date: "Tuesday, January 30, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Downtown Toronto, ON",
    status: "pending",
  },
  {
    id: "2",
    serviceName: "Carpentry & Woodwork",
    serviceIcon: "🪵",
    jobPost: "Job Post:20-10-2025",
    budget: "$350",
    bookingId: "0185692",
    clientName: "Sarah Smith",
    paymentMethod: "card",
    date: "Tuesday, January 30, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Downtown Toronto, ON",
    status: "accepted",
  },
  {
    id: "3",
    serviceName: "Carpentry & Woodwork",
    serviceIcon: "🪵",
    jobPost: "Job Post:20-10-2025",
    budget: "$350",
    bookingId: "0185692",
    clientName: "Sarah Smith",
    paymentMethod: "card",
    date: "Tuesday, January 30, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Downtown Toronto, ON",
    status: "rejected",
  },
  {
    id: "4",
    serviceName: "Carpentry & Woodwork",
    serviceIcon: "🪵",
    jobPost: "Job Post:20-10-2025",
    budget: "$350",
    bookingId: "0185692",
    clientName: "Sarah Smith",
    paymentMethod: "card",
    date: "Tuesday, January 30, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Downtown Toronto, ON",
    status: "in-progress",
  },
  {
    id: "5",
    serviceName: "Carpentry & Woodwork",
    serviceIcon: "🪵",
    jobPost: "Job Post:20-10-2025",
    budget: "$350",
    bookingId: "0185692",
    clientName: "Sarah Smith",
    paymentMethod: "card",
    date: "Tuesday, January 30, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Downtown Toronto, ON",
    status: "completed",
  },
];

// ========== Main Component ==========
const BookingServiceDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("pending");
  const [bookings, setBookings] = useState<Booking[]>(demoBookings);

  const stats = {
    pending: bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "accepted").length,
    completed: bookings.filter((b) => b.status === "completed").length,
    revenue: 1200,
  };

  const tabCounts = {
    pending: bookings.filter((b) => b.status === "pending").length,
    accepted: bookings.filter((b) => b.status === "accepted").length,
    rejected: bookings.filter((b) => b.status === "rejected").length,
    "in-progress": bookings.filter((b) => b.status === "in-progress").length,
    completed: bookings.filter((b) => b.status === "completed").length,
  };

  const filteredBookings = bookings.filter((b) => b.status === activeTab);

  const handleAccept = (id: string) => {
    setBookings(
      bookings.map((b) => (b.id === id ? { ...b, status: "accepted" as const } : b))
    );
  };

  const handleReject = (id: string) => {
    setBookings(
      bookings.map((b) => (b.id === id ? { ...b, status: "rejected" as const } : b))
    );
  };

  const handleComplete = (id: string) => {
    setBookings(
      bookings.map((b) => (b.id === id ? { ...b, status: "completed" as const } : b))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">{stats.pending}</div>
                <div className="text-sm text-gray-600 mt-1">Pending Requests</div>
              </div>
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-orange-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">{stats.confirmed}</div>
                <div className="text-sm text-gray-600 mt-1">Confirmed Bookings</div>
              </div>
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-teal-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">{stats.completed}</div>
                <div className="text-sm text-gray-600 mt-1">Completed Services</div>
              </div>
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">${stats.revenue}</div>
                <div className="text-sm text-gray-600 mt-1">Total Revenue</div>
              </div>
              <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-cyan-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Booking Service Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Booking service</h2>
            <p className="text-sm text-gray-600">View All Bookings customers have Done</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("pending")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "pending"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Pending ({tabCounts.pending < 10 ? "0" : ""}
              {tabCounts.pending})
            </button>
            <button
              onClick={() => setActiveTab("accepted")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "accepted"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Accepted({tabCounts.accepted < 10 ? "0" : ""}
              {tabCounts.accepted})
            </button>
            <button
              onClick={() => setActiveTab("rejected")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "rejected"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Rejected({tabCounts.rejected < 10 ? "0" : ""}
              {tabCounts.rejected})
            </button>
            <button
              onClick={() => setActiveTab("in-progress")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "in-progress"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              In-Progress({tabCounts["in-progress"] < 10 ? "0" : ""}
              {tabCounts["in-progress"]})
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "completed"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Completed({tabCounts.completed < 10 ? "0" : ""}
              {tabCounts.completed})
            </button>
          </div>

          {/* Booking Cards */}
          <div className="space-y-4">
            {filteredBookings.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No bookings in this category
              </div>
            ) : (
              filteredBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  {activeTab === "completed" && (
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Confirm job completion</span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{booking.serviceIcon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                          {booking.serviceName}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span>{booking.jobPost}</span>
                          <span>Budget: {booking.budget}</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Booking id:{booking.bookingId}
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        Client: {booking.clientName}
                      </div>
                      <div className="text-sm text-gray-600">
                        Payment: {booking.paymentMethod}
                      </div>
                      <div className="flex flex-col lg:flex-row lg:gap-6 items-right justify-end gap-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-right md:items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{booking.time}</span>
                        </div>
                        <div className="flex items-right md:items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{booking.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex gap-2">
                      {booking.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleAccept(booking.id)}
                            className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleReject(booking.id)}
                            className="px-6 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {booking.status === "accepted" && (
                        <button className="px-6 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors">
                          Accepted
                        </button>
                      )}
                      {booking.status === "rejected" && (
                        <button className="px-6 py-2 bg-red-600 text-white text-sm font-medium rounded-lg cursor-default">
                          Rejected
                        </button>
                      )}
                      {booking.status === "in-progress" && (
                        <>
                          <button className="px-6 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-yellow-700 transition-colors">
                            In-Progress
                          </button>
                          <button
                            onClick={() => handleComplete(booking.id)}
                            className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Complete
                          </button>
                        </>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {booking.status === "pending" && (
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                          Massage
                        </button>
                      )}
                      <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingServiceDashboard;