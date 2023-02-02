import React from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { useState } from "react";

const AuthPage = ({ handleClose, isLogged, setUser, login }) => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <SignIn
          setSignIn={setSignIn}
          setUser={setUser}
          handleClose={handleClose}
          isLogged={isLogged}
          login={login}
        />
      ) : (
        <SignUp setSignIn={setSignIn} />
      )}
    </>
  );
};

export default AuthPage;
