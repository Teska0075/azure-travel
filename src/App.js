import React from "react";
import { Route, Routes } from "react-router-dom";
import UserProvider from "./context";
import NavBar from "./components/Hero/Navigation/NavBar";
import Home from "./pages/Home";
import AuthPage from "./pages/Authentication/index.jsx";
import FooterMain from "./components/Footer/Bottom";

function App() {
  return (
    <UserProvider>
      <NavBar
      // login={login}
      // logout={logout}
      // user={user}
      // setUser={setUser}
      // open={open}
      // handleOpen={handleOpen}
      // handleClose={handleClose}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <FooterMain />
    </UserProvider>
  );
}

export default App;
