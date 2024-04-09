import React, { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CurrentWeatherDetails from "./currentWeatherDetails";
import "./currentWeather.css";

function CurrentWeather({ index, data, setWeatherData, deleteCity }) {
  const celsius = (data.main.temp - 273.15).toFixed(0);
  const [expanded, setExpanded] = useState(false);
  const [expandedCity, setExpandedCity] = useState(null);

  const handleExpand = (event) => {
    event.stopPropagation();
    setExpandedCity((prev) => (prev === data.city ? null : data.city));
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    deleteCity(index);
    if (expandedCity === data.city) {
      setExpandedCity(null);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="main-card card shadow-sm p-3 mb-5 rounded">
            <div className="card-body d-flex justify-content-between align-items-start">
              <div className="weather-info-main">
                <div className="weather-info-left">
                  <h5 className="weather-info-main-city card-title fw-bold">
                    {data.city}
                  </h5>
                  <p className="weather-info-main-temperature card-text">
                    {celsius}°C
                  </p>
                </div>
                <div className="img-container">
                  <img
                    src={`/icons/${data.weather[0].icon}.png`}
                    alt="Weather Icon"
                  />
                </div>
              </div>
              <div className="mt-auto mb-auto">
                <IconButton onClick={handleExpand}>
                  <ExpandMoreIcon />
                </IconButton>
              </div>
              <div className="mt-auto mb-auto">
                <IconButton onClick={handleDelete}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
            <Collapse in={expandedCity === data.city}>
              <CurrentWeatherDetails data={data} />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
