import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ id, heading, date = {}, location, img }) => {
  return (
    <Link to={`/events/${id}`}>
      <div className="card">
        <div className="card-content">
          <h3>{heading}</h3>
          <p>
            <span>Year: {date?.year || "N/A"}</span>
            <span>Month: {date?.month || "N/A"}</span>
          </p>
          <p>{location}</p>
        </div>
        <div className="card-img-wrapper">
          <img src={img} alt="Event" />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
