import React from "react";

function ChatArea() {
  return (
    <div className="bg-gray-700 m-6 rounded-lg grow flex flex-col p-5">
      <div className="flex">
        <div className="flex-1 flex justify-start"></div>

        <div className="flex-1 flex justify-end">
          <img
            src={require("../Assets/videoCall.png")}
            className="w-10 h-10 p-2 mx-3 rounded-full hover:bg-green hover:cursor-pointer"
            alt=""
          />
          <img
            src={require("../Assets/Call.png")}
            className="w-10 h-10 p-3 mx-3 rounded-full hover:bg-green hover:cursor-pointer"
            alt=""
          />
          <img
            src={require("../Assets/Delete.png")}
            className="w-10 h-10 p-3 mx-3 rounded-full hover:bg-green hover:cursor-pointer"
            alt=""
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ChatArea;
