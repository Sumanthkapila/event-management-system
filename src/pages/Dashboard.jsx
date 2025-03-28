import { useAuth } from "@/context/AuthContext";  // ✅ Fix AuthContext path
import { useNavigate } from "react-router-dom";
import { eventList } from "@/utils/EventDatabase";  // ✅ Fix EventDatabase path

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");  // ✅ Redirect to login
  };

  return (
    <div>
      <h1>Welcome, {user?.email}!</h1>
      <button onClick={handleLogout}>Logout</button>

      <h2>My Events</h2>
      {eventList.length > 0 ? (
        <ul>
          {eventList.map((event) => (
            <li key={event.id}>{event.heading} - {event.date.month} {event.date.year}</li>
          ))}
        </ul>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default Dashboard;
