import { createContext, useContext, useState, useEffect } from "react";

const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [bookedEvents, setBookedEvents] = useState([]);

  // Load bookings from localStorage when component mounts
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookedEvents(savedBookings);
  }, []);

  // Function to book an event
  const bookEvent = (event) => {
    const updatedBookings = [...bookedEvents, event];
    setBookedEvents(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  // Function to cancel an event
  const cancelEvent = (index) => {
    const updatedBookings = bookedEvents.filter((_, i) => i !== index);
    setBookedEvents(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <BookingContext.Provider value={{ bookedEvents, bookEvent, cancelEvent }}>
      {children}
    </BookingContext.Provider>
  );
};
