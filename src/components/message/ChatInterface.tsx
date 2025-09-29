// ChatInterface.tsx
import React, { useState } from "react";
import ChatComponents, { demoUsers } from "./ChatComponents";

const ChatInterface: React.FC = () => {
  const [activeUserId, setActiveUserId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="h-[calc(100vh-200px)] w-[68vw] flex bg-gray-50">
      <div className="flex w-full max-w-full mx-auto bg-white shadow-lg overflow-hidden md:gap-x-2">
        <ChatComponents
          activeUserId={activeUserId}
          setActiveUserId={setActiveUserId}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>
    </div>
  );
};

export default ChatInterface;
