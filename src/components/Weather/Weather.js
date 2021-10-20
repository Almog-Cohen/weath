import React, { useEffect } from "react";
import { autoCompleteSearchWeather } from "../../utils/apiClient";
import SearchBar from "../SearchBar/SearchBar";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import "./Weather.css";

const Weather = () => {
  useEffect(() => {
    const response = autoCompleteSearchWeather("tel");
  });

  return (
    <div className="weather-conatiner">
      <SearchBar />
      <WeatherInfo />
    </div>
  );
};

export default Weather;
