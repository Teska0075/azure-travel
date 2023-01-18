import React from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { useState } from "react";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <SignUp setIsSignIn={setIsSignIn} />
      )}
    </>
  );
};

export default AuthPage;
