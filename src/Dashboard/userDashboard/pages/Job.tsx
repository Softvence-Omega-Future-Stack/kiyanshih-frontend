import CommonSpace from "@/common/space/CommonSpace";
import CommonWrapper from "@/common/space/CommonWrapper";
import UserSectionHeader from "../userComponents/reuseable/UserSectionHeader";
import CurveSearch from "@/components/service/CurveSearch";
import Tablist from "@/Dashboard/Admin/components/booking/Tablist";
import { useState } from "react";
import AllJobs from "../userComponents/job/AllJobs";
import Active from "../userComponents/job/Active";
import Proposals from "../userComponents/job/Proposals";
import Progress from "../userComponents/job/Progress";
import Completed from "../userComponents/job/Completed";
import Pagination from "@/common/custom/Pagination";
export type JobsStatus =
  | "All Jobs"
  | "Active"
  | "Proposals"
  | "In-Progress"
  | "Completed";

const counts = {
  "All Jobs": 10,
  Active: 2,
  Proposals: 0,
  "In-Progress": 1,
  Completed: 7,
};
const JobsTabs: JobsStatus[] = [
  "All Jobs",
  "Active",
  "Proposals",
  "In-Progress",
  "Completed",
];

const Job = () => {
  const [tab, setTab] = useState<JobsStatus>("All Jobs");

  return (
    <CommonWrapper>
      <CommonSpace>
        <UserSectionHeader
          title="My Jobs"
          subtitle="Tell Us What You Need, We’ll Match You with Providers"
        />
        <CurveSearch className=" !max-w-[480px]" />
      </CommonSpace>

      <div>
        <Tablist<JobsStatus>
          tabs={JobsTabs}
          activeTab={tab}
          setTab={setTab}
          counts={counts}
        />
        {tab === "All Jobs" && <AllJobs />}
        {tab === "Active" && <Active />}
        {tab === "Proposals" && <Proposals />}
        {tab === "In-Progress" && <Progress />}
        {tab === "Completed" && <Completed />}
        <div className="py-10">
          <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
        </div>
      </div>
    </CommonWrapper>
  );
};

export default Job;
