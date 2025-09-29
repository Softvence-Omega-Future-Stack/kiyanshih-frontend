import { useState } from "react";
import { ChevronLeft, Bell } from "lucide-react";

interface ProposalFormData {
  budget: string;
  timeline: string;
  aboutService: string;
  yourApproach: string;
  whyChooseMe: string;
  questionsForClient: string;
}

const SubmitProposal = () => {
  const [formData, setFormData] = useState<ProposalFormData>({
    budget: "200",
    timeline: "4 Hours",
    aboutService: "",
    yourApproach: "",
    whyChooseMe: "",
    questionsForClient: "",
  });

  const handleInputChange = (field: keyof ProposalFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleCancel = () => {
    console.log("Form cancelled");
    // Handle cancel logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-6">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-2">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Submit Proposal
          </h1>
          <p className="text-sm text-gray-600">
            Create a compelling proposal for this job
          </p>
        </div>

        {/* Service Details Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            Service Details
          </h2>
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
              alt="Service"
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Professional Home Cleaning
              </h3>
              <p className="text-sm text-gray-600 mb-1">Ontario, TX</p>
              <p className="text-sm text-gray-600">Posted by : Sarah Smith</p>
            </div>
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Budget:</span> $35/hr
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Timeline:</span> Any day this week
              works
            </p>
          </div>
        </div>

        {/* Pricing & Timeline Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Pricing & Timeline
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Pay by the hour with an agreed hourly rate
          </p>

          {/* Budget Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Budget <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
                className="w-full pl-8 pr-20 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="200"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                /hour
              </span>
            </div>
          </div>

          {/* Timeline Input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Timeline
            </label>
            <input
              type="text"
              value={formData.timeline}
              onChange={(e) => handleInputChange("timeline", e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="4 Hours"
            />
          </div>
        </div>

        {/* About Service Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            About Service
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Introduce yourself and explain why you're the right fit
          </p>
          <textarea
            value={formData.aboutService}
            onChange={(e) => handleInputChange("aboutService", e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            rows={5}
            placeholder="Kitchen cabinet installation"
          />
        </div>

        {/* Your Approach Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Your Approach (Optional)
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Describe how you plan to complete this job
          </p>
          <textarea
            value={formData.yourApproach}
            onChange={(e) => handleInputChange("yourApproach", e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            rows={5}
            placeholder="Kitchen cabinet installation"
          />
        </div>

        {/* Why Choose Me Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Why Choose Me? (Optional)
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Highlight your relevant experience and qualifications
          </p>
          <textarea
            value={formData.whyChooseMe}
            onChange={(e) => handleInputChange("whyChooseMe", e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            rows={5}
            placeholder="Kitchen cabinet installation"
          />
        </div>

        {/* Questions for Client Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Questions for Client (Optional)
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Any questions about the project requirements?
          </p>
          <textarea
            value={formData.questionsForClient}
            onChange={(e) =>
              handleInputChange("questionsForClient", e.target.value)
            }
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            rows={5}
            placeholder="Kitchen cabinet installation"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleCancel}
            className="px-8 py-2.5 text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Submit Proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitProposal;
