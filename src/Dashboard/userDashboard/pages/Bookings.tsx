import React, { useState, useMemo } from "react";
import CommonWrapper from "@/common/space/CommonWrapper";
import { serviceCardData, type ServiceStatus } from "@/lib/serviceCardData";
import BookingTabs from "../userComponents/reuseable/BookingTabs";
import ServiceCard from "../userComponents/reuseable/ServiceCard";
import BookingStatusBadge from "../userComponents/reuseable/BookingStatusBadge";
import Pagination from "@/common/custom/Pagination";

const Bookings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceStatus>("Pending");

  // Define all status tabs
  const statusTabs: ServiceStatus[] = [
    "Pending",
    "Accepted",
    "Rejected",
    "In-progress",
    "Completed",
  ];

  // Calculate counts for each status
  const statusCounts = useMemo(() => {
    const counts: Partial<Record<ServiceStatus, number>> = {};
    statusTabs.forEach((status) => {
      counts[status] = serviceCardData.filter(
        (item) => item.statusLabel === status
      ).length;
    });
    return counts;
  }, [serviceCardData]);

  // Filter data based on active tab
  const filteredData = useMemo(() => {
    return serviceCardData.filter((item) => item.statusLabel === activeTab);
  }, [activeTab, serviceCardData]);

  const handleViewDetails = (id: number) => {
    console.log("View details for service:", id);
    // Navigate to details page
    // Example: navigate(`/bookings/${id}`);
  };

  const handleBookAgain = (id: number) => {
    console.log("Book again service:", id);
    // Navigate to booking page
    // Example: navigate(`/services/${id}/book`);
  };

  const handleWriteReview = (id: number) => {
    console.log("Write review for service:", id);
    // Open review modal or navigate
    // Example: setReviewModalOpen(true, id);
  };

  const handleStatusClick = (id: number, status: ServiceStatus) => {
    console.log("Status clicked for service:", id, "Status:", status);
    // Open status details modal
  };

  return (
    <CommonWrapper>
      <div className="py-6">
        <BookingTabs
          title="Booking services"
          description="View All Bookings customers have Done"
          tabs={statusTabs}
          activeTab={activeTab}
          setTab={setActiveTab}
          counts={statusCounts}
        />

        <div className="space-y-4 mt-6">
          {filteredData.length > 0 ? (
            filteredData.map((service) => (
              <ServiceCard
                key={service.id}
                imageSrc={service.imageSrc}
                name={service.name}
                verified={service.verified}
                locationText={service.location}
                startingPrice={service.startingPrice}
                rating={service.rating}
                reviewCount={service.reviewCount}
                status={service.statusLabel}
                statusLabel={
                  <BookingStatusBadge
                    status={service.statusLabel}
                    onClick={() => handleStatusClick(service.id, service.statusLabel)}
                  />
                }
                onViewDetails={() => handleViewDetails(service.id)}
                onBookAgain={() => handleBookAgain(service.id)}
                onWriteReview={() => handleWriteReview(service.id)}
              />
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No bookings found with status: {activeTab}
            </div>
          )}
        </div>
        
        <div className="mt-8 md:mt-12">
          <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} /> 
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Bookings;





// import React, { useState, useMemo } from "react";
// import CommonWrapper from "@/common/space/CommonWrapper";
// import { serviceCardData, type ServiceStatus } from "@/lib/serviceCardData";
// import BookingTabs from "../userComponents/reuseable/BookingTabs";
// import ServiceCard from "../userComponents/reuseable/ServiceCard";
// import BookingStatusBadge from "../userComponents/reuseable/BookingStatusBadge";
// import Pagination from "@/common/custom/Pagination";

// const Bookings: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<ServiceStatus>("Pending");

//   // Define all status tabs
//   const statusTabs: ServiceStatus[] = [
//     "Pending",
//     "Accepted",
//     "Rejected",
//     "In-progress",
//     "Completed",
//   ];

//   // Calculate counts for each status
//   const statusCounts = useMemo(() => {
//     const counts: Partial<Record<ServiceStatus, number>> = {};
//     statusTabs.forEach((status) => {
//       counts[status] = serviceCardData.filter(
//         (item) => item.statusLabel === status
//       ).length;
//     });
//     return counts;
//   }, []); // Add dependency

//   // Filter data based on active tab - CRITICAL FIX
//   const filteredData = useMemo(() => {
//     return serviceCardData.filter((item) => item.statusLabel === activeTab);
//   }, []); // Add both dependencies

//   const handleViewDetails = (id: number) => {
//     console.log("View details for service:", id);
//     // Add your navigation logic here
//   };

//   const handleStatusClick = (id: number, status: ServiceStatus) => {
//     console.log("Status clicked for service:", id, "Status:", status);
//     // Add your status click logic here
//   };

//   return (
//     <CommonWrapper>
//       <div className="py-6">
//         <BookingTabs
//           title="Booking services"
//           description="View  All Bookings customers have Done"
//           tabs={statusTabs}
//           activeTab={activeTab}
//           setTab={setActiveTab}
//           counts={statusCounts}
//         />

//         <div className="space-y-4 mt-6">
//           {filteredData.length > 0 ? (
//             filteredData.map((service) => (
//               <ServiceCard
//                 key={service.id}
//                 imageSrc={service.imageSrc}
//                 name={service.name}
//                 verified={service.verified}
//                 locationText={service.location}
//                 startingPrice={service.startingPrice}
//                 rating={service.rating}
//                 reviewCount={service.reviewCount}
//                 statusLabel={
//                   <BookingStatusBadge
//                     status={service.statusLabel}
//                     onClick={() => handleStatusClick(service.id, service.statusLabel)}
//                   />
//                 }
//                 onViewDetails={() => handleViewDetails(service.id)}
//               />
//             ))
//           ) : (
//             <div className="text-center py-12 text-gray-500">
//               No bookings found with status: {activeTab}
//             </div>
//           )}
//         </div>
//         <div className="mt-8 md:mt-12">
//             <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} /> 
//         </div>
//       </div>
//     </CommonWrapper>
//   );
// };

// export default Bookings;