import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites } from "../WeatherSlicer";
import WeahterListItem from "./WeatherListItem/WeatherListItem";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import IconButton from "@mui/material/IconButton";
import Weather from "../Weather";

import "./Weather.css";

const WeatherInfo = () => {
  const {
    forcastFiveDays: listOfForcast,
    currentForcast: currentWeatherForcast,
  } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  // Check if its in favorites if it is remove it if not add it to favorties
  const handleFavoritesClick = () => {
    dispatch(addToFavorites("somthing"));
  };
  // console.log(listOfForcast);
  return (
    <>
      <h1>{currentWeatherForcast.WeatherText}</h1>
      <h2>{currentWeatherForcast.WeatherText}</h2>
      <IconButton onClick={handleFavoritesClick}>
        <StarOutlinedIcon />
      </IconButton>
      <div className="cards-container">
        {listOfForcast.map((weatherInfoObject) => (
          <WeahterListItem
            className="card"
            weatherInfoObject={weatherInfoObject}
          />
        ))}
      </div>
    </>
  );
};

export default WeatherInfo;
