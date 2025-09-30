import { JobCardItem, type Job } from "./common/JobCard";
import image from "@/assets/images/f1.png";
import image2 from "@/assets/images/f2.png";
import image3 from "@/assets/images/f2.png";
import { useState } from "react";
export const jobs: Job[] = [
  {
    id: "1",
    title: "Kitchen Cabinet Installation",
    location: "Ontario, TX",
    budget: 250.0,
    postedTime: "Posted a minute ago",
    status: "active",
    image: image,
  },
  {
    id: "2",
    title: "Bathroom Renovation",
    location: "Dallas, TX",
    budget: 1200.0,
    postedTime: "Posted 10 minutes ago",
    status: "proposal",
    proposalCount: 3,
    image: image2,
  },
  {
    id: "3",
    title: "Roof Repair",
    location: "Austin, TX",
    budget: 850.0,
    postedTime: "Posted 1 hour ago",
    status: "in-progress",
    image: image3,
  },
  {
    id: "4",
    title: "Living Room Painting",
    location: "Houston, TX",
    budget: 400.0,
    postedTime: "Posted yesterday",
    status: "completed",
    image: image,
  },
  {
    id: "5",
    title: "Tile Flooring Installation",
    location: "San Antonio, TX",
    budget: 1500.0,
    postedTime: "Posted 2 days ago",
    status: "proposal",
    proposalCount: 5,
    image: image2,
  },
  {
    id: "6",
    title: "Backyard Deck Construction",
    location: "Fort Worth, TX",
    budget: 3500.0,
    postedTime: "Posted 3 days ago",
    status: "active",
    image: image3,
  },
  {
    id: "7",
    title: "Garage Door Replacement",
    location: "Plano, TX",
    budget: 900.0,
    postedTime: "Posted 5 days ago",
    status: "completed",
    image: image,
  },
  {
    id: "8",
    title: "Fence Installation",
    location: "Arlington, TX",
    budget: 2200.0,
    postedTime: "Posted 1 week ago",
    status: "in-progress",
    image: image2,
  },
  {
    id: "9",
    title: "Basement Waterproofing",
    location: "Frisco, TX",
    budget: 5000.0,
    postedTime: "Posted 2 weeks ago",
    status: "proposal",
    proposalCount: 7,
    image: image,
  },
  {
    id: "10",
    title: "Window Replacement",
    location: "Irving, TX",
    budget: 1800.0,
    postedTime: "Posted 3 weeks ago",
    status: "completed",
    image: image2,
  },
];

const AllJobs = () => {
  // const [viewProposals, setViewProposals] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const handleActionClick = (job: Job) => {
    if (job.status === "proposal") {
      setSelectedJobId(job.id); // show proposals only for this job
    } else {
      console.log("Go to details page:", job.id);
    }
  };

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCardItem
          job={job}
          key={job.id}
          onActionClick={handleActionClick}
          viewProposals={selectedJobId === job.id}
          setViewProposals={(show) => {
            if (!show) setSelectedJobId(null);
          }}
        />
      ))}
    </div>
  );
};

export default AllJobs;
