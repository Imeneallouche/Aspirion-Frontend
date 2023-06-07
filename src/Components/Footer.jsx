import React from "react";

function Footer() {
  const footerElements = [
    {
      text: "Imène ALLOUCHE",
      img: "instagram",
      link: "https://www.instagram.com/imenealch/",
    },
    {
      text: "Imène ALLOUCHE",
      img: "facebook",
      link: "https://www.facebook.com/imene.alch.5/",
    },
    { text: "Im3ne#6939", img: "Discord", link: "" },
    {
      text: "Imeneallouche",
      img: "GitHub",
      link: "https://github.com/Imeneallouche",
    },
    {
      text: "LinkedIn",
      img: "LinkedIn",
      link: "https://www.linkedin.com/in/imene-allouche-045b21226/",
    },
  ];
  return (
    <div className="flex bg-dark-blue w-full p-5 justify-evenly">
      {footerElements.map((Element, index) => (
        <a
          href={Element.link}
          target="_blank"
          className="flex items-center hover:cursor-pointer hover:text-green"
        >
          <img
            src={require(`../Assets/${Element.img}.png`)}
            alt=""
            className="w-10 h-10 mr-5"
          />
          <p>{Element.text}</p>
        </a>
      ))}
    </div>
  );
}

export default Footer;
