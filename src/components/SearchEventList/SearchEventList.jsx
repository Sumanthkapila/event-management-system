import EventCard from "../EventCard/EventCard";
import { eventList } from "../../utils/EventDatabase";
import "./SearchEventList.css";

const SearchEventList = ({ monthYear = {}, searchTriggered }) => {
  const { selectedMonth, selectedYear } = monthYear;

  if (!searchTriggered) return null;

  const filteredEvents = eventList.filter(
    (eventDetail) =>
      eventDetail?.date?.year === selectedYear && eventDetail?.date?.month === selectedMonth
  );

  return (
    <>
      {filteredEvents.length > 0 ? (
        filteredEvents.map(({ id, date, heading, location, img }) => (
          <EventCard key={id} id={id} date={date} heading={heading} location={location} img={img} />
        ))
      ) : (
        <p>No Events on this date</p>
      )}
    </>
  );
};

export default SearchEventList;
