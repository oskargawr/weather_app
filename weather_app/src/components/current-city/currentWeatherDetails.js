import React from 'react';

function CurrentWeatherDetails({ data }) {
  const { weather, main, wind, sys } = data;

  return (
    <div>
      <p>Weather: {weather[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
      <p>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
    </div>
  );
}

export default CurrentWeatherDetails;