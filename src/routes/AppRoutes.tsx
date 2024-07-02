import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import NavBar from "../components/navbar/NavBar";
import AuthenticateGoogle from "../pages/login/AuthenticateGoogle";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/authenticate" element={<AuthenticateGoogle />} />
          <Route path="/nav" element={<NavBar/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
