import React, { useState } from "react";
import { Edit2, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface JobData {
  jobTitle: string;
  serviceCategory: string;
  subcategory: string;
  description: string;
  basePrice: string;
  rateType: string;
  serviceArea: string;
  availability: {
    monday: string;
    tuesday: string;
    wednesday: string;
  };
  image: string;
  services: string[];
}

const JobReviewPublish = () => {
  const [currentStep, setCurrentStep] = useState(4);
  const [jobData, setJobData] = useState<JobData>({
    jobTitle: "Kitchen Cabinet Installation",
    serviceCategory: "Home Improvement",
    subcategory: "Installation",
    description:
      "Upgrade your kitchen with professional cabinet installation tailored to your space and style. Our skilled experts handle everything from assembling and mounting cabinets to ensuring perfect alignment, secure fittings, and a polished finish.",
    basePrice: "$200/hour",
    rateType: "Hourly Rate",
    serviceArea: "California",
    availability: {
      monday: "09:19:00",
      tuesday: "09:19:00",
      wednesday: "09:19:00",
    },
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=400",
    services: ["Basic cleaning service"],
  });

  const steps = [
    { number: 1, label: "Basic Information" },
    { number: 2, label: "Availability & Location" },
    { number: 3, label: "Service Details" },
    { number: 4, label: "Review & Publish" },
  ];

  const handleEdit = (section: string) => {
    console.log(`Editing ${section}`);
    // Navigate to respective step for editing
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePublish = () => {
    console.log("Publishing job:", jobData);
    alert("Job posted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Post a Job in Minutes
          </h1>
          <p className="text-gray-600">
            Post a job, attract proposals, and hire the right professional with
            confidence.
          </p>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  Complete the Step 4 of 4
                </p>
              </div>

              <div className="space-y-2">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      currentStep === step.number
                        ? "bg-blue-50"
                        : currentStep > step.number
                        ? "bg-green-50"
                        : "bg-white"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep === step.number
                          ? "bg-blue-600 text-white"
                          : currentStep > step.number
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {currentStep > step.number ? "✓" : step.number}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">
                        Step {step.number}
                      </div>
                      <div
                        className={`text-sm font-medium ${
                          currentStep === step.number
                            ? "text-blue-600"
                            : "text-gray-700"
                        }`}
                      >
                        {step.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow">
              {/* Success Header */}
              <div className="border-b border-gray-200 p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Review & Publish
                </h2>
                <p className="text-gray-600">
                  The more details you add, the better your service will attract
                  the right clients
                </p>
              </div>

              {/* Content Sections */}
              <div className="p-8 space-y-6">
                {/* Job Details */}
                <div className="border border-gray-200 rounded-lg">
                  <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                      <span className="text-gray-400">📋</span> Job Details
                    </h3>
                    <button
                      onClick={() => handleEdit("job-details")}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Edit2 size={18} />
                    </button>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">
                        Job Title
                      </div>
                      <div className="text-gray-900">{jobData.jobTitle}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">
                        Service Category
                      </div>
                      <div className="text-gray-900">
                        {jobData.serviceCategory} - {jobData.subcategory}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">
                        Description
                      </div>
                      <div className="text-gray-900">{jobData.description}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">
                        Base price
                      </div>
                      <div className="text-gray-900">
                        Maximum: {jobData.basePrice}
                      </div>
                      <div className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {jobData.rateType}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability & Location */}
                <div className="border border-gray-200 rounded-lg">
                  <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">
                      Availability & Location
                    </h3>
                    <button
                      onClick={() => handleEdit("availability")}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Edit2 size={18} />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Service Area: {jobData.serviceArea}
                    </div>
                    <div className="space-y-1 text-sm text-gray-900">
                      <div>Monday: {jobData.availability.monday}</div>
                      <div>Tuesday: {jobData.availability.tuesday}</div>
                      <div>Wednesday: {jobData.availability.wednesday}</div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="border border-gray-200 rounded-lg">
                  <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Image</h3>
                    <button
                      onClick={() => handleEdit("image")}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Edit2 size={18} />
                    </button>
                  </div>
                  <div className="p-6">
                    <img
                      src={jobData.image}
                      alt="Service"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Include in your service */}
                <div className="border border-gray-200 rounded-lg">
                  <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">
                      Include in your service
                    </h3>
                    <button
                      onClick={() => handleEdit("services")}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Edit2 size={18} />
                    </button>
                  </div>
                  <div className="p-6">
                    <ul className="list-disc list-inside text-gray-900">
                      {jobData.services.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="border-t border-gray-200 p-6 flex gap-4">
                <Link to="/provider-dashboard/fixedjob-details">
                  <button
                    onClick={handlePrevious}
                    className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                  >
                    Previous
                  </button>
                </Link>

                <button
                  onClick={handlePublish}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Publish Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobReviewPublish;
