import Tablist from "@/Dashboard/Admin/components/booking/Tablist";
import ProfileHeading from "@/Dashboard/userDashboard/userComponents/providerComponent/ProfileHeading";
import { useState } from "react";

export type ProviderProfileStatus =
  | "Personal information"
  | "Business Information"
  | "Review & Retting's";

const ProviderProfile = () => {
  const [tab, setTab] = useState<ProviderProfileStatus>("Personal information");
  return (
    <div>
      <ProfileHeading />
      <div className="mt-12">
        <Tablist activeTab={tab} setTab={setTab} />
        {tab === "Personal information" && <p>Personal information</p>}
        {tab === "Business Information" && <p>Business Information</p>}
        {tab === "Personal information" && <p>Review & Retting's</p>}
      </div>
    </div>
  );
};

export default ProviderProfile;
