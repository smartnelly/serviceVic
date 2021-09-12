import axios from "axios";
import React, { useState } from "react";
import SearchCity from "./cityWeather/SearchCity";
import "./Weather.css";
import CityWeather from "./cityWeather/CityWealther";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "d3e238ced3e15356c1c6acb557b2bc2f";

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
          <SearchCity
            name={weatherdata.name}
            lon={weatherdata.coord.lon}
            lat={weatherdata.coord.lat}
          />
        </div>
      ) : (
        <div className="container">
          <div>
            <p>
              <CityWeather></CityWeather>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
