import React from "react";
import SideBar from "../Components/SideBar";
import Chats from "../Components/Chats";
import ChatArea from "../Components/ChatArea";

function ChatPage() {
  return (
    <div className="w-full flex bg-dark-blue">
      <SideBar />
      <Chats />
      <ChatArea className="flex-1" />
    </div>
  );
}

export default ChatPage;
