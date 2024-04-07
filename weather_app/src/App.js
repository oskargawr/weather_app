import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav.js';
import CurrentWeather from './components/current-city/currentWeather.js';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api.js';
import axios from 'axios';


function App() {
  const [search, setSearch] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  console.log(search)

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        console.log("dzialam", search.lon);
        try {
          const response = await axios.get(`${WEATHER_API_URL}/weather?lat=${search.lat}&lon=${search.lon}&appid=${WEATHER_API_KEY}`);
          console.log(`${WEATHER_API_URL}/weather?lat=${search.lat}&lon=${search.lon}&appid=${WEATHER_API_KEY}`);
          console.log(response.data);
          setWeatherData(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [search])

  return (
    <div className="App">
      <Nav setSearch={setSearch}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
