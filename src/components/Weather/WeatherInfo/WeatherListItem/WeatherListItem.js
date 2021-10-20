import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeahterListItem = ({ weatherInfoObject }) => {
  console.log(weatherInfoObject);
  const dayName = days[new Date(weatherInfoObject.Date).getDay()];
  console.log(dayName);
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {dayName}
          </Typography>

          <Typography variant="body2">
            Max:{" "}
            {weatherInfoObject.Temperature.Maximum.Value +
              weatherInfoObject.Temperature.Maximum.Unit}
            <br />
            Min{" "}
            {weatherInfoObject.Temperature.Minimum.Value +
              weatherInfoObject.Temperature.Minimum.Unit}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default WeahterListItem;
