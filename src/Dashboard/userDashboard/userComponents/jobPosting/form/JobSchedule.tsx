import image from "@/assets/frame/p2.svg";
import InfoSection from "../InfoSection";
import { useState } from "react";
import { Calendar } from "lucide-react";
import CommonSelect from "@/common/custom/CommonSelect";
import CommonHeader from "@/common/header/CommonHeader";

const JobSchedule = () => {
  const [formData, setFormData] = useState({
    city: "",
    streetAddress: "",
    houseAddress: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClass = {
    input:
      "w-full bg-white rounded-md p-3 text-black font-Geist text-base leading-[24px] border border-[#666666]/35  outline-none transition",
    label:
      "text-sm lg:text-base text-[#2D2D2D] font-medium font-Geist leading-[24px] block mb-2",
  };
  return (
    <div>
      <InfoSection
        image={image}
        title="Location & Schedule"
        subtitle="Let us know where the work needs to be done and when you'd like it completed."
      />

      <form onSubmit={handleSubmit} className="">
        <div className=" space-y-5">
          <div className="">
            <label htmlFor="city" className={inputClass.label}>
              City <span className="text-destructive">*</span>
            </label>
            <input
              id="city"
              placeholder="City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              className={inputClass.input}
            />
          </div>

          <div className="">
            <label htmlFor="streetAddress" className={inputClass.label}>
              Street Address <span className="text-destructive">*</span>
            </label>
            <input
              id="streetAddress"
              placeholder="123 Main Street, Ontario"
              value={formData.streetAddress}
              onChange={(e) =>
                setFormData({ ...formData, streetAddress: e.target.value })
              }
              className={inputClass.input}
            />
          </div>

          <div className="">
            <label htmlFor="houseAddress" className={inputClass.label}>
              House Address
            </label>
            <input
              id="houseAddress"
              placeholder="123 Main Street"
              value={formData.houseAddress}
              onChange={(e) =>
                setFormData({ ...formData, houseAddress: e.target.value })
              }
              className={inputClass.input}
            />
          </div>
        </div>

        <div className=" space-y-5 pt-5">
          <CommonHeader className="!text-xl!text-[#2D2D2D] font-semibold">
            Preferred Date & Time
          </CommonHeader>
          <div className="">
            <label htmlFor="date" className={inputClass.label}>
              Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className={inputClass.input}
              />
              <Calendar className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="">
            <label htmlFor="time" className={inputClass.label}>
              Preferred Time
            </label>

            <CommonSelect
              value={formData.time}
              onValueChange={(value) =>
                setFormData({ ...formData, time: value })
              }
              item={
                [
                  { label: "Anytime", value: "anytime" },
                  { label: "Morning (8AM - 12PM)", value: "morning" },
                  { label: "Afternoon (12PM - 5PM)", value: "afternoon" },
                  { label: "Evening (5PM - 8PM)", value: "evening" },
                ] as const
              }
              className={inputClass.input}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobSchedule;
