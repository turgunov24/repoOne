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
            <span>Qty</span>
            <span>Price</span>
          </div>
          <div className="ordersAbsoluteDiv">
            <div className="discount">
              <span>discount</span>
              <span>$0</span>
            </div>
            <div className="subTotal">
              <span>sub total</span>
              <span>$21.03</span>
            </div>
            <Button fullWidth className="NavbarRightBottomButton">Continue to Payment</Button>
          </div>
        </div>
        <div className="Payment"></div>
      </div>
    </>
  );
}

export default NavbarRight;
