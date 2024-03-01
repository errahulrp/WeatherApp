import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ cityName }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8b00f801553f4fd2efbcaffd9f41b42a`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [cityName]);

  return (
    <div className=" flex flex-col justify-center items-center">
      {weatherData && (
        <>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} km/h</p>
          <p>visibility: {weatherData.visibility}ft</p>
        </>
      )}
    </div>
  );
};

export default Weather;
