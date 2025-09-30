import Tablist from "@/Dashboard/Admin/components/booking/Tablist";
import ProfileHeading from "@/Dashboard/providerDashboard/providerComponent/ProfileHeading";
import { useState } from "react";
import ProviderProfileInformation from "../providerComponent/ProviderProfileInformation";
import ProviderBusinessInformation from "../providerComponent/ProviderBusinessInformation";
import ProviderReview from "../providerComponent/ProviderReview";

export type ProviderProfileStatus =
  | "Personal information"
  | "Business Information"
  | "Review & Retting's";

const DefaultTabs: ProviderProfileStatus[] = [
  "Personal information",
  "Business Information",
  "Review & Retting's",
];

const ProviderProfile = () => {
  const [tab, setTab] = useState<ProviderProfileStatus>("Personal information");
  return (
    <div className="mb-10">
      <ProfileHeading />
      <div className="mt-12">
        <Tablist<ProviderProfileStatus>
          tabs={DefaultTabs}
          activeTab={tab}
          setTab={setTab}
        />
        {tab === "Personal information" && <ProviderProfileInformation />}
        {tab === "Business Information" && <ProviderBusinessInformation />}
        {tab === "Review & Retting's" && <ProviderReview />}
      </div>
    </div>
  );
};

export default ProviderProfile;
