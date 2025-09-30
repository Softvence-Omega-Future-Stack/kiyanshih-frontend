import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { timeAgo } from "@/help/dateConversion";
import CommonHeader from "@/common/header/CommonHeader";
import Paragraph from "@/common/header/Paragraph";
import type { FC } from "react";
import JobProposals from "../JobProposals";

export interface Job {
  id: string;
  title: string;
  location: string;
  budget: number;
  postedTime: string;
  status: "active" | "proposal" | "in-progress" | "completed";
  proposalCount?: number;
  image: string;
}

function getStatusBadge(status: Job["status"], proposalCount?: number) {
  switch (status) {
    case "active":
      return (
        <span className="px-4 py-1.5 text-[#EA580C] bg-[#FFF7ED] rounded-full">
          Active
        </span>
      );
    case "proposal":
      return (
        <span className="px-4 py-1.5 text-[#EA580C] bg-[#FFF7ED] rounded-full">
          {proposalCount?.toString().padStart(2, "0")} Proposal
        </span>
      );
    case "in-progress":
      return (
        <span className="px-4 py-1.5 text-[#CA8A04] bg-[#FEFCE8] rounded-full">
          In-progress
        </span>
      );
    case "completed":
      return (
        <span className="px-4 py-1.5 text-[#16A34A] bg-[#F0FDF4] rounded-full">
          Completed
        </span>
      );
    default:
      return null;
  }
}

function getActionButton(
  status: Job["status"],
  onActionClick?: (job: Job) => void,
  job?: Job
) {
  switch (status) {
    case "active":
    case "completed":
      return (
        <Button
          variant="link"
          className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium cursor-pointer"
          onClick={() => onActionClick?.(job!)}
        >
          View Details
        </Button>
      );
    case "proposal":
      return (
        <Button
          variant="outline"
          className="text-gray-700 border-gray-300 hover:bg-gray-50 bg-transparent cursor-pointer"
          onClick={() => onActionClick?.(job!)}
        >
          View Proposal
        </Button>
      );
    default:
      return null;
  }
}

interface JobCardItemProps {
  job: Job;
  onActionClick?: (job: Job) => void;
  viewProposals?: boolean;
  setViewProposals?: (viewProposals: boolean) => void;
}

export const JobCardItem: FC<JobCardItemProps> = ({
  job,
  onActionClick,
  viewProposals,
  setViewProposals,
}) => (
  <div className="bg-white rounded-lg border border-border p-6 relative">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <img
          src={job.image || "/placeholder.svg"}
          alt={job.title}
          className="w-30 h-30 rounded-lg object-cover"
        />
      </div>

      <div className="flex-1  h-full">
        <div className="flex  justify-between">
          <div className="">
            <CommonHeader className=" !text-[#2D2D2D] ">
              {job.title}
            </CommonHeader>
            <div className="flex items-center text-gray-500 ">
              <MapPin className="w-4 h-4 mr-1 text-[#1D4ED8]" />
              <Paragraph className="!text-[#716E6E]">{job.location}</Paragraph>
            </div>
            <CommonHeader className=" !text-[#2D2D2D] ">
              Posted {timeAgo(job.postedTime)}
            </CommonHeader>
            <Paragraph className="!text-[#716E6E]">
              Budget: ${job.budget.toFixed(2)}
            </Paragraph>
          </div>

          {/* Status + Action */}
          <div className="flex flex-col justify-between   min-h-[120px]">
            {getStatusBadge(job.status, job.proposalCount)}
            {getActionButton(job.status, onActionClick, job)}
          </div>
        </div>
      </div>
    </div>

    {viewProposals && (
      <div>
        <JobProposals setViewProposals={setViewProposals} />
      </div>
    )}
  </div>
);
