import React from "react";
import verifiedImg from "@/assets/cardImages/verified.svg"; // your verified image

// ----- Star Component -----
interface StarProps {
  percent?: number;
  size?: number;
}

const Star: React.FC<StarProps> = ({ percent = 100, size = 16 }) => {
  const orange = "#F59E0B";
  const grey = "#E5E7EB";

  return (
    <span className="inline-block relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 24 24" width={size} height={size} className="block">
        <path
          d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.603L19.335 24 12 19.897 4.665 24 6.25 15.353 0.5 9.75l7.832-1.732L12 .587z"
          fill={grey}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${percent}%`,
          overflow: "hidden",
          height: size,
        }}
      >
        <svg viewBox="0 0 24 24" width={size} height={size} className="block">
          <path
            d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.603L19.335 24 12 19.897 4.665 24 6.25 15.353 0.5 9.75l7.832-1.732L12 .587z"
            fill={orange}
          />
        </svg>
      </div>
    </span>
  );
};

// ----- RatingStars Component -----
interface RatingStarsProps {
  rating?: number;
  size?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating = 0, size = 14 }) => {
  if (!rating) return null;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    const starIndex = i + 1;
    let percent = 0;
    if (rating >= starIndex) percent = 100;
    else if (rating > starIndex - 1 && rating < starIndex) {
      percent = Math.round((rating - (starIndex - 1)) * 100);
    }
    stars.push(<Star key={i} percent={percent} size={size} />);
  }

  return <div className="flex items-center space-x-1">{stars}</div>;
};

// ----- VerifiedBadge Component -----
const VerifiedBadge: React.FC = () => (
  <span className="ml-2 inline-flex items-center justify-center gap-1 ">
    <img src={verifiedImg} className="w-[14px] h-[14px]" />
    <span className="text-black text-xs">
      Verified
    </span>
  </span>
);

// ----- LocationIcon Component -----
const LocationIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21c-4.418 0-8-5.373-8-9a8 8 0 1116 0c0 3.627-3.582 9-8 9z"
    />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// ----- ServiceCard Component -----
interface ServiceCardProps {
  imageSrc?: string;
  name?: string;
  verified?: boolean;
  location?: string;
  startingPrice?: string | number;
  rating?: number;
  reviewCount?: number;
  statusLabel?: string;
  onViewDetails?: () => void;
  onStatusClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  name,
  verified = false,
  location,
  startingPrice,
  rating,
  reviewCount,
  statusLabel,
  onViewDetails,
  onStatusClick,
}) => {
  return (
    <div className="border border-[#CBD5E1] rounded-[10px] p-4 flex items-center justify-between gap-4 bg-white">
      <div className="flex items-start gap-4 min-w-0">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={name}
            className="w-20 h-20 object-cover rounded-md flex-shrink-0"
          />
        )}

        <div className="min-w-0">
          <div className="flex items-center text-sm font-medium text-gray-900 truncate">
            {name && <span className="truncate">{name}</span>}
            {verified && <VerifiedBadge />}
          </div>

          {location && (
            <div className="flex items-center text-xs text-gray-500 mt-1 truncate gap-1">
              <LocationIcon />
              <span className="truncate">{location}</span>
            </div>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-4">
            {startingPrice && (
              <div className="text-sm text-gray-700">
                Starting : <span className="font-semibold">${startingPrice}</span>
              </div>
            )}

            {rating && (
              <div className="flex items-center gap-2">
                <RatingStars rating={rating} size={14} />
                <div className="text-sm text-gray-600">
                  {rating.toFixed(1)}{" "}
                  {reviewCount && (
                    <span className="text-gray-400">({reviewCount} Reviews)</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-3">
        {statusLabel && (
          <button
            onClick={onStatusClick}
            className="px-3 py-1 rounded-full text-sm border border-yellow-200 bg-yellow-50 text-yellow-800 hover:bg-yellow-100"
          >
            {statusLabel}
          </button>
        )}

        {onViewDetails && (
          <button
            onClick={onViewDetails}
            className="text-sm text-gray-500 underline underline-offset-2"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
