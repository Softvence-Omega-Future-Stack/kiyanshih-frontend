import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";
import CommonHeader from "@/common/header/CommonHeader";
import image1 from "@/assets/images/t1.png";
import image2 from "@/assets/images/t2.png";
import image3 from "@/assets/images/t3.png";
const bookings = [
  {
    id: "Booking #100129",
    date: "25-Aug-25 11:25AM",
    bookedBy: "Sara Chen",
    avatar: image1,
  },
  {
    id: "Booking #100129",
    date: "25-Aug-25 11:25AM",
    bookedBy: "Sara Chen",
    avatar: image3,
  },
  {
    id: "Booking #100129",
    date: "25-Aug-25 11:25AM",
    bookedBy: "Sara Chen",
    avatar: image1,
  },
  {
    id: "Booking #100129",
    date: "25-Aug-25 11:25AM",
    bookedBy: "Sara Chen",
    avatar: image2,
  },
];

const RecentBookings = () => {
  return (
    <CommonBorderWrapper>
      <div className="flex flex-row items-center justify-between">
        <CommonHeader className="pb-5">Recent Bookings</CommonHeader>
        <Button variant="link" className="text-blue cursor-pointer p-0">
          View all
        </Button>
      </div>
      <div>
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-b border-border pb-3 last:border-0"
            >
              <Avatar className="h-12.5 w-12.5 !rounded-md">
                <AvatarImage src={booking.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {booking.bookedBy
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <CommonHeader className="!leading-[20px] !text-sm !text-[#18181A]">
                  {booking.id}
                </CommonHeader>
                <CommonHeader className="text-[#334155] !leading-[20px] !text-sm">
                  {booking.date}
                </CommonHeader>
                <CommonHeader className="!text-xs text-[#64748B]">
                  Booked by {booking.bookedBy}
                </CommonHeader>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CommonBorderWrapper>
  );
};
export default RecentBookings;
