import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { endpoints, routers, ROOT_URL } from "../endpoints";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState(null);

  const history = useHistory();

  const handleRedirectionSignIn = () => {
    history.push(routers.SIGNIN);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(ROOT_URL + endpoints.SIGNUP, {
        username,
        password,
        email,
        picture,
      });
    } catch (err) {
      console.log(err);
    }
  };

  /*
        
        
        
        
        






  */

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

        <div className="flex">
          <div className="flex flex-col mr-2">
            <input
              type="text"
              placeholder="your username"
              className="border-2 border-green rounded-xl my-4 p-4 text-green bg-dark-blue"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
            <input
              type="email"
              placeholder="your email"
              className="border-2 border-green rounded-xl my-4 p-4 text-green bg-dark-blue"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <input
              type="password"
              placeholder="your password"
              className="border-2 border-green rounded-xl my-4 p-4 text-green bg-dark-blue"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <input
              type="file"
              accept="image/*"
              className="border-2 border-green rounded-xl my-4 p-4 text-green bg-dark-blue"
              onChange={(event) => {
                setPicture(event.target.files[0]);
                const fileName = event.target.files[0].name;
                event.target.previousElementSibling.textContent = fileName;
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green p-5 my-4 rounded-xl w-full hover:bg-blue"
        >
          Sign In
        </button>
        <div className="flex justify-between my-10">
          <p className="p-2">ALREADY HAVE AN ACCOUNT? </p>
          <button
            className="p-2 text-green hover:underline"
            onClick={handleRedirectionSignIn}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
