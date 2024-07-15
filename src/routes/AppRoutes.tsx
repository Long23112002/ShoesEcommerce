import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import AuthenticateGoogle from "../pages/login/AuthenticateGoogle";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import AuthenticateFacebook from "../pages/login/AuthenticateFacebook";
import Cart from "../pages/cart/Cart";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/authenticate" element={<AuthenticateGoogle />} />
          <Route path="/authenticate-fb" element={<AuthenticateFacebook />} />
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
