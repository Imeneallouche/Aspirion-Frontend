import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const headerElements = [
    { text: "About", link: "/About" },
    { text: "Sign In", link: "/" },
    { text: "Sign Up", link: "/SignUp" },
  ];
  return (
    <div className="bg-dark-blue w-full flex justify-between items-center">
      <img
        src={require("../Assets/AspirionLogo.png")}
        className="w-20 h-20 hover:cursor-pointer"
        alt=""
      />
      <div className="flex">
        {headerElements.map((element, index) => (
          <Link to={element.link}>
            <p className="mx-10 hover:underline hover:cursor-pointer hover:text-green">
              {element.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
