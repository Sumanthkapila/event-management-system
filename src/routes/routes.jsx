import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from "../pages/Dashboard";
import EventList from "../pages/EventList/EventList";
import EventDetails from "../pages/EventDetails/EventDetails";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import MyBookings from "../pages/MyBookings";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default route redirects to login */}
      <Route path="/" element={<Navigate to="/login" />} />
      {/* Authentication Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main Dashboard & Event Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/events" element={<EventList />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/find-events" element={<FilterEvents />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      
      {/* Catch-All Route Redirects to Login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;

