import { React, createContext, useState } from "react";
// import axios from "axios";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <UserProvider.Provider
      value={{ logout, user, setUser, open, handleOpen, handleClose }}
    >
      {children}
    </UserProvider.Provider>
  );
};

export default UserProvider;
