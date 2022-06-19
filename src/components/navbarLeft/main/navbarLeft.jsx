import React from "react";
import "./style.css";

//assets
import { BsShop } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export const NavbarLeft = () => {
  return (
    <>
      <div className="navbar">
        <div className="shopIcon">
          <li>
            <a href="#">
              <BsShop />
            </a>
          </li>
        </div>
        <ul>
          <li> <a href="#"><HomeOutlinedIcon/> </a> </li>
          <li><a href="#"><CloudOutlinedIcon/></a></li>
          <li><a href="#"><PieChartOutlineOutlinedIcon/></a></li>
          <li><a href="#"><ChatBubbleOutlineOutlinedIcon/></a></li>
          <li><a href="#"><NotificationsActiveOutlinedIcon/></a></li>
          <li><a href="#"><SettingsOutlinedIcon/></a></li>
        </ul>
        <div className="logOutIcon">
          <li>
            <a href="#">
              <HiOutlineLogout />
            </a>
          </li>
        </div>
      </div>
    </>
  );
};
