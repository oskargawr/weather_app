import React from "react";
import Filtering from "./filtering";
import Sorting from "./sorting";
import "./manipulating.css";

function Manipulating({ cityList, setFilteredCityList }) {
  return (
    <div>
      <Filtering
        cityList={cityList}
        setFilteredCityList={setFilteredCityList}
      />
      <hr />
      <Sorting cityList={cityList} setFilteredCityList={setFilteredCityList} />
    </div>
  );
}

export default Manipulating;
