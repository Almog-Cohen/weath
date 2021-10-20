import React, { useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import "./SearchBar.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("day");
  const listOfSearchedWeather = useSelector(
    (state) => state.weather.searchWordInfo
  );
  console.log(searchInput);
  return (
    <div className="search-bar">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={listOfSearchedWeather}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.LocalizedName}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(txtInput) => setSearchInput(txtInput.target.value)}
            label="Type name of city"
          />
        )}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

export default SearchBar;
