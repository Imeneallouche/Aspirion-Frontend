import React from "react";
import { messages } from "../RawData/Data";

function ChatArea() {
  const functionalities = [
    { Name: "videoCall", img: "videoCall" },
    { Name: "Call", img: "Call" },
    { Name: "Delete", img: "Delete" },
  ];
  const FriendPic = "../Assets/Avatars/M1.png";
  const Friendname = "Asma MOUHLI";
  const FriendStatus = "Online";

  /*






    */

  return (
    <div className="h-screen flex">
      <div className="bg-gray-700 m-5 rounded-lg grow flex flex-col p-5 flex-1">
        <div className="flex justify-between">
          <div className="flex-1 flex justify-start">
            <img
              src={require("../Assets/Avatars/F1.png")}
              alt=""
              className="w-12 h-12"
            />
            <div className="fle flex-col ml-2">
              <h1 className="font-bold">{Friendname}</h1>
              <p> {FriendStatus}</p>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            {functionalities.map((functionality, index) => (
              <img
                src={require(`../Assets/${functionality.img}.png`)}
                className="w-10 h-10 p-2 mx-3 rounded-full hover:bg-green hover:cursor-pointer"
                alt={functionalities.Name}
              />
            ))}
          </div>
        </div>

        {/*
          
          
          
          
          
          
          */}
        <ul className="grow flex flex-col py-5 overflow-y-scroll scrollbar-hide">
          {messages.map((message, index) => (
            <div
              className={`my-1 flex ${
                message.me ? "justify-end" : "justify-start"
              }`}
            >
              <p
                className={`p-2 max-w-[80%] rounded-xl ${
                  message.me ? "bg-light-blue" : "bg-slate-400"
                }`}
              >
                {message.message}
              </p>
            </div>
          ))}
        </ul>

        {/*
          
          
          
          
          
          
          */}

        <div className="flex">
          <input
            type="text"
            className="flex-1 bg-gray-50 border border-light-blue text-gray-900 text-sm rounded-lg focus:ring-light-blue focus:border-light-blue block w-full pl-10 p-5 dark:bg-gray-700 dark:border-light-blue dark:placeholder-light-blue dark:text-white dark:focus:ring-light-blue dark:focus:border-light-blue"
            placeholder="Type something ..."
          />
          <button className="ml-5"> Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;
