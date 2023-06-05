import React from "react";

function Header() {
  const headerElements = [
    { text: "About", link: "" },
    { text: "Sign In", link: "" },
    { text: "Sign Up", link: "" },
  ];
  return (
    <div className="bg-dark-blue w-full flex justify-between items-center">
      <img
        src={require("../Assets/AspirionLogo.png")}
        className="w-20 h-20"
        alt=""
      />
      <div className="flex">
        {headerElements.map((element, index) => (
          <p className="mx-10 hover:underline hover:cursor-pointer hover:text-green">
            {element.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Header;
