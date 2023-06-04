//import React, { useState } from "react";
//import axios from "axios";

export default function SignIn() {
  const handleSubmit = async (e) => {
    /*
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/SignIn", {});
    } catch (err) {
      console.log(err);
    }
    */
  };

  return (
    <div className="flex flex-col bg-dark-blue w-fit rounded-xl justify-center items-center">
      <form action={handleSubmit} className="flex flex-col p-10 justify-center">
        <div className="flex items-center">
          <img
            src={require("../Assets/AspirionLogo.png")}
            alt="Logo"
            className="h-24 w-24"
          />
          <h1 className="font-bold m-5 text-lg">ASPIRION</h1>
        </div>
        <input
          type="text"
          className="border border-purple rounded-xl my-4 p-2"
        />
        <input
          type="text"
          className="border border-purple rounded-xl my-4 p-2"
        />
        <button type="submit" className="bg-purple p-3 my-4 rounded-xl">
          Sign In
        </button>
        <div className="flex justify-between">
          <p className="p-2">DON'T HAVE AN ACCOUNT? </p>
          <button className="p-2 text-purple">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
