import { JobCardItem, type Job } from "./common/JobCard";
import image1 from "@/assets/images/f1.png";
import image2 from "@/assets/images/f2.png";
import image3 from "@/assets/images/f2.png";
export const jobs: Job[] = [
  {
    id: "inprogress-1",
    title: "Backend API Developer",
    location: "San Francisco, USA",
    budget: 1800,
    postedTime: "2025-09-12T09:30:00Z",
    status: "in-progress",
    proposalCount: 25,
    image: image3,
  },
  {
    id: "inprogress-2",
    title: "UI/UX Designer for App",
    location: "Paris, France",
    budget: 1500,
    postedTime: "2025-09-13T10:15:00Z",
    status: "in-progress",
    proposalCount: 10,
    image: image1,
  },
  {
    id: "inprogress-3",
    title: "Digital Marketing Campaign",
    location: "London, UK",
    budget: 1000,
    postedTime: "2025-09-14T08:40:00Z",
    status: "in-progress",
    proposalCount: 16,
    image: image2,
  },
  {
    id: "inprogress-4",
    title: "WordPress Plugin Development",
    location: "Berlin, Germany",
    budget: 1300,
    postedTime: "2025-09-15T11:25:00Z",
    status: "in-progress",
    proposalCount: 12,
    image: image3,
  },
  {
    id: "inprogress-5",
    title: "Content Strategy Consultant",
    location: "Toronto, Canada",
    budget: 750,
    postedTime: "2025-09-16T14:10:00Z",
    status: "in-progress",
    proposalCount: 7,
    image: image1,
  },
  {
    id: "inprogress-6",
    title: "Mobile Game Developer",
    location: "Tokyo, Japan",
    budget: 3000,
    postedTime: "2025-09-17T15:50:00Z",
    status: "in-progress",
    proposalCount: 28,
    image: image2,
  },
];
const Progress = () => {
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

export default Progress;
