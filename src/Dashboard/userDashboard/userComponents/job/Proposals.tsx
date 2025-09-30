import { JobCardItem, type Job } from "./common/JobCard";
import image1 from "@/assets/images/f1.png";
import image2 from "@/assets/images/f2.png";
import image3 from "@/assets/images/f2.png";
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
  {
    id: "proposal-2",
    title: "Content Writer for Blogs",
    location: "Sydney, Australia",
    budget: 300,
    postedTime: "2025-09-11T12:15:00Z",
    status: "proposal",
    proposalCount: 12,
    image: image3,
  },
  {
    id: "proposal-3",
    title: "Fullstack Developer (MERN)",
    location: "New York, USA",
    budget: 2800,
    postedTime: "2025-09-12T08:00:00Z",
    status: "proposal",
    proposalCount: 20,
    image: image1,
  },
  {
    id: "proposal-4",
    title: "Illustrator for Branding",
    location: "London, UK",
    budget: 450,
    postedTime: "2025-09-13T09:30:00Z",
    status: "proposal",
    proposalCount: 10,
    image: image2,
  },
  {
    id: "proposal-5",
    title: "PPC Ads Specialist",
    location: "Toronto, Canada",
    budget: 800,
    postedTime: "2025-09-14T14:20:00Z",
    status: "proposal",
    proposalCount: 14,
    image: image3,
  },
  {
    id: "proposal-6",
    title: "E-commerce Product Photographer",
    location: "Paris, France",
    budget: 600,
    postedTime: "2025-09-15T10:00:00Z",
    status: "proposal",
    proposalCount: 6,
    image: image1,
  },
  {
    id: "proposal-7",
    title: "Game UI Designer",
    location: "San Francisco, USA",
    budget: 2000,
    postedTime: "2025-09-16T12:45:00Z",
    status: "proposal",
    proposalCount: 25,
    image: image2,
  },
  {
    id: "proposal-8",
    title: "Copywriter for Ads",
    location: "Dubai, UAE",
    budget: 350,
    postedTime: "2025-09-17T15:00:00Z",
    status: "proposal",
    proposalCount: 8,
    image: image3,
  },
  {
    id: "proposal-9",
    title: "Data Scientist",
    location: "Delhi, India",
    budget: 2200,
    postedTime: "2025-09-18T13:15:00Z",
    status: "proposal",
    proposalCount: 19,
    image: image1,
  },
  {
    id: "proposal-10",
    title: "Logo Designer",
    location: "Los Angeles, USA",
    budget: 250,
    postedTime: "2025-09-19T16:10:00Z",
    status: "proposal",
    proposalCount: 30,
    image: image2,
  },
];
const Proposals = () => {
  return (
    <div>
      <div className="space-y-4">
        {jobs.map((job) => (
          <JobCardItem job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default Proposals;
