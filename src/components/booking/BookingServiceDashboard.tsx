import React, { useState, useEffect } from "react";
import {
  MessageSquareWarning,
  Eye,
  Star,
  DollarSign,
  Calendar,
  Clock,
  MapPin,
  X,
  Phone,
} from "lucide-react";

// ========== Types ==========
interface Booking {
  id: string;
  serviceName: string;
  serviceIcon: string;
  jobPost: string;
  budget: string;
  bookingId: string;
  clientName: string;
  clientPhone: string;
  clientAvatar: string;
  paymentMethod: string;
  date: string;
  time: string;
  location: string;
  status: "pending" | "accepted" | "rejected" | "in-progress" | "completed";
  amount: string;
  serviceAmount: string;
  vatExcluded: string;
  grandTotal: string;
  scheduleDate: string;
  payVia: string;
  bookingPlaced: string;
}

// ========== Demo Data ==========
const demoBookings: Booking[] = [
  {
    id: "1",
    serviceName: "Carpentry & Woodwork",
    serviceIcon: "🪵",
    jobPost: "Job Post:20-10-2025",
    budget: "$350",
    bookingId: "100129",
    clientName: "Charlotte Davis",
    clientPhone: "+82554852",
    clientAvatar: "CD",
    paymentMethod: "card",
    date: "Tuesday, January 30, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Downtown Toronto, ON",
    status: "pending",
    amount: "350.00$",
    serviceAmount: "350.00$",
    vatExcluded: "315.00",
    grandTotal: "315.00$",
    scheduleDate: "Tuesday, January 30",
    payVia: "Card",
    bookingPlaced: "25-Aug-2025 9:25am",
  },
  {
    id: "2",
    serviceName: "Plumbing Services",
    serviceIcon: "🔧",
    jobPost: "Job Post:21-10-2025",
    budget: "$450",
    bookingId: "100130",
    clientName: "Sarah Smith",
    clientPhone: "+12345678",
    clientAvatar: "SS",
    paymentMethod: "cash",
    date: "Wednesday, January 31, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "North York, ON",
    status: "accepted",
    amount: "450.00$",
    serviceAmount: "450.00$",
    vatExcluded: "405.00",
    grandTotal: "405.00$",
    scheduleDate: "Wednesday, January 31",
    payVia: "Cash",
    bookingPlaced: "26-Aug-2025 10:30am",
  },
  {
    id: "3",
    serviceName: "Electrical Work",
    serviceIcon: "⚡",
    jobPost: "Job Post:22-10-2025",
    budget: "$280",
    bookingId: "100131",
    clientName: "John Doe",
    clientPhone: "+19876543",
    clientAvatar: "JD",
    paymentMethod: "card",
    date: "Thursday, February 1, 2024",
    time: "9:00 AM - 12:00 PM",
    location: "Scarborough, ON",
    status: "rejected",
    amount: "280.00$",
    serviceAmount: "280.00$",
    vatExcluded: "252.00",
    grandTotal: "252.00$",
    scheduleDate: "Thursday, February 1",
    payVia: "Card",
    bookingPlaced: "27-Aug-2025 8:15am",
  },
  {
    id: "4",
    serviceName: "House Painting",
    serviceIcon: "🎨",
    jobPost: "Job Post:23-10-2025",
    budget: "$650",
    bookingId: "100132",
    clientName: "Mike Johnson",
    clientPhone: "+14567890",
    clientAvatar: "MJ",
    paymentMethod: "card",
    date: "Friday, February 2, 2024",
    time: "8:00 AM - 4:00 PM",
    location: "Etobicoke, ON",
    status: "in-progress",
    amount: "650.00$",
    serviceAmount: "650.00$",
    vatExcluded: "585.00",
    grandTotal: "585.00$",
    scheduleDate: "Friday, February 2",
    payVia: "Card",
    bookingPlaced: "28-Aug-2025 11:45am",
  },
  {
    id: "5",
    serviceName: "Garden Landscaping",
    serviceIcon: "🌳",
    jobPost: "Job Post:24-10-2025",
    budget: "$520",
    bookingId: "100133",
    clientName: "Emily Wilson",
    clientPhone: "+18901234",
    clientAvatar: "EW",
    paymentMethod: "card",
    date: "Saturday, February 3, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Mississauga, ON",
    status: "completed",
    amount: "520.00$",
    serviceAmount: "520.00$",
    vatExcluded: "468.00",
    grandTotal: "468.00$",
    scheduleDate: "Saturday, February 3",
    payVia: "Card",
    bookingPlaced: "29-Aug-2025 9:00am",
  },
];

