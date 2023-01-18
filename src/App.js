import AuthPage from "./pages/Authentication/index.jsx";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
