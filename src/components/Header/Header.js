import React from "react";

// import { ReactComponent as MainLogo } from "assets/account-circle.svg";

import AppBar from "@mui/material/AppBar";
import { useHistory } from "react-router";
import "./Header.css";
import { Button } from "@mui/material";

const Header = () => {
  const history = useHistory();

  const handleClickToPageNavigate = (pageRoute) => {
    pageRoute === "favorites"
      ? history.push("/favorites")
      : history.push("/weather");
  };

  return (
    <AppBar>
      <div class="header-container">
        <h1>Herolo Task</h1>
        <div className="button-container">
          <button
            onClick={() => handleClickToPageNavigate("weather")}
            className="button"
          >
            Weather
          </button>
          <button
            onClick={() => handleClickToPageNavigate("favorites")}
            className="button"
          >
            Favorites
          </button>
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
