import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import CityWeather from "./cityWeather/CityWeather";
import Sydney from "./cityWeather/Sydney";
import Adelaide from "./cityWeather/Adelaide";
import Brisbane from "./cityWeather/Brisbane";
import Canberra from "./cityWeather/Canberra";
import Darwin from "./cityWeather/Darwin";
import Hobart from "./cityWeather/Hobart";
import Melbourne from "./cityWeather/Melbourne";
import Perth from "./cityWeather/Perth";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "b2d3e4514f8fef07f166278907e53b4a";

function Weather() {
  const [weatherdata, setWeatherData] = useState(null);
  const [input, setInput] = useState("");
  //

  //serach by name
  const url1 = baseUrl + `q=${input},au&appid=${apiKey}`;

  //search by postcode
  const url2 = baseUrl + `zip=${input},au&appid=${apiKey}`;

  // console.log(input);

  let url = "";
  if (parseInt(input) == input) {
    url = url2;
  } else if (input !== "") {
    url = url1;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // get data
  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setWeatherData(data);
      })
      .catch((error) => alert("Cannot find such place, please search again"));
  };

  return (
    <div className="weathermain">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter the Postcode or Suburb name"
          className="searchinput"
          required
        />
        <button id="search" onClick={() => getData()}>
          Search
        </button>
      </form>
      {weatherdata !== null ? (
        <div className="searchcity">
          <CityWeather
            name={weatherdata.name}
            weather={weatherdata.weather[0].main}
            src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`}
            temp={(parseFloat(weatherdata.main.temp) - 273.15).toFixed(1)}
            tempMin={(parseFloat(weatherdata.main.temp_min) - 273.15).toFixed(
              1
            )}
            tempMax={(parseFloat(weatherdata.main.temp_max) - 273.15).toFixed(
              1
            )}
          />
        </div>
      ) : (
        <div className="container">
          <div>
            <Melbourne />
          </div>
          <div>
            <Sydney />
          </div>
          <div>
            <Canberra />
          </div>
          <div>
            <Adelaide />
          </div>
          <div>
            <Brisbane />
          </div>
          <div>
            <Perth />
          </div>
          <div>
            <Darwin />
          </div>
          <div>
            <Hobart />
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
