import React, { useState, useEffect } from "react";
import CityWeather from "./CityWeather";

function Darwin() {
  const [cityname, setCityName] = useState("");
  const [weatherdata, setWeatherData] = useState([]);
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
  const apiKey = "6410c52bfcdfdfea3c892dda7d405055";

  useEffect(() => {
    const fetchData = async () => {
      console.log("cityname", cityname);
      if (cityname) {
        await fetch(`${baseUrl}q=${cityname},au&appid=${apiKey}`)
          .then((res) => res.json())
          .then((result) => {
            setWeatherData(result);
            console.log("weatherdata");
            console.log(weatherdata);
          });
      } else {
        setCityName("Darwin");
      }
    };
    fetchData();
  }, [cityname]);

  return (
    <div className="App">
      {typeof weatherdata.main != "undefined" ? (
        <CityWeather
          name={weatherdata.name}
          weather={weatherdata.weather[0].main}
          src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`}
          temp={(parseFloat(weatherdata.main.temp) - 273.15).toFixed(1)}
          tempMin={(parseFloat(weatherdata.main.temp_min) - 273.15).toFixed(1)}
          tempMax={(parseFloat(weatherdata.main.temp_max) - 273.15).toFixed(1)}
        />
      ) : (
        <div class="suburbData">Loading...</div>
      )}
    </div>
  );
}

export default Darwin;
