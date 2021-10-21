import React, { useState } from "react";
import { validateSearchInput } from "../../utils/formValidation";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import "./SearchBar.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState(null);
  const [errors, setErrors] = useState(null);
  const listOfSearchedWeather = useSelector(
    (state) => state.weather.searchWordInfo
  );

  // using formik for form state management, no need for redux here..

  const change = (change) => {
    setSearchInput(change.target.value);
    const inputError = validateSearchInput(searchInput);
    if (inputError) setErrors(inputError);
  };

  const handleSubmit = () => {
    console.log(" i have submitted");
  };

  return (
    <div c>
      <form className="search-bar" onSubmit={() => handleSubmit}>
        <div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={listOfSearchedWeather}
            sx={{ width: 300 }}
            getOptionLabel={(option) => option.LocalizedName}
            renderInput={(params) => (
              <TextField
                {...params}
                // error={}
                // helperText={}
                // onChange={(txtInput) => setSearchInput(txtInput.target.value)}
                onChange={(txtInput) => change(txtInput)}
                // value={formik.values.searchText}
                label="Type name of city"
              />
            )}
          />
        </div>
        <div>
          <IconButton
            type="submit"
            disabled={!searchInput && validateSearchInput(searchInput)}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
