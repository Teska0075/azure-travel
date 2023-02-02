import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/Hero/Navigation/NavBar"
import Home from "./pages/Home";
import AuthPage from "./pages/Authentication/index.jsx";
import { useState } from "react";



function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const login = async (email,password) => {
    try{
      const res = await axios.post("http://localhost:8000/signin", {
        email,
        password
      });
      console.log("Success", res.data);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      handleClose();
    } catch(error){
      console.log("Error",error)
    }
  }

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <>
      <NavBar login={login} logout={logout} user={user} open={open} handleOpen={handleOpen} handleClose={handleClose}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
