import { useState } from "react";
import { FileText, MapPin, List, Eye, ChevronDown } from "lucide-react";

const FixListJobPosting = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    category: "",
    specificService: "",
    serviceDescription: "",
    whatYouGet: "",
    basePrice: "200",
    priceType: "Fixed",
  });

  const steps = [
    {
      id: 1,
      title: "Basic Information",
      icon: FileText,
      completed: false,
      active: true,
    },
    {
      id: 2,
      title: "Availability & Location",
      icon: MapPin,
      completed: false,
      active: false,
    },
    {
      id: 3,
      title: "Service Details",
      icon: List,
      completed: false,
      active: false,
    },
    {
      id: 4,
      title: "Review & Publish",
      icon: Eye,
      completed: false,
      active: false,
    },
  ];

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Post a Job in Minutes
          </h1>
          <p className="text-gray-600">
            Post a job, receive proposals, and hire the right professional with
            confidence.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Left Sidebar - Steps */}
          <div className="w-80 bg-white rounded-lg border border-gray-200 p-6">
            {/* Progress Header */}
            <div className="mb-6">
              <div className="flex items-center justify-center mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center text-sm text-gray-600">
                Complete the Step {currentStep} of 4
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;
                const isLast = index === steps.length - 1;

                return (
                  <div key={step.id} className="relative">
                    {/* Connector Line */}
                    {!isLast && (
                      <div className="absolute left-4 top-8 w-0.5 h-12 bg-gray-200"></div>
                    )}

                    {/* Step Content */}
                    <div
                      className="flex items-center space-x-4 cursor-pointer group"
                      onClick={() => handleStepClick(step.id)}
                    >
                      {/* Step Icon */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : isCompleted
                            ? "bg-green-500 text-white"
                            : "bg-gray-100 border-2 border-gray-300 text-gray-400 group-hover:border-blue-300"
                        }`}
                      >
                        {isCompleted ? (
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <Icon className="w-4 h-4" />
                        )}
                      </div>

                      {/* Step Text */}
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">
                          Step {step.id}
                        </div>
                        <div
                          className={`text-sm font-medium transition-colors duration-200 ${
                            isActive
                              ? "text-blue-600"
                              : "text-gray-900 group-hover:text-blue-600"
                          }`}
                        >
                          {step.title}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              {/* Header Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 text-pink-600">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Post Your Job Details
                </h2>
                <p className="text-gray-600">
                  The more details you add, the better your service will attract
                  the right clients
                </p>
              </div>

              <div className="space-y-6">
                {/* Job Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kitchen cabinet installation"
                    value={formData.jobTitle}
                    onChange={(e) =>
                      handleInputChange("jobTitle", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Choose Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Choose Category <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        handleInputChange("category", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                    >
                      <option value="">
                        e.g. Kitchen cabinet installation
                      </option>
                      <option value="kitchen">Kitchen Services</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Specific Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Service
                  </label>
                  <div className="relative">
                    <select
                      value={formData.specificService}
                      onChange={(e) =>
                        handleInputChange("specificService", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                    >
                      <option value="">
                        e.g. Kitchen cabinet installation
                      </option>
                      <option value="installation">Installation</option>
                      <option value="repair">Repair</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Service Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Description
                  </label>
                  <textarea
                    placeholder="Kitchen cabinet installation"
                    rows={4}
                    value={formData.serviceDescription}
                    onChange={(e) =>
                      handleInputChange("serviceDescription", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>

                {/* What you get */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What you get ?
                  </label>
                  <textarea
                    placeholder="Kitchen cabinet installation"
                    rows={3}
                    value={formData.whatYouGet}
                    onChange={(e) =>
                      handleInputChange("whatYouGet", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>

                {/* Base Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Base Price
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="number"
                      value={formData.basePrice}
                      onChange={(e) =>
                        handleInputChange("basePrice", e.target.value)
                      }
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Price Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Type
                  </label>
                  <div className="relative">
                    <select
                      value={formData.priceType}
                      onChange={(e) =>
                        handleInputChange("priceType", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                    >
                      <option value="Fixed">Fixed</option>
                      <option value="Hourly">Hourly</option>
                      <option value="Project">Project Based</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Next Step Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition-colors duration-200 font-medium"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixListJobPosting;
