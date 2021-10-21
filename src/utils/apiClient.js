import axios from "axios";
// require("dotenv").config();
const WEATHER_API_URL = "http://dataservice.accuweather.com";
export async function autoCompleteSearchWeather(searchWord) {
  const params = {
    apikey: process.env.REACT_APP_API_KEY,
    q: searchWord,
  };

  try {
    const response = await axios.get(
      `${WEATHER_API_URL}/locations/v1/cities/autocomplete`,
      {
        params,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

// export async function getProjectsInfo(token) {
//   const response = await axios.get(`${WEATHER_API_URL}`);
//   return response.data;
// }
