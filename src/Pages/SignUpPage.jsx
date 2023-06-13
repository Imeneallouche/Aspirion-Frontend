import React from "react";
import SignUp from "../Components/SignUp";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function SignUpPage() {
  return (
    <div className="w-full flex flex-col h-full items-center justify-between bg-blue">
      <Header />
      <SignUp className="h-full" />
      <Footer />
    </div>
  );
}

export default SignUpPage;
