import React from "react";
import "./NavBar.scss";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineTruck } from "react-icons/hi";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import Logo from "../../assets/logo.png";
import DrobDown from "./components/dropdown/Drodown";


let amounts = {
  favoriteAmount: 99,
  cartAmount: 99,
}

const options = [
  "Eletronics",
  "Clothes"
]

const NavBar: React.FunctionComponent = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar__container-1">
          <div className="nav-bar__first-container">
            Need help? Call us: (+98) 0234 456 789
          </div>
          <div className="nav-bar__second-container">
            <SlLocationPin className="icon" /> Our store
            <HiOutlineTruck className="icon" /> Track your order
          </div>
        </div>

        <div className="nav-bar__container-2">
          <div className="nav-bar__first-container-2">
            <img className="logo" src={Logo} alt="company-logo" />
            <div className="input-wrapper">
              <input type="text" />
              <input type="button" value="search" />
            </div>
          </div>
          <div className="nav-bar__second-container-2">
            <div className="icons-container">
              <div className="icons-wrapper">
                <AiOutlineUser />
              </div>
              <span>Sign in</span>
            </div>
            <div className="icons-container">
              <div className="icons-wrapper">
                <AiOutlineHeart />
                <div className="circle-amount">
                  <span>{amounts.favoriteAmount}</span>
                </div>
              </div>
              <span>Favorite</span>
            </div>
            <div className="icons-container">
              <div className="icons-wrapper">
                <AiOutlineShoppingCart />
                <div className="circle-amount">
                  <span>{amounts.cartAmount}</span>
                </div>
              </div>
              <span>Cart</span>
            </div>
          </div>
        </div>

        <div className="nav-bar__container-3">
          <div className="nav-bar__first-container-3">
            <DrobDown width="10" color="#EDA415" texto="Browser categories" options={[]} />
            <div style={{ display: "flex" }}>
              <DrobDown width="20" color="" texto="Home" options={options} />
              <DrobDown width="20" color="" texto="Catalog" options={options} />
              <DrobDown width="20" color="" texto="Blog" options={[]} />
              <DrobDown width="20" color="" texto="Pages" options={options} />
              <DrobDown width="20" color="" texto="About us" options={[]} />
            </div>
          </div>
          <div className="nav-bar__second-container-3">
            <span>30 Days Free Return</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
