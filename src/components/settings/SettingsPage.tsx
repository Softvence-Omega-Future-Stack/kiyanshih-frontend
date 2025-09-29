import React, { useState } from 'react';
import { Eye, EyeOff, Trash2, Check, Clock } from 'lucide-react';

interface PaymentMethod {
  id: string;
  cardNumber: string;
  expiryDate: string;
  isDefault: boolean;
}

interface PaymentHistory {
  id: string;
  title: string;
  date: string;
  cardNumber: string;
  amount: string;
}

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('preferences');
  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false
  });
  
  const [settings, setSettings] = useState({
    showContactInfo: true,
    publicProfile: true,
    allNotifications: true,
    emailNotifications: true,
    smsNotifications: true,
    bookingReminders: true
  });

  const [passwords, setPasswords] = useState({
    old: '',
    new: '',
    confirm: ''
  });

  const [timeRange, setTimeRange] = useState({
    start: '12:00 AM',
    end: '11:59 PM'
  });

  const [selectedDays, setSelectedDays] = useState({
    saturday: false,
    sunday: true,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false
  });

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      cardNumber: 'Visa ******4242',
      expiryDate: '15/01/2024',
      isDefault: true
    },
    {
      id: '2',
      cardNumber: 'Visa ******4255',
      expiryDate: '15/02/2024',
      isDefault: false
    }
  ]);

  const paymentHistory: PaymentHistory[] = [
    {
      id: '1',
      title: 'Kitchen Cabinet Installation',
      date: '15/02/2024',
      cardNumber: 'Visa ******4255',
      amount: '$1220.00'
    },
    {
      id: '2',
      title: 'Wedding Photography',
      date: '15/02/2024',
      cardNumber: 'Visa ******3255',
      amount: '$110.00'
    }
  ];

  const tabs = [
    { id: 'preferences', label: 'Preferences Settings' },
    { id: 'payment', label: 'Payment Setting' },
    { id: 'notification', label: 'Notification Settings' },
    { id: 'security', label: 'Security Setting' },
    { id: 'availability', label: 'Service Availability' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms & Condition' }
  ];

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const setAsDefault = (cardId: string) => {
    setPaymentMethods(prev => prev.map(card => ({
      ...card,
      isDefault: card.id === cardId
    })));
  };

  const removeCard = (cardId: string) => {
    setPaymentMethods(prev => prev.filter(card => card.id !== cardId));
  };

  const toggleDay = (day: keyof typeof selectedDays) => {
    setSelectedDays(prev => ({ ...prev, [day]: !prev[day] }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'preferences':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Preferences</h2>
              <p className="text-gray-600 text-sm mb-6">Customize your experience</p>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="font-medium text-gray-900">Show contact info to User</h3>
                    <p className="text-sm text-gray-600">Allow providers to see your contact details</p>
                  </div>
                  <button
                    onClick={() => toggleSetting('showContactInfo')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.showContactInfo ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.showContactInfo ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="font-medium text-gray-900">Public profile</h3>
                    <p className="text-sm text-gray-600">Make your profile visible to providers</p>
                  </div>
                  <button
                    onClick={() => toggleSetting('publicProfile')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.publicProfile ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.publicProfile ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'notification':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="font-medium text-gray-900">All Notification</h3>
                  </div>
                  <button
                    onClick={() => toggleSetting('allNotifications')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.allNotifications ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.allNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="font-medium text-gray-900">Email Notifications</h3>
                    <p className="text-sm text-gray-600">Receive notifications via email</p>
                  </div>
                  <button
                    onClick={() => toggleSetting('emailNotifications')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="font-medium text-gray-900">SMS Notifications</h3>
                    <p className="text-sm text-gray-600">Receive notifications via text message</p>
                  </div>
                  <button
                    onClick={() => toggleSetting('smsNotifications')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.smsNotifications ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="font-medium text-gray-900">Booking Reminders</h3>
                    <p className="text-sm text-gray-600">Get reminded about upcoming bookings</p>
                  </div>
                  <button
                    onClick={() => toggleSetting('bookingReminders')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.bookingReminders ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.bookingReminders ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Login & Security Setting */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Login & Security Setting</h2>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Update Password</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Your Old password</label>
                      <div className="relative">
                        <input
                          type={showPasswords.old ? 'text' : 'password'}
                          value={passwords.old}
                          onChange={(e) => setPasswords(prev => ({ ...prev, old: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('old')}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPasswords.old ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      <button className="text-xs text-blue-600 mt-1">Hide</button>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">New password</label>
                      <div className="relative">
                        <input
                          type={showPasswords.new ? 'text' : 'password'}
                          value={passwords.new}
                          onChange={(e) => setPasswords(prev => ({ ...prev, new: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('new')}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPasswords.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      <button className="text-xs text-blue-600 mt-1">Hide</button>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Confirm password</label>
                      <div className="relative">
                        <input
                          type={showPasswords.confirm ? 'text' : 'password'}
                          value={passwords.confirm}
                          onChange={(e) => setPasswords(prev => ({ ...prev, confirm: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility('confirm')}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPasswords.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      <button className="text-xs text-blue-600 mt-1">Hide</button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                      <button className="h-10 py-2 text-[.8rem] w-[10rem] sm:text-base text-nowrap bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Update Password
                      </button>
                      <button className="h-10 py-2 text-nowrap text-[.8rem] w-[10rem] sm:text-base border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Account Actions</h3>
                  <button className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>

              {/* Verification */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Verification</h2>
                <p className="text-sm text-gray-600 mb-6">Enhance your credibility with verification</p>
                
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Background Check</h4>
                          <p className="text-xs text-gray-600">Verified by Certn</p>
                          <p className="text-xs text-gray-500">Valid until 15/01/2025</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Verified</span>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-gray-400">?</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Identity Verification</h4>
                          <p className="text-xs text-gray-600">Verify Government ID</p>
                          <p className="text-xs text-gray-500">Valid until 15/01/2025</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                        Verify now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Payment Methods</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <span className="text-[.75rem] sm:text-sm">+</span>
                  <p className='hidden sm:inline'>Add Payment Gateway</p>
                </button>
              </div>

              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col flex-wrap sm:flex-row justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                          VISA
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{method.cardNumber}</p>
                          <p className="text-sm text-gray-600">Expire date: {method.expiryDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {method.isDefault ? (
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded">Default</span>
                        ) : (
                          <button
                            onClick={() => setAsDefault(method.id)}
                            className="px-3 py-1 bg-gray-800 text-white text-sm rounded hover:bg-gray-900 transition-colors"
                          >
                            Set as Default
                          </button>
                        )}
                        <button
                          onClick={() => removeCard(method.id)}
                          className="p-1 text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment History</h2>
              <div className="space-y-4">
                {paymentHistory.map((payment) => (
                  <div key={payment.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">{payment.title}</h3>
                        <p className="text-sm text-gray-600">Date: {payment.date} · {payment.cardNumber}</p>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">{payment.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'availability':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Service Provider Availability Schedules</h2>
              <p className="text-gray-600 text-sm mb-8">Using the current time and the system allows your availability to customers in app & web enabling them to make successful bookings</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Service Providing Time */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Providing Time</h3>
                  <p className="text-gray-600 text-sm mb-4">Choose time range when you want to provide services.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select Time Range *</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            value={timeRange.start}
                            onChange={(e) => setTimeRange(prev => ({ ...prev, start: e.target.value }))}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          />
                        </div>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            value={timeRange.end}
                            onChange={(e) => setTimeRange(prev => ({ ...prev, end: e.target.value }))}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-4">
                        {Object.entries({
                          saturday: 'Saturday',
                          sunday: 'Sunday',
                          monday: 'Monday',
                          tuesday: 'Tuesday',
                          wednesday: 'Wednesday',
                          thursday: 'Thursday'
                        }).map(([key, label]) => (
                          <label key={key} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedDays[key as keyof typeof selectedDays]}
                              onChange={() => toggleDay(key as keyof typeof selectedDays)}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{label}</span>
                          </label>
                        ))}
                      </div>
                      
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedDays.friday}
                          onChange={() => toggleDay('friday')}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Friday</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Weekend */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Weekend</h3>
                  <p className="text-gray-600 text-sm mb-4">Select the systems you want to temporarily deactivate for maintenance</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Privacy Policy</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-600">Privacy policy content will be displayed here.</p>
              </div>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Terms & Condition</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-600">Terms and conditions content will be displayed here.</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>
        
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-scroll lg:overflow-x-hidden scrollbar-hide-x-auto -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={activeTab === tab.id}
                    readOnly
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-6 lg:p-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;