import React, { useState } from "react";

function ChatCard({
  username,
  lastMessage,
  gender,
  index,
  isSelected,
  onClick,
}) {
  //const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`flex items-center rounded-xl px-5 py-3 mb-3 ${
        isSelected ? "bg-light-blue" : "bg-blue"
      } hover:bg-light-blue hover:cursor-pointer`}
      onClick={onClick}
    >
      <img
        src={
          gender == "F"
            ? require(`../Assets/Avatars/F${index % 5}.png`)
            : require(`../Assets/Avatars/M${index % 5}.png`)
        }
        alt=""
        className="w-16 h-16"
      />
      <div className="flex flex-col mx-6">
        <h1 className="text-lg font-semibold">{username}</h1>
        <p className="w-64">{lastMessage}</p>
      </div>

      <div className="w-5 h-5 rounded-full bg-green"></div>
    </div>
  );
}

export default ChatCard;
