import CommonWrapper from "@/common/space/CommonWrapper";
import UserSectionHeader from "../userComponents/reuseable/UserSectionHeader";
import PostingSidebar from "../userComponents/jobPosting/PostingSidebar";
import JobDetails from "../userComponents/jobPosting/form/JobDetails";
import SelectCategory from "../userComponents/jobPosting/form/SelectCategory";
import JobSchedule from "../userComponents/jobPosting/form/JobSchedule";
import Budget from "../userComponents/jobPosting/form/Budget";
import Preview from "../userComponents/jobPosting/form/Preview";
import CommonButton from "@/common/button/CommonButton";
import { useState } from "react";

const JobPost = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(5);

  console.log("setTotalSteps", setTotalSteps);
  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(1);
    }
  };
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <CommonWrapper>
      <div className="pt-10">
        <UserSectionHeader
          title="Post a Job in Minutes"
          subtitle="Post a job, receive proposals, and hire the right professional with confidence."
        />
      </div>

      <div className="flex items-start gap-8 pb-10 pt-6">
        <div className=" w-[300px]">
          <PostingSidebar currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        <div className="w-full border border-border rounded-[10px] px-10 py-5">
          {currentStep === 1 && <JobDetails />}
          {currentStep === 2 && <SelectCategory />}
          {currentStep === 3 && <JobSchedule />}
          {currentStep === 4 && <Budget />}
          {currentStep === 5 && <Preview />}
          <div className=" py-10">
            {currentStep !== totalSteps && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  {currentStep !== 1 && (
                    <CommonButton
                      className="!bg-[#475569] !text-white"
                      onClick={handlePreviousStep}
                    >
                      Previous
                    </CommonButton>
                  )}
                  <CommonButton
                    className="!bg-[#0F172A] !text-white"
                    onClick={handleNextStep}
                  >
                    Next Step
                  </CommonButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default JobPost;
