import { JobCardItem, type Job } from "./common/JobCard";
import image1 from "@/assets/images/f1.png";
import image2 from "@/assets/images/f2.png";
import image3 from "@/assets/images/f2.png";
export const jobs: Job[] = [
  {
    id: "active-1",
    title: "Frontend Developer for SaaS Dashboard",
    location: "New York, USA",
    budget: 1200,
    postedTime: "2025-09-20T10:30:00Z",
    status: "active",
    proposalCount: 15,
    image: image1,
  },
  {
    id: "active-2",
    title: "UI Designer for Landing Page",
    location: "Toronto, Canada",
    budget: 600,
    postedTime: "2025-09-21T11:45:00Z",
    status: "active",
    proposalCount: 8,
    image: image2,
  },
  {
    id: "active-3",
    title: "SEO Consultant for E-commerce",
    location: "London, UK",
    budget: 900,
    postedTime: "2025-09-22T09:15:00Z",
    status: "active",
    proposalCount: 20,
    image: image3,
  },
  {
    id: "active-4",
    title: "React Native Developer",
    location: "Berlin, Germany",
    budget: 2000,
    postedTime: "2025-09-23T14:10:00Z",
    status: "active",
    proposalCount: 12,
    image: image1,
  },
  {
    id: "active-5",
    title: "Marketing Copywriter",
    location: "Sydney, Australia",
    budget: 400,
    postedTime: "2025-09-24T12:00:00Z",
    status: "active",
    proposalCount: 7,
    image: image2,
  },
];
const Active = () => {
  return (
    <div>
      <div className="space-y-4">
        {jobs.map((job) => (
          <JobCardItem setViewProposals={() => {}} job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default Active;
