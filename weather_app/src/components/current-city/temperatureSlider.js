import React from "react";
import { Slider } from "@mui/material";
import "./currentWeatherDetails.css";

function TemperatureSlider({ data }) {
  const { main } = data;

  const toCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(0);
  };

  const minTemp = parseInt(toCelsius(main.temp_min));
  const maxTemp = parseInt(toCelsius(main.temp_max));
  const currentTemp = parseInt(toCelsius(main.temp));

  // Ensure current temperature is within the range of min and max temperatures
  const clampedCurrentTemp = Math.max(minTemp, Math.min(currentTemp, maxTemp));
  const percentage =
    ((clampedCurrentTemp - minTemp) / (maxTemp - minTemp)) * 100;

  return (
    <div className="temperature-slider-container">
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuemin={minTemp}
        aria-valuemax={maxTemp}
        aria-valuenow={currentTemp}
      >
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default TemperatureSlider;
