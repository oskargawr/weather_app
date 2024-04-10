import React from "react";
import Filtering from "./filtering";
import Sorting from "./sorting";
import "./manipulating.css";

function Manipulating({ cityList, setCityList }) {
  return (
    <div>
      <Filtering />
      <Sorting />
      <button className="submit-button w-75">Submit</button>
    </div>
  );
}

export default Manipulating;
