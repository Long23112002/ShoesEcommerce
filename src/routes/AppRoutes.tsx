import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import AuthenticateGoogle from "../pages/login/AuthenticateGoogle";
import Home from "../pages/home/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/authenticate" element={<AuthenticateGoogle />} />
          <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
