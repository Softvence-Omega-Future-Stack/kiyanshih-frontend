// chatDemoData.ts
import type { ChatUser, Message } from "./chatTypes";
import { currentUserId } from "./chatTypes";

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
