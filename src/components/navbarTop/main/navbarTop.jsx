import React from "react";
import "./style.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export const NavbarTop = () => {
  return (
    <>
      <div className="navbarTop">
        <div className="searchDiv">
          <div className="calendarDiv">
            <h2>Jaegar Resto</h2>
            <p>Tuesday, 2 Feb 2021</p>
          </div>
          <label>
            <span><SearchRoundedIcon/></span>
            <input type="text" placeholder="Search for food, coffe, etc.." />
          </label>
        </div>
        <div className="tableDiv">navbarTop</div>
      </div>
    </>
  );
};
