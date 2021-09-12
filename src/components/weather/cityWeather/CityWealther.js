import React, { useState, useEffect } from "react";
import "./CityWeather.css";
import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "d3e238ced3e15356c1c6acb557b2bc2f";

function CityWeather() {
  const [cityname, setCityName] = useState("melbourne");
  const [weatherdata, setWeatherData] = useState({});

  axios
    .get(baseUrl + `q=${cityname},au&appid=${apiKey}`)
    .then((response) => {
      const data = response.data;
      console.log(data);
      setWeatherData(data);
      console.log(weatherdata);
    })
    .catch((error) => alert("Cannot find such place, please search again"));

  return (
    <div className="App">
      <div class="card">
        <h4>{cityname}</h4>
        <h6>{weatherdata.weather[0].main}</h6>
        <img
          src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`}
          alt="icon"
        />
        <h1>
          {parseFloat(weatherdata.main.temp).toFixed(1)}
          <sup>&deg;</sup>
        </h1>
        <div className="degree">
          <div className="details">
            <p>min</p>
            <span>
              {parseFloat(weatherdata.main.temp_min).toFixed(1)}
              <sup>&deg;</sup>
            </span>
          </div>
          <div className="details">
            <p>max</p>
            <span>
              {parseFloat(weatherdata.main.temp_max)}
              <sup>&deg;</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityWeather;
