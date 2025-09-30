import image from "@/assets/frame/p3.svg";
import InfoSection from "../InfoSection";
import { Dot, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonHeader from "@/common/header/CommonHeader";
import MediumHeader from "@/common/header/MediumHeader";
import image2 from "@/assets/images/f2.png";
import { FaRegEdit } from "react-icons/fa";
import CommonButton from "@/common/button/CommonButton";
import ButtonWithIcon from "@/common/button/ButtonWithIcon";
const jobDetails = [
  { label: "City name:", value: "California" },
  { label: "Street Address:", value: "2 city lane road" },
  {
    label: "House Address:",
    value: "201 TRELAWN Avenue, Oakville, Ontario L6J4R3",
  },
  { label: "Date & Time:", value: "01 September, Any Time" },
];
const benefits = [
  "Your job will be posted and visible to qualified professionals",
  "You'll receive quotes and proposals",
  "Review provider profiles, ratings, and proposals",
];
const Preview = () => {
  return (
    <div>
      <InfoSection
        image={image}
        title="Review Your Job Post"
        subtitle="Please review all details before posting your job. You can edit any section if needed."
      />

      <div className=" space-y-4">
        <div className=" rounded-[10px] border border-border p-5 space-y-4">
          <div className="flex flex-row items-center justify-between ">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#2D2D2D]" />
              <CommonHeader className="!text-lg font-semibold !text-[#2D2D2D] ">
                Job Details
              </CommonHeader>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <FaRegEdit className="h-4 w-4" />
              <span className="sr-only">Edit job details</span>
            </Button>
          </div>

          <div>
            <MediumHeader className=" !mb-2 !text-[#2D2D2D] !font-medium">
              image
            </MediumHeader>

            <img src={image2} className="object-cover h-30 w-30 rounded-md" />
          </div>

          <div className=" border-b border-border py-4">
            <MediumHeader className=" !text-[#2D2D2D] !font-medium">
              Job Title
            </MediumHeader>
            <CommonHeader className=" !text-[#2D2D2D] ">
              Kitchen Cabinet Installation
            </CommonHeader>
          </div>

          <div>
            <MediumHeader className=" !text-[#2D2D2D] !font-medium">
              Description
            </MediumHeader>
            <CommonHeader className=" !font-normal !text-[#2D2D2D]">
              Upgrade your kitchen with professional cabinet installation
              tailored to your space and style. Our skilled experts handle
              everything from assembling and mounting cabinets to ensuring
              perfect alignment, secure fittings, and a polished finish.
            </CommonHeader>
          </div>
        </div>

        {/* Service Category Section */}
        <div className=" rounded-[10px] border border-border p-5 space-y-4">
          <div className="flex flex-row items-center justify-between ">
            <MediumHeader className=" !text-[#2D2D2D] !font-medium">
              Service Category
            </MediumHeader>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <FaRegEdit className="h-4 w-4" />
              <span className="sr-only">Edit service category</span>
            </Button>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              <CommonButton>Home improvement</CommonButton>

              <ButtonWithIcon
                className="!bg-transparent !text-[#2D2D2D]"
                icon={Dot}
              >
                Installation
              </ButtonWithIcon>
            </div>
          </div>
        </div>

        {/* Location & Schedule Section */}
        <div className=" rounded-[10px] border border-border p-5 space-y-4">
          <div className="flex flex-row items-center justify-between space-y-0 pb-4">
            <MediumHeader className=" !text-[#2D2D2D] !font-medium">
              Location & Schedule
            </MediumHeader>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <FaRegEdit className="h-4 w-4" />
              <span className="sr-only">Edit location and schedule</span>
            </Button>
          </div>
          <div className="space-y-3">
            {jobDetails.map((item, idx) => (
              <div key={idx} className="grid grid-cols-[120px_1fr] gap-2">
                <CommonHeader className="!text-[#475569] !font-medium">
                  {item.label}
                </CommonHeader>
                <CommonHeader className="!text-[#09090B] !font-medium">
                  {item.value}
                </CommonHeader>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Section */}
        <div className=" rounded-[10px] border border-border p-5 space-y-4">
          <div className="flex flex-row items-center justify-between space-y-0 pb-4">
            <MediumHeader className=" !text-[#2D2D2D] !font-medium">
              Budget
            </MediumHeader>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <FaRegEdit className="h-4 w-4" />
              <span className="sr-only">Edit budget</span>
            </Button>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-foreground">
              Get quotes From Professional
            </p>
            <CommonButton className="t">Hourly Rate</CommonButton>
            <p className="text-sm text-muted-foreground">Maximum : $200/hour</p>
          </div>
        </div>

        {/* What Happens Next */}
        <div className=" rounded-[10px] border border-border p-5 bg-[#F6FAFF]">
          <div className="">
            <MediumHeader className=" !text-[#1D4ED8] !font-medium mb-2">
              What happens next?
            </MediumHeader>
            <ul className="space-y-2 text-sm text-foreground">
              {benefits.map((text, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <CommonHeader className="!text-[#2d2d2d] !font-medium">
                    {text}
                  </CommonHeader>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className=" py-10">
          <CommonButton className=" !bg-blue w-[243px] !text-white">
            Post Job
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default Preview;
