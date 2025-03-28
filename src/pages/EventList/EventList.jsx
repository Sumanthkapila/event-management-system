import EventCard from "../../components/EventCard/EventCard.jsx";
import { eventList } from "../../utils/EventDatabase.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./EventList.css";

const EventList = () => {
  return (
    <div>
      <Navigation />
      <div className="event-list-wrapper">
        <div className="event-list">
          {eventList?.length > 0 ? (
            eventList.map(({ id, date, heading, location, img }) => (
              <EventCard key={id} id={id} date={date} heading={heading} location={location} img={img} />
            ))
          ) : (
            <p>No events available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;
