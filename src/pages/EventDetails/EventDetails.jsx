import { useState } from "react";
import { useParams } from "react-router-dom";
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useBooking } from "../../context/BookingContext";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const numId = Number(id);
  const filteredEvent = eventList.find((eventDetail) => eventDetail.id === numId);
  const { bookEvent } = useBooking();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddEvent = () => {
    if (filteredEvent) {
      bookEvent(filteredEvent);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Hide popup after 3 seconds
    }
  };

  if (!filteredEvent) {
    return (
      <div className="event-details-container">
        <Navigation />
        <div className="event-details-wrapper">
          <h3>Event Not Found</h3>
          <p>The event you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={filteredEvent?.img} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name: {filteredEvent?.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">{filteredEvent?.date?.month}</span>
              <span className="font-weight-med">{filteredEvent?.date?.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent?.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">
              {filteredEvent?.description || "No description available."}
            </span>
          </p>
          <button className="add-event-btn" onClick={handleAddEvent}>
            Book-Event
          </button>
          {showPopup && <div className="booking-popup">Event Added Successfully!</div>}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
