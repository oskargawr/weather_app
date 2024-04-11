import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav.js";
import CurrentWeather from "./components/current-city/currentWeather.js";
import { useCookies } from "react-cookie";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api.js";
import axios from "axios";
import Search from "./components/search/search.js";
import Manipulating from "./components/data-manipulation/manipulating.js";

function App() {
  const [cityList, setCityList] = useState([]);
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["search"]);
  const [filteredCityList, setFilteredCityList] = useState(cityList);

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        try {
          const response = await axios.get(
            `${WEATHER_API_URL}/weather?lat=${search.lat}&lon=${search.lon}&appid=${WEATHER_API_KEY}`
          );
          const addAirPollution = await axios.get(
            `${WEATHER_API_URL}/air_pollution?lat=${search.lat}&lon=${search.lon}&appid=${WEATHER_API_KEY}`
          );
          setWeatherData({
            city: search.city,
            airPollution: addAirPollution.data.list[0],
            ...response.data,
          });
          console.log(weatherData);
          setCookie(
            "search",
            { city: search.city, lat: search.lat, lon: search.lon },
            { path: "/" }
          );
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    if (cookies.search) {
      setSearch(cookies.search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (weatherData) {
      setCityList((prevList) => [...prevList, weatherData]);
    }
  }, [weatherData]);

  const deleteCity = (index) => {
    setCityList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const handleOnSearchChange = (searchData) => {
    setSearch(searchData);
  };

  return (
    <div className="App">
      <Nav />
      <div className="grid-layout">
        <div className="grid-layout-main">
          {filteredCityList.map((cityData, index) => (
            <CurrentWeather
              key={index}
              index={index}
              data={cityData}
              setWeatherData={setWeatherData}
              deleteCity={deleteCity}
            />
          ))}
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <div className="main-card card shadow-sm p-3 mb-5 rounded">
                  <div className="card-body d-flex justify-content-between align-items-start">
                    <h5 className="card-title fw-bold mt-auto mb-auto">
                      Add a city
                    </h5>
                    <Search onSearchChange={handleOnSearchChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-layout-left">
          <div className="manipulating-box mt-5">
            <Manipulating
              cityList={cityList}
              setFilteredCityList={setFilteredCityList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
