import React from "react";
import "./sorting.css";

function Sorting({ cityList, setFilteredCityList }) {
  return (
    <div className="sorting-container">
      <p className="filtering-indicators">Sort by temperatures</p>
      <select
        className="form-select sorting-select"
        aria-label="Small select example"
        onChange={(event) => {
          const sortedList = [...cityList].sort((a, b) => {
            if (event.target.value === "asc") {
              return a.main.temp - b.main.temp;
            } else if (event.target.value === "desc") {
              return b.main.temp - a.main.temp;
            }
            return 0;
          });
          setFilteredCityList(sortedList);
        }}
      >
        <option value="">Select sorting order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <hr />
      <p className="filtering-indicators">Sort by air quality</p>
      <select
        className="form-select sorting-select"
        aria-label="Small select example"
        onChange={(event) => {
          const sortedList = [...cityList].sort((a, b) => {
            if (event.target.value === "asc") {
              return (
                a.airPollution.components.pm2_5 -
                b.airPollution.components.pm2_5
              );
            } else if (event.target.value === "desc") {
              return (
                b.airPollution.components.pm2_5 -
                a.airPollution.components.pm2_5
              );
            }
            return 0;
          });
          setFilteredCityList(sortedList);
        }}
      >
        <option value="">Select sorting order</option>
        <option value="asc">Best to worst</option>
        <option value="desc">Worst to best</option>
      </select>
    </div>
  );
}
export default Sorting;
