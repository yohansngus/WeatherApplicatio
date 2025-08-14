import React, { useEffect, useState } from "react";
import "./weather.css";
import { useNavigate } from "react-router-dom";

function WeatherApp() {
  const [be, setBe] = useState("");
  const navigate = useNavigate();
  const API_KEY = process.env.REACT_APP_ID;

  // return data instead of using setCity
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      return {
        humidity: data.main.humidity,
        speed: data.wind.speed,
        temprature: data.main.temp,
        name: data.name,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  function inp(e) {
    setBe(e.target.value);
  }

  async function doit() {
    const cityData = await search(be); // wait for fetch
    if (cityData) {
      navigate("/weathershow", { state: cityData }); // send data to WeatherShow
    }
  }

  return (
    <div className="container">
      <h1>Weather APP</h1>
      <hr className="hr1" />
      <div className="inner-container">
        <input placeholder="Enter city name" onChange={inp} />
        <hr className="hr2" />
        <button onClick={doit}>Get Device Location</button>
      </div>
    </div>
  );
}

export default WeatherApp;
