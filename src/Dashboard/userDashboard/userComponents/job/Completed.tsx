import { JobCardItem, type Job } from "./common/JobCard";
import image1 from "@/assets/images/f1.png";
import image2 from "@/assets/images/f2.png";
import image3 from "@/assets/images/f2.png";
export const jobs: Job[] = [
  {
    id: "completed-1",
    title: "WordPress Website Setup",
    location: "Mumbai, India",
    budget: 400,
    postedTime: "2025-09-01T07:00:00Z",
    status: "completed",
    proposalCount: 9,
    image: image1,
  },
  {
    id: "completed-2",
    title: "Logo Design for Startup",
    location: "Los Angeles, USA",
    budget: 250,
    postedTime: "2025-09-02T15:20:00Z",
    status: "completed",
    proposalCount: 30,
    image: image2,
  },
  {
    id: "completed-3",
    title: "Landing Page Development",
    location: "Berlin, Germany",
    budget: 1000,
    postedTime: "2025-09-03T13:15:00Z",
    status: "completed",
    proposalCount: 18,
    image: image3,
  },
  {
    id: "completed-4",
    title: "Brochure Design",
    location: "Toronto, Canada",
    budget: 350,
    postedTime: "2025-09-04T08:45:00Z",
    status: "completed",
    proposalCount: 6,
    image: image1,
  },
  {
    id: "completed-5",
    title: "SEO Optimization",
    location: "London, UK",
    budget: 800,
    postedTime: "2025-09-05T09:30:00Z",
    status: "completed",
    proposalCount: 20,
    image: image2,
  },
  {
    id: "completed-6",
    title: "Mobile App Testing",
    location: "Paris, France",
    budget: 500,
    postedTime: "2025-09-06T10:25:00Z",
    status: "completed",
    proposalCount: 13,
    image: image3,
  },
  {
    id: "completed-7",
    title: "Presentation Deck Design",
    location: "Dubai, UAE",
    budget: 450,
    postedTime: "2025-09-07T14:50:00Z",
    status: "completed",
    proposalCount: 10,
    image: image1,
  },
  {
    id: "completed-8",
    title: "Database Migration",
    location: "San Francisco, USA",
    budget: 2000,
    postedTime: "2025-09-08T11:35:00Z",
    status: "completed",
    proposalCount: 16,
    image: image2,
  },
];
const Completed = () => {
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

export default Completed;
