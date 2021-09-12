import React, { useEffect, useState } from "react";
import "./Weathernav.css";

const baseUrl = "https://api.openweathermap.org/data/2.5";
const apiKey = "d3e238ced3e15356c1c6acb557b2bc2f";

function Weathernav() {
  const [lat, setLat] = useState("");
  const [long, setLon] = useState("");
  const [weatherdata, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("lat and long values: ", lat, long);
      if (lat.length != 0 && long.length != 0) {
        await fetch(
          `${baseUrl}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`
        )
          .then((res) => res.json())
          .then((result) => {
            setWeatherData(result);
            console.log(result);
          });
      } else {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            console.log("Position data:", position);
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
          },
          function (error) {
            if (error.code == error.PERMISSION_DENIED) {
              setLat("-33.8679");
              setLon("151.2093");
              fetchData();
            }
          }
        );
      }
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      <div className="Nav">
        {typeof weatherdata.main != "undefined" ? (
          <div class="weatherData">
            <div class="weatherImage">
              <img
                class="weatherImageIcon"
                src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`}
                alt="imgicon"
              />
            </div>
            <div class="suburbData">
              <p class="weatherName">
                {parseFloat(weatherdata.main.temp).toFixed(1)}&deg;{" "}
                <span class="weatherName">{weatherdata.weather[0].main}</span>
              </p>
              <p class="weatherName">
                {weatherdata.name} | {weatherdata.sys.country}
              </p>
            </div>
          </div>
        ) : (
          <div class="suburbData">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Weathernav;
