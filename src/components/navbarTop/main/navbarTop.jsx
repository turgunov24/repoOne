import React from "react";
import "./style.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Foods from "./../assets/objectdata"
import Tablar from "../assets/Tabs/Tabs";

export const NavbarTop = () => {
    let allCategories = []
    Foods.map((food)=>{
        allCategories.push(food.foodType)
    })
    let settedCategories = new Set(allCategories)
    let categories = [...settedCategories]
    console.log(categories);
    
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
        <Tablar />
      </div>
    </>
  );
};
