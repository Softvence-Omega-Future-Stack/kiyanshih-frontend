const ServicePublishForm = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 border border-blue-200">
      {/* Header */}
      <div className="flex items-center justify-center mb-4">
        <div className="text-green-500 text-3xl mr-2">✅</div>
        <div>
          <h1 className="text-xl font-semibold">Review & Publish</h1>
          <p className="text-sm text-gray-500">
            The more details you add, the better your service will attract the
            right clients
          </p>
        </div>
      </div>

      {/* Job Details Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Job Details</h2>
          <span className="text-gray-500 cursor-pointer">▼</span>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <p className="mt-1 text-gray-900">Kitchen Cabinet Installation</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Service Category
            </label>
            <div className="mt-1 inline-flex items-center px-3 py-1 bg-gray-100 rounded-md text-gray-900">
              Home Improvement <span className="mx-2">•</span> Installation
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <p className="mt-1 text-gray-700">
              Upgrade your kitchen with professional cabinet installation
              tailored to your space and style. Our skilled experts handle
              everything from assembling and mounting cabinets to ensuring
              perfect alignment, secure fittings, and a polished finish.
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Base Price
            </label>
            <p className="mt-1 text-gray-900">Maximum: $200/hour</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hourly Rate
            </label>
            <div className="mt-1 h-8 bg-white border border-gray-300 rounded-md"></div>{" "}
            {/* Empty input-like */}
          </div>
        </div>
      </div>

      {/* Availability & Location Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Availability & Location</h2>
          <span className="text-gray-500 cursor-pointer">▼</span>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Service Area: California
            </label>
          </div>
          <div>
            <p className="text-gray-900">Monday: 09-19:00</p>
            <p className="text-gray-900">Tuesday: 09-19:00</p>
            <p className="text-gray-900">Wednesday: 09-19:00</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Image</h2>
          <span className="text-gray-500 cursor-pointer">▼</span>
        </div>
        <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center">
          {/* Placeholder for image */}
          <p className="text-gray-500">Kitchen Image</p>
        </div>
      </div>

      {/* Include in your service Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium">Include in your service</h2>
          <span className="text-gray-500 cursor-pointer">▼</span>
        </div>
        <p className="text-gray-900">Basic cleaning service</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400">
          Previous
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Publish Service
        </button>
      </div>
    </div>
  );
};

export default ServicePublishForm;
