import React from "react";
import SignIn from "../Components/SignIn";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function SignInPage() {
  return (
    <div className="w-full flex flex-col h-full items-center justify-between bg-blue">
      <Header />
      <SignIn className="h-full" />
      <Footer />
    </div>
  );
}

export default SignInPage;
