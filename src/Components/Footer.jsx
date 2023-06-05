import React from "react";

function Footer() {
  const footerElements = [
    { text: "Imène ALLOUCHE", img: "instagram", link: "" },
    { text: "Imène ALLOUCHE", img: "facebook", link: "" },
    { text: "Discord", img: "instagram", link: "" },
    { text: "GitHub", img: "facebook", link: "" },
    { text: "LinkedIn", img: "instagram", link: "" },
  ];
  return (
    <div className="flex bg-dark-blue w-full p-5 justify-evenly">
      {footerElements.map((Element, index) => (
        <div className="flex items-center hover:cursor-pointer hover:text-green">
          <img
            src={require(`../Assets/${Element.img}.png`)}
            alt=""
            className="w-10 h-10 mr-5"
          />
          <p>{Element.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Footer;
