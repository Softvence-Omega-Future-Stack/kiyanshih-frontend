import React, { useState } from "react";
import { Trash2, Plus, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceDetailsForm = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const [services, setServices] = useState([
    "Basic cleaning service",
    "Basic cleaning service",
  ]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  console.log("imageFile", "", imageFile);
  const steps = [
    { number: 1, label: "Basic Information", icon: "📋" },
    { number: 2, label: "Availability & Location", icon: "📍" },
    { number: 3, label: "Service Details", icon: "📄" },
    { number: 4, label: "Review & Publish", icon: "✓" },
  ];

  const addService = () => {
    setServices([...services, ""]);
  };

  const removeService = (index: number) => {
    if (services.length > 1) {
      setServices(services.filter((_, i) => i !== index));
    }
  };

  const updateService = (index: number, value: string) => {
    const newServices = [...services];
    newServices[index] = value;
    setServices(newServices);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024) {
        alert("File size must be less than 100KB");
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-200 p-6">
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-gray-600 mb-4">
                Complete the Step 3 of 4
              </h2>
            </div>

            <div className="space-y-1">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    currentStep === step.number
                      ? "bg-blue-50 text-blue-600"
                      : currentStep > step.number
                      ? "text-gray-700"
                      : "text-gray-400"
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
                        currentStep === step.number ? "text-blue-600" : ""
                      }`}
                    >
                      {step.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-2xl">
              {/* Header */}
              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-50 rounded-lg mb-4">
                  <svg
                    className="w-8 h-8 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Service Details
                </h1>
                <p className="text-gray-600">
                  The more details you add, the better your service will attract
                  the right clients
                </p>
              </div>

              {/* Services Input */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  What include in your service
                </label>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={service}
                        onChange={(e) => updateService(index, e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="Enter service detail"
                      />
                      <button
                        onClick={() => removeService(index)}
                        className="p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        disabled={services.length === 1}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={addService}
                    className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                  >
                    <Plus size={20} />
                    Add Service
                  </button>
                </div>
              </div>

              {/* Image Upload */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Upload an Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-h-48 mx-auto rounded-lg"
                      />
                      <button
                        onClick={() => {
                          setImageFile(null);
                          setImagePreview("");
                        }}
                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Remove Image
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Upload className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Please upload square image, size less than 100KB
                      </p>
                      <div className="flex gap-3 justify-center">
                        <label className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                          Choose File
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                        <span className="px-6 py-2 text-gray-500">
                          No File Chosen
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <Link to="/provider-dashboard/fixedjob-list">
                  <button
                    onClick={handlePrevious}
                    className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                  >
                    Previous
                  </button>
                </Link>

                <Link to="/provider-dashboard/job-published">
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
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
  );
};

export default ServiceDetailsForm;
