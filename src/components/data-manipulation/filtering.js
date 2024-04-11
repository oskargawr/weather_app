import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import "./manipulating.css";

function Filtering({ cityList, setFilteredCityList }) {
  const [value, setValue] = useState([20, 37]);

  useEffect(() => {
    setFilteredCityList(cityList);
  }, [cityList, setFilteredCityList]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFilteredCityList(
      cityList.filter(
        (city) =>
          city.main.temp - 273.15 >= newValue[0] &&
          city.main.temp - 273.15 <= newValue[1]
      )
    );
  };

  const valuetext = (value) => {
    return `${value}°C`;
  };

  const marks = [
    {
      value: -27,
      label: "-27°C",
    },
    {
      value: 50,
      label: "50°C",
    },
  ];

  return (
    <div>
      <p className="filtering-indicators">Temperature</p>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={-27}
        max={50}
        marks={marks}
        sx={{
          color: "#D1C4E9",
          "& .MuiSlider-thumb": {
            color: "#D1C4E9",
            boxShadow: "0 0 10px 0 rgba(209, 196, 233, 0.5)",
          },
          "& .MuiSlider-track": {
            color: "#D1C4E9",
            boxShadow: "0 0 10px 0 rgba(209, 196, 233, 0.5)",
          },
        }}
      />
    </div>
  );
}

export default Filtering;
