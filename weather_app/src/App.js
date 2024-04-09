import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav.js';
import CurrentWeather from './components/current-city/currentWeather.js';
import { useCookies } from 'react-cookie';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api.js';
import axios from 'axios';


function App() {
    const [search, setSearch] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['search']);


    useEffect(() => {
        const fetchData = async () => {
          if (search) {
            try {
              const response = await axios.get(`${WEATHER_API_URL}/weather?lat=${search.lat}&lon=${search.lon}&appid=${WEATHER_API_KEY}`);
              setWeatherData({ city: search.city, ...response.data });
              console.log(weatherData);
              setCookie('search', { city: search.city, lat: search.lat, lon: search.lon }, { path: '/' });
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

    return (
      <div className="App">
        <Nav setSearch={setSearch}/>
        {weatherData ? <CurrentWeather data={weatherData} /> : <h1 className="text-center" style={{color: 'white'}}>Select a city</h1>}
      </div>
    );
}

export default App;
