import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext";  // ✅ Check if path is correct
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <BookingProvider>  {/* ✅ BookingProvider inside BrowserRouter */}
          <App />
        </BookingProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
