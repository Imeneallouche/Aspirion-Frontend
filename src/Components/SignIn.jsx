import React, { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/SignIn", {
        username,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col bg-dark-blue w-fit rounded-xl justify-center items-center">
      <form
        action={handleSubmit}
        className="flex flex-col py-10 px-20 justify-center items-center"
      >
        <div className="flex items-center my-5">
          <img
            src={require("../Assets/AspirionLogo.png")}
            alt="Logo"
            className="h-28 w-28"
          />
          <h1 className="font-bold m-5 text-2xl">ASPIRION</h1>
        </div>
        <input
          type="email"
          placeholder="your email ..."
          className="border-2 border-green rounded-xl my-4 p-4 w-full text-blue"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="your password ..."
          className="border-2 border-green rounded-xl my-4 p-4 w-full text-blue"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          type="submit"
          className="bg-green p-5 my-4 rounded-xl w-full hover:bg-blue"
        >
          Sign In
        </button>
        <div className="flex justify-between my-10">
          <p className="p-2">DON'T HAVE AN ACCOUNT? </p>
          <button className="p-2 text-green hover:underline">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
