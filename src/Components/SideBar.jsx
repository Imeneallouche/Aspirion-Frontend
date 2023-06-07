import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const SideBarElements = [
    { link: "/", img: "Home" },
    { link: "/Chat", img: "Chat" },
    { link: "/Settings", img: "Settings" },
  ];

  const additional = [
    { link: "/Profile", img: "Home" },
    { link: "/", img: "logout" },
  ];

  return (
    <div className="flex flex-col h-screen bg-blue">
      <div className="flex-1"></div>
      <div className="flex-1 flex flex-col items-center justify-center">
        {SideBarElements.map((element, indedx) => (
          <Link to={element.link}>
            <img
              src={require(`../Assets/${element.img}.png`)}
              alt={element.img}
              className="w-12 h-12 m-3 hover:bg-green p-3 rounded"
            />
          </Link>
        ))}
      </div>

      <div className="flex-1 flex flex-col items-center justify-end">
        {additional.map((element, index) => (
          <div>
            <Link to={element.link}>
              <img
                src={require(`../Assets/${element.img}.png`)}
                alt={element.img}
                className="w-12 h-12 m-3 hover:bg-green p-3 rounded"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
