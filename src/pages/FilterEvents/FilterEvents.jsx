import { useCallback, useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import SearchEventList from "../../components/SearchEventList/SearchEventList";
import Navigation from "../../components/Navigation/Navigation";
import "./FilterEvents.css";

const FilterEvents = () => {
  const [monthYear, setMonthYear] = useState({
    selectedMonth: "January",
    selectedYear: new Date().getFullYear(),
  });

  const [searchTriggered, setSearchTriggered] = useState(false);

  const getMonthYear = useCallback((selectedMonth, selectedYear) => {
    setMonthYear({ selectedMonth, selectedYear });
    setSearchTriggered(false);
  }, []);

  return (
    <div>
      <Navigation />
      <div className="find-events-wrapper">
        <FilterBox getMonthYear={getMonthYear} />
        <button onClick={() => setSearchTriggered(true)} className="search-btn">
          Search
        </button>
        <SearchEventList monthYear={monthYear} searchTriggered={searchTriggered} />
      </div>
    </div>
  );
};

export default FilterEvents;
