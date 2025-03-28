import { useBooking } from "@/context/BookingContext";
import Navigation from "@/components/Navigation/Navigation";
import "./MyBookings.css";

const MyBookings = () => {
  const { bookedEvents, cancelEvent } = useBooking();

  return (
    <div className="my-bookings-container">
      <Navigation />
      <div className="my-bookings-wrapper">
        <h2>My Bookings</h2>
        {bookedEvents.length === 0 ? (
          <p>No bookings yet. Add an event!</p>
        ) : (
          <div className="bookings-list">
            {bookedEvents.map((event, index) => (
              <div key={index} className="booking-card">
                <img src={event.img} alt={event.heading} className="booking-img" />
                <div className="booking-details">
                  <h3>{event.heading}</h3>
                  <p><strong>Date:</strong> {event.date.month} {event.date.year}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <button onClick={() => cancelEvent(index)} className="cancel-btn">Cancel Event</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
