import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav.js';
import CurrentWeather from './components/current-city/currentWeather.js';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api.js';
import axios from 'axios';


function App() {
    const [search, setSearch] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (search) {
                try {
                    const response = await axios.get(`${WEATHER_API_URL}/weather?lat=${search.lat}&lon=${search.lon}&appid=${WEATHER_API_KEY}`);
                    setWeatherData({ city: search.city, ...response.data });
                    console.log(weatherData);
                } catch (error) {
                    console.error(error);
                }
            }
        };

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return (
        <div className="App">
            <Nav setSearch={setSearch} />
            {weatherData ? <CurrentWeather data={weatherData} /> : <h1 className="text-center">Loading...</h1>}
        </div>
    );
}

export default App;
