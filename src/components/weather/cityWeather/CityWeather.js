import "./CityWeather.css";
import React from "react";

const CityWeather = ({ name, weather, src, temp, tempMin, tempMax }) => {
  return (
    <div className="container">
      <div class="card">
        <h4>{name}</h4>
        <h6>{weather}</h6>
        <img src={src} alt="icon" />
        <h1>{temp}&deg;C</h1>
        <div className="degree">
          <div className="details">
            <p>min</p>
            <span>{tempMin}&deg;C</span>
          </div>
          <div className="details">
            <p>max</p>
            <span>{tempMax}&deg;C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
