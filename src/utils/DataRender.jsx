export const generateDataOptions = (dataArray = []) =>
  dataArray.map((data, index) => (
    <option key={index} value={data}>
      {data}
    </option>
  ));

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const years = [2025, 2026];
