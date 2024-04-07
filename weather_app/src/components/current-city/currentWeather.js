import "./currentWeather.css";
import React from 'react'

function CurrentWeather({data}) {
  console.log("weatherdata: ", data);
  const celsius = data.main.temp - 273.15;
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <div className="card-body d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="card-title">{data.city}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Country Code</h6>
                    <p className="card-text">Current Temperature: {celsius.toFixed(2)}°C</p>
                    <p className="card-text">{data.weather[0].description}</p>
                    <p className="card-text">Humidity: 0%</p>
                    <p className="card-text">Wind Speed: 0 m/s</p>
                  </div>
                  <img src="icons/01d.png" alt="Weather Icon" className="mt-auto mb-auto"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CurrentWeather;