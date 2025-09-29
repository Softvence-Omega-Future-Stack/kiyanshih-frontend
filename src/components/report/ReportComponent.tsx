import React, { useState } from 'react';
import { Search, Calendar, Download, ChevronLeft, ChevronRight, Eye, MessageSquareWarning } from 'lucide-react';

interface Transaction {
  id: string;
  sl: string;
  transactionId: string;
  date: string;
  from: string;
  amount: string;
}

const ReportComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data with more transactions to demonstrate pagination
  const allTransactions: Transaction[] = [
    {
      id: '1',
      sl: 'SL',
      transactionId: '704d55ec-fcec-4fee',
      date: '25-Aug-2025 11:30am',
      from: 'Charlotte Davis',
      amount: '17,90.89$'
    },
    {
      id: '2',
      sl: 'SL',
      transactionId: '704d55ec-fcec-4fee',
      date: '25-Aug-2025 11:30am',
      from: 'Charlotte Davis',
      amount: '17,90.89$'
    },
    {
      id: '3',
      sl: 'SL',
      transactionId: '704d55ec-fcec-4fee',
      date: '25-Aug-2025 11:30am',
      from: 'Charlotte Davis',
      amount: '17,90.89$'
    },
    {
      id: '4',
      sl: 'SL',
      transactionId: '704d55ec-fcec-4fee',
      date: '25-Aug-2025 11:30am',
      from: 'Charlotte Davis',
      amount: '17,90.89$'
    },
    {
      id: '5',
      sl: 'SL',
      transactionId: '704d55ec-fcec-4fee',
      date: '25-Aug-2025 11:30am',
      from: 'Charlotte Davis',
      amount: '17,90.89$'
    },
    {
      id: '6',
      sl: 'SL',
      transactionId: '704d55ec-fcec-4fee',
      date: '25-Aug-2025 11:30am',
      from: 'Charlotte Davis',
      amount: '17,90.89$'
    },
    // Additional data for pagination
    {
      id: '7',
      sl: 'SL',
      transactionId: '805e66fd-gdgd-5gff',
      date: '24-Aug-2025 10:15am',
      from: 'John Smith',
      amount: '25,50.00$'
    },
    {
      id: '8',
      sl: 'SL',
      transactionId: '906f77ge-hehe-6hgg',
      date: '23-Aug-2025 09:45am',
      from: 'Sarah Johnson',
      amount: '33,75.25$'
    },
    {
      id: '9',
      sl: 'SL',
      transactionId: '107g88hf-ifif-7ihh',
      date: '22-Aug-2025 08:30am',
      from: 'Michael Brown',
      amount: '42,10.50$'
    },
    {
      id: '10',
      sl: 'SL',
      transactionId: '208h99ig-jgjg-8jii',
      date: '21-Aug-2025 07:20am',
      from: 'Emily Wilson',
      amount: '15,80.75$'
    },
    {
      id: '11',
      sl: 'SL',
      transactionId: '309i00jh-kkhk-9kjj',
      date: '20-Aug-2025 06:10am',
      from: 'David Lee',
      amount: '28,95.00$'
    },
    {
      id: '12',
      sl: 'SL',
      transactionId: '410j11ki-llil-0lkk',
      date: '19-Aug-2025 05:05am',
      from: 'Lisa Anderson',
      amount: '37,60.35$'
    },
    {
      id: '13',
      sl: 'SL',
      transactionId: '511k22lj-mmjm-1mll',
      date: '18-Aug-2025 04:50am',
      from: 'Robert Taylor',
      amount: '19,25.80$'
    },
    {
      id: '14',
      sl: 'SL',
      transactionId: '612l33mk-nnkn-2nmm',
      date: '17-Aug-2025 03:35am',
      from: 'Jennifer White',
      amount: '44,15.90$'
    },
    {
      id: '15',
      sl: 'SL',
      transactionId: '713m44nl-oolo-3onn',
      date: '16-Aug-2025 02:25am',
      from: 'Christopher Harris',
      amount: '31,40.60$'
    }
  ];

  // Filter transactions based on search
  const filteredTransactions = allTransactions.filter(transaction =>
    transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.from.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex);

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-[calc(100vh-15rem)] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Total Balance Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-2">Total Balance</p>
                <p className="text-3xl font-bold text-gray-900">22020.00 $</p>
              </div>
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <MessageSquareWarning className="text-orange-500 w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Pending Balance Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-2">Pending Balance</p>
                <p className="text-3xl font-bold text-gray-900">1000.00 $</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Eye className="text-green-500 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          {/* Search and Filter Section */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search Input */}
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Search className="text-blue-500 w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search by transaction id"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700"
              />
            </div>

            {/* Date Range Button */}
            <button className="flex items-center gap-3 px-5 py-3.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors bg-white">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700 font-medium">Date Range</span>
            </button>

            {/* Export Button */}
            <button className="flex items-center gap-3 px-6 py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              <Download className="w-5 h-5" />
              <span>Export in Excel</span>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 bg-gray-50">SL</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 bg-gray-50">Transaction ID</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 bg-gray-50 hidden sm:table-cell">Transaction Date</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 bg-gray-50 hidden md:table-cell">Transaction From</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 bg-gray-50">Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {currentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-sm text-gray-600 font-medium">{transaction.id}</td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="text-sm text-gray-900 font-medium">{transaction.transactionId}</p>
                        <div className="sm:hidden mt-1 space-y-1">
                          <p className="text-xs text-gray-500">{transaction.date}</p>
                          <p className="text-xs text-gray-600 md:hidden">{transaction.from}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600 hidden sm:table-cell">{transaction.date}</td>
                    <td className="py-4 px-6 text-sm text-gray-600 hidden md:table-cell">{transaction.from}</td>
                    <td className="py-4 px-6 text-sm font-semibold text-gray-900">{transaction.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <p className='hidden sm:inline'>Previous</p>
            </button>

            <div className="flex gap-1 mx-4">
              {/* First page */}
              <button
                onClick={() => handlePageChange(1)}
                className={`w-8 h-8 text-sm rounded transition-colors ${
                  currentPage === 1
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                1
              </button>

              {/* Second page */}
              {totalPages > 1 && (
                <button
                  onClick={() => handlePageChange(2)}
                  className={`w-8 h-8 text-sm rounded transition-colors ${
                    currentPage === 2
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  2
                </button>
              )}

              {/* Third page */}
              {totalPages > 2 && (
                <button
                  onClick={() => handlePageChange(3)}
                  className={`w-8 h-8 text-sm rounded transition-colors ${
                    currentPage === 3
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  3
                </button>
              )}

              {/* Ellipsis and additional pages */}
              {totalPages > 3 && (
                <>
                  <span className="px-2 py-1 text-gray-400 text-sm">...</span>
                  {currentPage > 3 && currentPage < totalPages && (
                    <button
                      onClick={() => handlePageChange(currentPage)}
                      className="w-8 h-8 text-sm rounded bg-blue-600 text-white"
                    >
                      {currentPage}
                    </button>
                  )}
                </>
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              <p className='hidden sm:inline'>Next</p>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Search Results Info */}
          {searchTerm && (
            <div className="mt-4 text-sm text-gray-600 text-center">
              Showing {currentTransactions.length} of {filteredTransactions.length} results for "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;