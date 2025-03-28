import { useState, useEffect } from "react";
import { generateDataOptions, months, years } from "../../utils/DataRender";
import "./FilterBox.css";

const FilterBox = ({ getMonthYear }) => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState(2023);

  useEffect(() => {
    getMonthYear(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear, getMonthYear]);

  return (
    <div>
      <form className="filter-card">
        <div className="wrapper">
          <div className="date">
            <label htmlFor="month">Month: </label>
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
              {generateDataOptions(months)}
            </select>
          </div>
          <div className="date">
            <label htmlFor="year">Year: </label>
            <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
              {generateDataOptions(years)}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterBox;
