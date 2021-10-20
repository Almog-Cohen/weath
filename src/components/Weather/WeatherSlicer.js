import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { autoCompleteSearchWeather } from "../../utils/apiClient";
import {
  searchData,
  fiveDaysForecasts,
  currentLocation,
} from "../../utils/testData";
export const getWeatherInfo = createAsyncThunk(
  "weather/getWeather",
  async (searchWord) => {
    const autoCompleteResponse = await autoCompleteSearchWeather(searchWord);
    return autoCompleteResponse;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    searchWordInfo: searchData,
    forcastFiveDays: fiveDaysForecasts.DailyForecasts,
    currentForcast: currentLocation[0],
    favoriteList: [],
    isLoading: true,
  },
  reducers: {
    addToFavorites(state, action) {
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      };
    },
    removeFromFavorites(state) {},
  },
  extraReducers: {
    [getWeatherInfo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getWeatherInfo.fulfilled]: (state, action) => {
      state.weatherInfo = action.payload;
      state.isLoading = false;
    },
    [getWeatherInfo.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

{
}
export const { addToFavorites, removeFromFavorites } = weatherSlice.actions;

export default weatherSlice.reducer;
