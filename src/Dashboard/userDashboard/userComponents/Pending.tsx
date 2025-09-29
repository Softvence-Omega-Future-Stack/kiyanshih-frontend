import imgSample from "@/assets/cardImages/work.jpg"; // Replace with your image import
import ServiceCard from "./reuseable/ServiceCard";

const Pending = () => {
  // Sample data for 6 cards
  const pendingServices = [
    {
      id: 1,
      imageSrc: imgSample,
      name: "Service One",
      verified: true,
      location: "New York, USA",
      startingPrice: 50,
      rating: 4.5,
      reviewCount: 12,
      statusLabel: "Pending",
    },
    {
      id: 2,
      imageSrc: imgSample,
      name: "Service Two",
      verified: false,
      location: "Los Angeles, USA",
      startingPrice: 30,
      rating: 3.8,
      reviewCount: 8,
      statusLabel: "Pending",
    },
    {
      id: 3,
      imageSrc: imgSample,
      name: "Service Three",
      verified: true,
      location: "Chicago, USA",
      startingPrice: 40,
      rating: 4.2,
      reviewCount: 10,
      statusLabel: "Pending",
    },
    {
      id: 4,
      imageSrc: imgSample,
      name: "Service Four",
      verified: false,
      location: "Houston, USA",
      startingPrice: 60,
      rating: 4.9,
      reviewCount: 20,
      statusLabel: "Pending",
    },
    {
      id: 5,
      imageSrc: imgSample,
      name: "Service Five",
      verified: true,
      location: "Miami, USA",
      startingPrice: 35,
      rating: 4.0,
      reviewCount: 15,
      statusLabel: "Pending",
    },
    {
      id: 6,
      imageSrc: imgSample,
      name: "Service Six",
      verified: false,
      location: "Seattle, USA",
      startingPrice: 25,
      rating: 3.5,
      reviewCount: 5,
      statusLabel: "Pending",
    },
  ];

  return (
    <div className=" gap-6">
      {pendingServices.map(service => (
        <ServiceCard
          key={service.id}
          imageSrc={service.imageSrc}
          name={service.name}
          verified={service.verified}
          location={service.location}
          startingPrice={service.startingPrice}
          rating={service.rating}
          reviewCount={service.reviewCount}
          statusLabel={service.statusLabel}
          onViewDetails={() => console.log("View Details", service.id)}
          onStatusClick={() => console.log("Status Clicked", service.id)}
        />
      ))}
    </div>
  );
};

export default Pending;
