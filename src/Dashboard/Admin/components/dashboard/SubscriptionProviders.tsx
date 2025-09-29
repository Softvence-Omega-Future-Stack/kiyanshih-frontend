import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import CommonBorderWrapper from "@/common/space/CommonBorderWrapper";
import CommonHeader from "@/common/header/CommonHeader";
import image1 from "@/assets/images/t1.png";
import image2 from "@/assets/images/t2.png";
import image3 from "@/assets/images/t3.png";
const providers = [
  {
    name: "Furniture Cleaning S...",
    services: "2 Services",
    bookings: "5 Bookings Completed",
    avatar: image1,
  },
  {
    name: "Microwave Repair Ser...",
    services: "2 Services",
    bookings: "5 Bookings Completed",
    avatar: image3,
  },
  {
    name: "Microwave Repair Ser...",
    services: "2 Services",
    bookings: "5 Bookings Completed",
    avatar: image2,
  },
  {
    name: "Microwave Repair Ser...",
    services: "2 Services",
    bookings: "5 Bookings Completed",
    avatar: image1,
  },
  {
    name: "Microwave Repair Ser...",
    services: "2 Services",
    bookings: "5 Bookings Completed",
    avatar: image2,
  },
];

const SubscriptionProviders = () => {
  return (
    <CommonBorderWrapper>
      <div className="flex flex-row items-center justify-between">
        <CommonHeader className="pb-5">Subscription Providers</CommonHeader>
        <Button variant="link" className="text-blue cursor-pointer p-0">
          View all
        </Button>
      </div>
      <div>
        <div className="space-y-4">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-border pb-3 last:border-0"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-12.5 w-12.5 !rounded-md">
                  <AvatarImage src={provider.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {provider.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CommonHeader className="!leading-[20px] !text-sm !text-[#18181A]">
                    {provider.name}
                  </CommonHeader>
                  <CommonHeader className="text-[#4B5864] !leading-[20px] !text-sm">
                    {provider.services}
                  </CommonHeader>
                </div>
              </div>
              <div className="text-right">
                <CommonHeader className="!text-[#4B5864]">
                  {provider.bookings}
                </CommonHeader>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CommonBorderWrapper>
  );
};

export default SubscriptionProviders;
