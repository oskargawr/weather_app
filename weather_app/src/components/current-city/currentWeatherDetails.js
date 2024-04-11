import React, { useState, useEffect } from "react";
import "./currentWeatherDetails.css";
import TemperatureSlider from "./temperatureSlider";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import CompressIcon from "@mui/icons-material/Compress";
import SunsetSunrise from "./sunsetSunrise";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import SpaIcon from "@mui/icons-material/Spa";

function getAQIColor(aqi) {
  switch (aqi) {
    case "Good":
      return "#b3e6cc"; // Light Green
    case "Moderate":
      return "#ffffcc"; // Light Yellow
    case "Unhealthy for Sensitive Groups":
      return "#ffcc99"; // Light Orange
    case "Unhealthy":
      return "#ff9999"; // Light Red
    case "Very Unhealthy":
      return "#cc99cc"; // Light Purple
    case "Hazardous":
      return "#660066"; // Dark Purple
    default:
      return "#ffffff"; // White
  }
}

function CurrentWeatherDetails({ data }) {
  const { airPollution, weather, main, wind, sys } = data;
  const [airQuality, setAirQuality] = useState("Good");

  const toCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(0);
  };

  const calculateAQI = (airPollution) => {
    const pm25 = airPollution.components.pm2_5;
    let aqi;
    if (pm25 <= 12) {
      aqi = "Good";
    } else if (pm25 <= 35.4) {
      aqi = "Moderate";
    } else if (pm25 <= 55.4) {
      aqi = "Unhealthy for Sensitive Groups";
    } else if (pm25 <= 150.4) {
      aqi = "Unhealthy";
    } else if (pm25 <= 250.4) {
      aqi = "Very Unhealthy";
    } else {
      aqi = "Hazardous";
    }

    return aqi;
  };

  useEffect(() => {
    if (airPollution) {
      setAirQuality(calculateAQI(airPollution));
    }
  }, [airPollution]);

  return (
    <div>
      <div className="weather-details-grid">
        <div className="weather-details feels-like">
          <div className="feels-like-box">
            <DeviceThermostatIcon
              className="feels-like-icon"
              fontSize="small"
              sx={{ color: "#fff", opacity: "0.8" }}
            />
            <p className="p-feels-like fs-6 fw-normal">Feels like:</p>
          </div>
          <p className="fs-1 text-white">{toCelsius(main.feels_like)}°C</p>
          <p className="text-white opacity-75 fw-normal fs-5 text-center">
            {weather[0].description}
          </p>
        </div>
        <div className="weather-details min-max">
          <TemperatureSlider data={data} />
        </div>
        <div className="weather-details air-pollution">
          <SpaIcon
            className="feels-like-icon"
            fontSize="small"
            sx={{ color: "#fff", opacity: "0.8" }}
          />
          <p className="text-white opacity-75 fs-6 fw-normal">Air Quality:</p>
          <p
            className="fs-4 fw-bold"
            style={{ color: getAQIColor(airQuality) }}
          >
            {airQuality}
          </p>
        </div>
        <div className="weather-details pressure">
          <CompressIcon
            className="feels-like-icon"
            fontSize="small"
            sx={{ color: "#fff", opacity: "0.8" }}
          />
          <p className="p-feels-like fs-6 fw-normal opacity-75">Pressure:</p>
          <p className="fs-4 text-white">{main.pressure} hPa</p>
        </div>
        <div className="weather-details humidity">
          <WaterDropIcon
            className="feels-like-icon"
            fontSize="small"
            sx={{ color: "#fff", opacity: "0.8" }}
          />
          <p className="p-feels-like fs-6 fw-normal opacity-75 text-white">
            Humidity:
          </p>
          <p className="fs-4 text-white">{main.humidity}%</p>
        </div>
        <div className="weather-details sunset-sunrise">
          <SunsetSunrise sys={sys} />
        </div>
        <div className="weather-details wind">
          <AirIcon
            className="feels-like-icon"
            fontSize="small"
            sx={{ color: "#fff", opacity: "0.8" }}
          />
          <p className="p-feels-like fs-6 fw-normal opacity-75 text-white">
            Wind speed:
          </p>
          <p className="fs-4 text-white">{wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherDetails;
