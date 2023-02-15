import React from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/index";

const AuthPage = () => {
  const [isSignIn, setSignIn] = useState(true);
  const { handleClose, isLogged, setUser, login } = useContext(UserContext);
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
