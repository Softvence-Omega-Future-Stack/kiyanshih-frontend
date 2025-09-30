import { useState } from "react"

const NotificationTab = () => {
    const [allNotifications, setAllNotifications] = useState(true)
    const [emailNotifications, setEmailNotifications] = useState(true)
    const [smsNotifications, setSmsNotifications] = useState(true)
    const [bookingReminders, setBookingReminders] = useState(true)

    return (
        <div className="w-full mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg">
                {/* Header */}
                <div className="px-6 py-5 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Notification</h2>
                    {/* All Notification */}
                    <div className="flex items-center gap-4 mt-4 mb-2">
                        {/* Toggle Switch */}
                        <button
                            role="switch"
                            aria-checked={allNotifications}
                            onClick={() => setAllNotifications(!allNotifications)}
                            className={`relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${allNotifications ? 'bg-blue-600' : 'bg-gray-200'
                                }`}
                        >
                            <span
                                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${allNotifications ? 'translate-x-6' : 'translate-x-0.5'
                                    }`}
                            />
                        </button>
                        <div className="text-sm font-medium text-gray-900">All Notification</div>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 py-6 space-y-6">


                    {/* Email Notifications */}
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="text-sm font-medium text-gray-900">Email Notifications</div>
                            <div className="text-sm text-gray-500">Receive notifications via email</div>
                        </div>

                        {/* Toggle Switch */}
                        <button
                            role="switch"
                            aria-checked={emailNotifications}
                            onClick={() => setEmailNotifications(!emailNotifications)}
                            className={`relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
                                }`}
                        >
                            <span
                                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${emailNotifications ? 'translate-x-6' : 'translate-x-0.5'
                                    }`}
                            />
                        </button>
                    </div>

                    {/* SMS Notifications */}
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="text-sm font-medium text-gray-900">SMS Notifications</div>
                            <div className="text-sm text-gray-500">Receive notifications via text message</div>
                        </div>

                        {/* Toggle Switch */}
                        <button
                            role="switch"
                            aria-checked={smsNotifications}
                            onClick={() => setSmsNotifications(!smsNotifications)}
                            className={`relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${smsNotifications ? 'bg-blue-600' : 'bg-gray-200'
                                }`}
                        >
                            <span
                                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${smsNotifications ? 'translate-x-6' : 'translate-x-0.5'
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Booking Reminders */}
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="text-sm font-medium text-gray-900">Booking Reminders</div>
                            <div className="text-sm text-gray-500">Get reminded about upcoming bookings</div>
                        </div>

                        {/* Toggle Switch */}
                        <button
                            role="switch"
                            aria-checked={bookingReminders}
                            onClick={() => setBookingReminders(!bookingReminders)}
                            className={`relative inline-flex h-6 w-11 items-center cursor-pointer rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${bookingReminders ? 'bg-blue-600' : 'bg-gray-200'
                                }`}
                        >
                            <span
                                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${bookingReminders ? 'translate-x-6' : 'translate-x-0.5'
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationTab;