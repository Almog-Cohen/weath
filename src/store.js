import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./components/Weather/WeatherSlicer";
// import authReducer from "./modules/LoginPage/authSlice";
// import projectsReducer from "./modules/InfoPage/projectsSlice";

export default configureStore({
  reducer: {
    // auth: authReducer,
    // projects: projectsReducer,
    weather: weatherReducer,
  },
});
