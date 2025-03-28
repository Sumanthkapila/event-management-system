import AppRoutes from "./routes/routes";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([
    { id: 1, name: "Epic Comic Con", date: "March 2025", location: "Mumbai, India", description: "Experience the most anticipated gathering of comic enthusiasts!" },
  ]);

  return <AppRoutes events={events} />;
}

export default App;