// ========== Booking Details Modal Component ==========
const BookingDetailsModal: React.FC<{
  booking: Booking;
  onClose: () => void;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
}> = ({ booking, onClose, onAccept, onReject }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const getStatusBadge = () => {
    const statusConfig = {
      pending: { text: "Pending", class: "bg-yellow-100 text-yellow-800" },
      accepted: { text: "Accepted", class: "bg-green-100 text-green-800" },
      rejected: { text: "Rejected", class: "bg-red-100 text-red-800" },
      "in-progress": {
        text: "In-Progress",
        class: "bg-blue-100 text-blue-800",
      },
      completed: { text: "Completed", class: "bg-teal-100 text-teal-800" },
    };
    const config = statusConfig[booking.status];
    return (
      <span className={`px-2 py-1 ${config.class} text-xs font-medium rounded`}>
        {config.text}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl animate-fadeIn">
        {/* Header - Fixed */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 z-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                Booking Details
              </h2>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
                <span className="text-xs sm:text-sm text-gray-600">
                  Booking # {booking.bookingId}
                </span>
                {getStatusBadge()}
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Booking Placed: {booking.bookingPlaced}
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors">
                Invoice
              </button>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(95vh-120px)] sm:max-h-[calc(90vh-140px)]">
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Left Column - Payment & Booking Summary */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                {/* Payment Method */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                    Payment Method
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <p className="text-gray-600">
                        Amount:{" "}
                        <span className="text-gray-900 font-medium">
                          {booking.amount}
                        </span>
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-600">
                        Schedule Date:{" "}
                        <span className="text-gray-900 font-medium">
                          {booking.scheduleDate}
                        </span>
                      </p>
                      <p className="text-gray-600">
                        Pay Via:{" "}
                        <span className="text-gray-900 font-medium">
                          {booking.payVia}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Booking Summary */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">
                    Booking Summary
                  </h3>

                  {/* Desktop Table View */}
                  <div className="hidden sm:block space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          Service
                        </p>
                      </div>
                      <div className="w-24 text-right">
                        <p className="text-sm font-medium text-gray-900">
                          Amount
                        </p>
                      </div>
                      <div className="w-24 text-right">
                        <p className="text-sm font-medium text-gray-900">
                          Total
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          {booking.serviceName}
                        </p>
                      </div>
                      <div className="w-24 text-right">
                        <p className="text-sm text-gray-900">
                          {booking.serviceAmount}
                        </p>
                      </div>
                      <div className="w-24 text-right">
                        <p className="text-sm text-gray-900">
                          {booking.amount}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                      <div className="flex-1"></div>
                      <div className="w-32 text-right">
                        <p className="text-sm text-gray-600">
                          Service amount (Vat Excluded)
                        </p>
                      </div>
                      <div className="w-24 text-right">
                        <p className="text-sm text-gray-900">
                          {booking.vatExcluded}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <div className="flex-1"></div>
                      <div className="w-32 text-right">
                        <p className="text-sm font-semibold text-gray-900">
                          Grand Total
                        </p>
                      </div>
                      <div className="w-24 text-right">
                        <p className="text-sm font-semibold text-gray-900">
                          {booking.grandTotal}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Card View */}
                  <div className="sm:hidden space-y-3">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-xs font-medium text-gray-600 mb-1">
                        Service
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {booking.serviceName}
                      </p>
                      <div className="flex justify-between mt-2 pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-600">Amount:</span>
                        <span className="text-sm font-medium text-gray-900">
                          {booking.serviceAmount}
                        </span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-600">Total:</span>
                        <span className="text-sm font-medium text-gray-900">
                          {booking.amount}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex justify-between mb-2">
                        <span className="text-xs text-gray-600">
                          Service amount (Vat Excluded):
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          {booking.vatExcluded}
                        </span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-100">
                        <span className="text-xs font-semibold text-gray-900">
                          Grand Total:
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {booking.grandTotal}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Setup */}
              <div className="space-y-4 sm:space-y-6">
                {/* Booking Setup */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">
                    Booking Setup
                  </h3>

                  {booking.status === "pending" && (
                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={() => onAccept(booking.id)}
                        className="flex-1 px-3 sm:px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => onReject(booking.id)}
                        className="flex-1 px-3 sm:px-4 py-2 bg-red-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Reject
                      </button>
                    </div>
                  )}

                  {/* Service Location */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-3 text-center text-sm sm:text-base">
                      Service location
                    </h4>
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-2 sm:p-3 rounded">
                      <p className="text-xs sm:text-sm text-gray-800">
                        You need to go to the Customer Location to provide the
                        service
                      </p>
                    </div>
                    <div className="mt-3">
                      <p className="text-xs sm:text-sm text-gray-600">
                        Service Location:
                      </p>
                      <p className="text-xs sm:text-sm text-gray-900 font-medium break-words">
                        {booking.location}
                      </p>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-3 text-center text-sm sm:text-base">
                      Customer Information
                    </h4>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-700 font-semibold text-sm sm:text-base">
                          {booking.clientAvatar}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                          {booking.clientName}
                        </p>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 mt-1">
                          <Phone className="w-3 h-3 flex-shrink-0" />
                          <span>{booking.clientPhone}</span>
                        </div>
                        <div className="flex items-start gap-1 text-xs sm:text-sm text-gray-600 mt-1">
                          <MapPin className="w-3 h-3 flex-shrink-0 mt-0.5" />
                          <span className="break-words">
                            {booking.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========== Main Component ==========
const BookingServiceDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("pending");
  const [bookings, setBookings] = useState<Booking[]>(demoBookings);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

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
      bookings.map((b) =>
        b.id === id ? { ...b, status: "accepted" as const } : b
      )
    );
    setSelectedBooking(null);
  };

  const handleReject = (id: string) => {
    setBookings(
      bookings.map((b) =>
        b.id === id ? { ...b, status: "rejected" as const } : b
      )
    );
    setSelectedBooking(null);
  };

  const handleComplete = (id: string) => {
    setBookings(
      bookings.map((b) =>
        b.id === id ? { ...b, status: "completed" as const } : b
      )
    );
  };

  const handleViewDetails = (booking: Booking) => {
    setSelectedBooking(booking);
  };

  return (
    <div className="min-h-screen w-full max-w-[1400px] mx-auto my-auto px-4 md:px-10">
      <div className="max-w-7xl">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="p-4 sm:p-6 shadow-sm rounded-lg border border-slate-300 bg-white ">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  {stats.pending}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Pending Requests
                </div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                <MessageSquareWarning className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 shadow-sm rounded-lg border border-slate-300 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  {stats.confirmed}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Confirmed Bookings
                </div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 shadow-sm rounded-lg border border-slate-300 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  {stats.completed}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Completed Services
                </div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 shadow-sm rounded-lg border border-slate-300 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  ${stats.revenue}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Total Revenue
                </div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-50 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Booking Service Section */}
        <div className="bg-white ">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              Booking service
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              View All Bookings customers have Done
            </p>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto mb-4 sm:mb-6 border-b border-gray-200 -mx-2 px-2 scrollbar-hide">
            <button
              onClick={() => setActiveTab("pending")}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
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
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
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
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
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
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
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
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
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
          <div className="space-y-3 sm:space-y-4 ">
            {filteredBookings.length === 0 ? (
              <div className="text-center py-12 text-gray-500 text-sm">
                No bookings in this category
              </div>
            ) : (
              filteredBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="p-3 sm:p-4 md:p-6 hover:shadow-md transition-all cursor-pointer rounded-2xl border border-slate-300 bg-white"
                  onClick={() => handleViewDetails(booking)}
                >
                  {activeTab === "completed" && (
                    <div className="flex items-center gap-2 mb-3 sm:mb-4 text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">
                        Confirm job completion
                      </span>
                    </div>
                  )}

                  {/* Top Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    {/* Left side (service info) */}
                    <div className="flex gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl sm:text-2xl">
                          {booking.serviceIcon}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 truncate">
                          {booking.serviceName}
                        </h3>
                        <div className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 text-xs sm:text-sm text-gray-600">
                          <span>{booking.jobPost}</span>
                          <span>Budget: {booking.budget}</span>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 mt-1">
                          Booking id: {booking.bookingId}
                        </div>
                      </div>
                    </div>

                    {/* Right side (client info) */}
                    <div className="lg:text-right">
                      <div className="text-xs sm:text-sm font-medium text-gray-900 mb-1">
                        Client: {booking.clientName}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Payment: {booking.paymentMethod}
                      </div>
                      <div className="flex flex-wrap lg:justify-end gap-2 sm:gap-3 mt-2 text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">{booking.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{booking.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate max-w-[150px]">
                            {booking.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t-2 border-[#DBDBDB]">
                    <div className="flex flex-wrap gap-2">
                      {booking.status === "pending" && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAccept(booking.id);
                            }}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                          >
                            Accept
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReject(booking.id);
                            }}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 text-white text-xs sm:text-sm font-medium rounded-md hover:bg-red-700 transition-colors"
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {booking.status === "accepted" && (
                        <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm font-medium rounded-md bg-teal-600">
                          Accepted
                        </button>
                      )}
                      {booking.status === "rejected" && (
                        <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm font-medium cursor-default rounded-md bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400">
                          Rejected
                        </button>
                      )}
                      {booking.status === "in-progress" && (
                        <>
                          <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm font-medium rounded-md bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                            In-Progress
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleComplete(booking.id);
                            }}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                          >
                            Complete
                          </button>
                        </>
                      )}
                    </div>

                    <div className="flex gap-3">
                      {booking.status === "pending" && (
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                          Message
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewDetails(booking);
                        }}
                        className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
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

      {/* Booking Details Modal */}
      {selectedBooking && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}
    </div>
  );
};

export default BookingServiceDashboard;
