import type { ServiceStatus } from "@/lib/serviceCardData";
import React from "react";

interface BookingStatusBadgeProps {
  status: ServiceStatus;
  onClick?: () => void;
}

const BookingStatusBadge: React.FC<BookingStatusBadgeProps> = ({ status, onClick }) => {
  const getStatusStyles = (status: ServiceStatus) => {
    switch (status) {
      case "Pending":
        return {
          bgColor: "bg-yellow-50",
          textColor: "text-yellow-800",
          borderColor: "border-yellow-200",
          hoverColor: "hover:bg-yellow-100",
          label: "Booking Pending",
        };
      case "Accepted":
        return {
          bgColor: "bg-green-50",
          textColor: "text-green-500",
          borderColor: "border-green-200",
          hoverColor: "hover:bg-green-100",
          label: "Booking Accepted",
        };
      case "Rejected":
        return {
          bgColor: "bg-red-50",
          textColor: "text-red-500",
          borderColor: "border-red-200",
          hoverColor: "hover:bg-red-100",
          label: "Booking Rejected",
        };
      case "In-progress":
        return {
          bgColor: "bg-yellow-50",
          textColor: "text-yellow-600",
          borderColor: "border-yellow-200",
          hoverColor: "hover:bg-yellow-100",
          label: "In-Progress",
        };
      case "Completed":
        return {
          bgColor: "bg-green-50",
          textColor: "text-green-500",
          borderColor: "border-green-200",
          hoverColor: "hover:bg-green-100",
          label: "Booking Completed",
        };
      default:
        return {
          bgColor: "bg-gray-50",
          textColor: "text-gray-800",
          borderColor: "border-gray-200",
          hoverColor: "hover:bg-gray-100",
          label: status,
        };
    }
  };

  const styles = getStatusStyles(status);

  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 cursor-pointer rounded-full text-sm border ${styles.borderColor} ${styles.bgColor} ${styles.textColor} ${styles.hoverColor}`}
    >
      {styles.label}
    </button>
  );
};

export default BookingStatusBadge;