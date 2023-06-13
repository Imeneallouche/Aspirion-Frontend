import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ChatCard from "./ChatCard";
import { allFriends } from "../RawData/Data";

function Chats() {
  const [lastSelected, setLastSelected] = useState(null);

  const handleCardClick = (index) => {
    setLastSelected(index);
  };

  return (
    <div className="h-screen flex flex-col ml-16 py-5">
      <SearchBar />
      <ul className="mt-5 overflow-y-scroll scrollbar-hide">
        {" "}
        {allFriends.map((friend, index) => (
          <ChatCard
            username={friend.username}
            lastMessage={friend.lastMessage}
            gender={friend.gender}
            index={index}
            isSelected={index === lastSelected}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Chats;
