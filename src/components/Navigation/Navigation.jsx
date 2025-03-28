import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navigation.css";

const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // ✅ Redirect to Login Page after Logout
  };

  return (
    <nav>
      <ul>
        <li><NavLink to="/events">All Events</NavLink></li>
        <li><NavLink to="/find-events">Find Events</NavLink></li>
        <li><NavLink to="/my-bookings">My Bookings</NavLink></li>
        {!user ? (
          <li><NavLink to="/login">Login</NavLink></li>
        ) : (
          <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
