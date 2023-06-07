import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ChatCard from "./ChatCard";

function Chats() {
  const [lastSelected, setLastSelected] = useState(null);

  const handleCardClick = (index) => {
    setLastSelected(index);
  };

  const allFriends = [
    {
      username: "Imène",
      lastMessage: "You will find me at school",
      gender: "F",
    },
    {
      username: "Ikram",
      lastMessage: "I am on my way to you",
      gender: "F",
    },
    {
      username: "Nihel",
      lastMessage: "It was so delicious to be honest",
      gender: "F",
    },
    {
      username: "Fatima",
      lastMessage: "Where can we meet tot alk about it?",
      gender: "F",
    },
    {
      username: "Imène",
      lastMessage: "You will find me at school",
      gender: "F",
    },
    {
      username: "Ikram",
      lastMessage: "I am on my way to you",
      gender: "F",
    },
    {
      username: "Hadjer",
      lastMessage: "It was so delicious to be honest",
      gender: "F",
    },
    {
      username: "Fatima",
      lastMessage: "Where can we meet tot alk about it?",
      gender: "F",
    },
  ];
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
