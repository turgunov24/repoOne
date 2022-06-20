import React from "react";
import "./style.css";
import Button from "@mui/material/Button";

function NavbarRight() {
  return (
    <>
      <div className="NavbarRight">
        <div className="Orders">
          <h3>Orders #34562</h3>
          <div className="NavbarRightButtons">
            <Button className="NavbarRightTopButton" variant="contained">Dine In</Button>
            <Button className="NavbarRightTopButton" variant="outlined">To Go</Button>
            <Button className="NavbarRightTopButton" variant="outlined">Deli</Button>
          </div>
          <div className="Prices">
            <span>Item</span>
            <span>num</span>
            <span>price</span>
          </div>
        </div>
        <div className="Payment"></div>
      </div>
    </>
  );
}

export default NavbarRight;
