import { useState } from "react";
import { FileText, MapPin, List, Eye, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface AvailabilityData {
  serviceArea: string;
  availability: {
    [key: string]: {
      enabled: boolean;
      time: string;
    };
  };
}

const FixListAvailabilityStep = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [availabilityData, setAvailabilityData] = useState<AvailabilityData>({
    serviceArea: "",
    availability: {
      Monday: { enabled: false, time: "9:00-12:00" },
      Tuesday: { enabled: false, time: "9:00-12:00" },
      Wednesday: { enabled: false, time: "9:00-12:00" },
      Thursday: { enabled: false, time: "9:00-12:00" },
      Friday: { enabled: false, time: "9:00-12:00" },
      Saturday: { enabled: false, time: "9:00-12:00" },
      Sunday: { enabled: false, time: "9:00-12:00" },
    },
  });

  const steps = [
    {
      id: 1,
      title: "Basic Information",
      icon: FileText,
      completed: true,
      active: false,
    },
    {
      id: 2,
      title: "Availability & Location",
      icon: MapPin,
      completed: false,
      active: true,
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

  const handleServiceAreaChange = (value: string) => {
    setAvailabilityData((prev) => ({
      ...prev,
      serviceArea: value,
    }));
  };

  const handleDayToggle = (day: string) => {
    setAvailabilityData((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: {
          ...prev.availability[day],
          enabled: !prev.availability[day].enabled,
        },
      },
    }));
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

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

          {/* Right Content - Availability & Location Form */}
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              {/* Header Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-pink-600" />
                </div>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Availability & Location
                </h2>
                <p className="text-gray-600">
                  The more details you add, the better your service will attract
                  the right clients
                </p>
              </div>

              <div className="space-y-8">
                {/* Service Area */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Area <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Area"
                    value={availabilityData.serviceArea}
                    onChange={(e) => handleServiceAreaChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Availability
                  </label>

                  <div className="space-y-3">
                    {daysOfWeek.map((day) => (
                      <div
                        key={day}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-md"
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id={day}
                            checked={availabilityData.availability[day].enabled}
                            onChange={() => handleDayToggle(day)}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor={day}
                            className="text-sm font-medium text-gray-700"
                          >
                            {day}
                          </label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {availabilityData.availability[day].time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Link to="/provider-dashboard/fixedjob-post">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors duration-200 font-medium"
                    >
                      Previous
                    </button>
                  </Link>

                  <Link to="/provider-dashboard/fixedjob-details">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition-colors duration-200 font-medium"
                    >
                      Next Step
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixListAvailabilityStep;
