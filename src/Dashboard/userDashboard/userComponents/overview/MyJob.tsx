import CommonSpace from "@/common/space/CommonSpace";
import UserSectionHeader from "../reuseable/UserSectionHeader";
import image2 from "@/assets/images/f2.png";
import { JobCardItem, type Job } from "../job/common/JobCard";
export const jobs: Job[] = [
  {
    id: "proposal-1",
    title: "Mobile App Developer",
    location: "Berlin, Germany",
    budget: 2500,
    postedTime: "2025-09-10T11:45:00Z",
    status: "proposal",
    proposalCount: 35,
    image: image2,
  },
];

const MyJob = () => {
  return (
    <CommonSpace>
      <UserSectionHeader
        title="My Jobs"
        subtitle="View all your currently active job postings"
        text="See All"
      />

      <div className="space-y-4">
        {jobs.map((job) => (
          <JobCardItem job={job} key={job.id} />
        ))}
      </div>
    </CommonSpace>
  );
};

export default MyJob;
