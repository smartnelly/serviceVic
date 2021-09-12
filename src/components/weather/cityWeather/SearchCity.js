import ReactWeather, { useOpenWeather } from "react-open-weather";
import React from "react";

const SearchCity = ({ name, lon, lat }) => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "d3e238ced3e15356c1c6acb557b2bc2f",
    lat: lat,
    lon: lon,
    lang: "en",
    unit: "metric",
  });
  return (
    <div>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel={name}
        unitsLabels={{ temperature: "°C", windSpeed: "Km/h" }}
        showForecast
      />
    </div>
  );
};

export default SearchCity;
