import {
  AlertTriangle,
  ShieldCheck,
  MessageSquare,
  Eye,
  Star,
  FileText,
} from "lucide-react";

const OverviewProviderDashboard = () => {
  return (
    <div className=" bg-gray-50 p-6 py-20">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Application Limit Alert */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-orange-800 font-semibold mb-1">
                Application Limit Reached
              </h3>
              <p className="text-orange-700 text-sm mb-3">
                You've reached your monthly limit of 2 applications. Upgrade to
                unlimited to receive more client inquiries.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Upgrade to Unlimited-$99/month
              </button>
            </div>
          </div>
        </div>

        {/* Verification Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-blue-800 font-semibold mb-1">
                Get Verified by Certn
              </h3>
              <p className="text-blue-700 text-sm">
                Boost your credibility and get 3x more bookings with
                professional background verification
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Applications This Month */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="text-3xl font-bold text-gray-900 mb-1">2/2</div>
                <div className="text-sm text-gray-600">
                  Applications This Month
                </div>
              </div>
              <div className="bg-orange-100 p-2 rounded-lg">
                <MessageSquare className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>

          {/* Total Bookings Served */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  8/10
                </div>
                <div className="text-sm text-gray-600">
                  Total Bookings served
                </div>
              </div>
              <div className="bg-green-100 p-2 rounded-lg">
                <Eye className="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  4.8{" "}
                  <span className="text-lg text-gray-500">(100 reviews)</span>
                </div>
                <div className="text-sm text-gray-600">Good Rating</div>
              </div>
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
          </div>

          {/* Submitted Proposals */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="text-3xl font-bold text-gray-900 mb-1">2</div>
                <div className="text-sm text-gray-600">Submitted Proposals</div>
              </div>
              <div className="bg-cyan-100 p-2 rounded-lg">
                <FileText className="w-5 h-5 text-cyan-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewProviderDashboard;
