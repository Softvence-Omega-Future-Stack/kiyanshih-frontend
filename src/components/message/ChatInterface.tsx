// ChatInterface.tsx
import React, { useState } from "react";
import ChatComponents from "./ChatComponents";

const ChatInterface: React.FC = () => {
  const [activeUserId, setActiveUserId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="h-[calc(100vh-220px)] flex  mt-10 w-full">
      <div className="flex w-full max-w-full mx-auto bg-white overflow-hidden md:gap-x-2">
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
