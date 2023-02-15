import { React, createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [isAlert, setIsAlert] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("error");
  const [status, setStatus] = useState("error");

  // const login = async (email, password) => {
  //   try {
  //     const res = await axios.post("http://localhost:8000/users/signin", {
  //       email,
  //       password,
  //     });
  //     console.log("Success", res.data);
  //     localStorage.setItem("user", JSON.stringify(res.data.user));
  //     setUser(res.data.user);
  //     handleClose();
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // };

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/users/signin", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setStatus("success");
      setMessage(res.data.message);
      setIsAlert(true);
      setUser(res.data.user);
      handleClose();
    } catch (error) {
      console.log(error);
      setStatus("error");
      setMessage(error.response.data.message);
      setIsAlert(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <UserContext.Provider
      value={{
        logout,
        login,
        user,
        status,
        setUser,
        open,
        handleOpen,
        handleClose,
        email,
        setEmail,
        password,
        setPassword,
        state,
        setState,
        message,
        setMessage,
        isAlert,
        setIsAlert,
        name,
        setName,
        rePassword,
        setRePassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
