import React from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { Search, User, Send, ArrowLeft, MoreVertical, Paperclip } from "lucide-react";

// ========== Types ==========
export interface ChatUser {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline";
  lastMessage: string;
  lastSeen: string;
  unread?: number;
}

export interface Message {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: string;
  isSent: boolean;
}

// ========== Demo Data ==========
export const currentUserId = "current";

export const demoUsers: ChatUser[] = [
  { id: "1", name: "Charlotte Davis", avatar: "CD", status: "online", lastMessage: "You: I will send you...", lastSeen: "Active Now" },
  { id: "2", name: "Albert Flores", avatar: "AF", status: "offline", lastMessage: "You: I will send you...", lastSeen: "2h ago" },
  { id: "3", name: "Kristin Watson", avatar: "KW", status: "offline", lastMessage: "You: I will send you...", lastSeen: "Yesterday" },
];

export const demoMessages: { [key: string]: Message[] } = {
  "1": [
    { id: "1", userId: "1", userName: "Charlotte Davis", content: "Hi Mike! I See your service and I have a few questions about the timeline and materials.", timestamp: "10 min ago", isSent: false },
    { id: "2", userId: currentUserId, userName: "You", content: "Hi Mike! Thanks for your proposal. I have a few questions about the timeline and materials.", timestamp: "10 min ago", isSent: true },
    { id: "3", userId: "1", userName: "Charlotte Davis", content: "Hi Mike! Thanks for your proposal. I have a few questions about the timeline and materials.", timestamp: "10 min ago", isSent: false },
  ],
  "2": [
    { id: "1", userId: "2", userName: "Albert Flores", content: "Hey! How are you doing?", timestamp: "2h ago", isSent: false },
  ],
  "3": [
    { id: "1", userId: "3", userName: "Kristin Watson", content: "Thanks for the update!", timestamp: "Yesterday", isSent: false },
  ],
};

// ========== Props ==========
interface ChatComponentsProps {
  activeUserId: string | null;
  setActiveUserId: (id: string | null) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  messageInput: string;
  setMessageInput: (value: string) => void;
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

// ========== Component ==========
const ChatComponents: React.FC<ChatComponentsProps> = ({
  activeUserId,
  setActiveUserId,
  searchQuery,
  setSearchQuery,
  messageInput,
  setMessageInput,
  showSidebar,
  setShowSidebar,
}) => {
  const activeUser = demoUsers.find((u) => u.id === activeUserId) || null;
  const messages = activeUserId ? demoMessages[activeUserId] || [] : [];

  const filteredUsers = demoUsers.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUserSelect = (userId: string) => {
    setActiveUserId(userId);
    setShowSidebar(false);
  };

  const handleBack = () => {
    setActiveUserId(null);
    setShowSidebar(true);
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) setMessageInput("");
  };

  // ===== Event Handlers with proper types =====
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setMessageInput(e.target.value);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`${showSidebar ? "flex" : "hidden"} md:flex w-full md:w-80 border-r border-gray-200 flex-col`}>
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Message..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => handleUserSelect(user.id)}
              className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 transition-colors ${activeUserId === user.id ? "bg-blue-50" : ""}`}
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">{user.avatar}</span>
                </div>
                {user.status === "online" && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />}
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">{user.name}</h4>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 truncate">{user.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Main */}
      <div className={`${!showSidebar || activeUserId ? "flex" : "hidden"} md:flex flex-1 flex-col bg-white`}>
        {activeUser ? (
          <>
            {/* Header */}
            <div className="bg-white px-4 py-3 flex items-center border-b border-gray-200">
              <button className="md:hidden mr-3 text-gray-600 hover:text-gray-900" onClick={handleBack}>
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center flex-1">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white text-sm font-semibold">{activeUser.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-semibold text-gray-900 truncate">{activeUser.name}</h2>
                  <p className="text-xs text-green-600 font-medium">{activeUser.lastSeen}</p>
                </div>
              </div>
              <button className="text-gray-600 hover:text-gray-900 ml-2">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Company Info */}
            <div className="px-4 py-3 border-b border-gray-200">
              <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-3">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏗️</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900">Carpentry & Woodwork</h3>
                  <p className="text-xs text-gray-600 mt-0.5">Mike Handyman service</p>
                  <p className="text-xs text-gray-500 mt-0.5">Toronto, Canada</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[75%] ${message.isSent ? "order-2" : "order-1"}`}>
                    <div className={`rounded-2xl px-4 py-2.5 ${message.isSent ? "bg-blue-600 text-white rounded-br-sm" : "bg-white text-gray-900 rounded-bl-sm shadow-sm"}`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    <p className={`text-xs text-gray-500 mt-1 px-2 ${message.isSent ? "text-right" : "text-left"}`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="bg-white border-t border-gray-200 p-4">
              <div className="flex items-end gap-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 mb-1">
                  <Paperclip className="w-5 h-5" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    value={messageInput}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <button onClick={handleSendMessage} className="p-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-1">
                  <Send className="w-5 h-5" />
                </button>
                <button className="px-4 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium whitespace-nowrap mb-1">
                  Create Proposal
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium">Select a conversation</p>
              <p className="text-sm mt-2">Choose a contact to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatComponents;
