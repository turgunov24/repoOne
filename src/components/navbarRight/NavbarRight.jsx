import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { Context } from "../contex";
import icon from "../navbarRight/images/Vector.png"

function NavbarRight() {

    const { orders } = useContext(Context);
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
                    <div className="scrollDiv">
                        {
                            orders && orders.map((i)=>(
                                <div className="rightCard">
                                    <div className="car">
                                        <img src={i.image} alt="" />
                                        <div className="title">
                                            <p>{i.title}</p>
                                            <p>$ {i.price}</p>
                                        </div>
                                        <div className="count">
                                            <h1>0</h1>
                                            <h4>nar</h4>
                                        </div>
                                    </div>
                                    <div className="pas">
                                        <input type="text"  placeholder="Order Note..."/>
                                        <img src={icon} alt="" />
                                    </div>
                                </div>
                            ))
                        }  
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
