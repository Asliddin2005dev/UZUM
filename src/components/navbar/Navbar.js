import React from "react";
import navbarLogo from "../../assets/Navbar-logo.svg";
import {
  CiMenuFries,
  CiSearch,
  CiUser,
  CiHeart,
  CiShoppingBasket,
} from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import navbarLOGO from "../../assets/Navbar-logo.svg";

function Navbar() {
  const { pathname } = useLocation();

  if (pathname.includes("Krish")) {
    return <></>;
  }

  return (
    <div className="navbar-wrapper">
      <div className="container">
        <div className="navbar">
          <div className="navbar-logo-collection-wrapper">
            <Link to={"/"} className="navbar-logo" href="">
              <img className="navbar-logo-img" src={navbarLOGO} alt="..." />
            </Link>

            <button className="navbar-menu-btn">
              <CiMenuFries />
              <span>Katalog</span>
            </button>
          </div>

          <div className="navbar-search">
            <input
              className="navbar-search-input"
              type="text"
              placeholder="Search..."
            />
            <button className="navbar-search-btn">
              <CiSearch />
            </button>
          </div>

          <div className="navbar-collection">
            <div className="navbar-collection-item-home">
              <Link className="Link" to={"/"}>
                <IoHomeOutline />
                <span className="span">Home</span>
              </Link>
            </div>

            <div className="navbar-collection-item">
              <Link className="Link" to={"Krish"}>
                <CiUser />
                <span>Krish</span>
              </Link>
            </div>

            <div className="navbar-collection-item">
              <Link className="Link" to={"Like"}>
                <CiHeart />
                <span>Saralangan</span>
              </Link>
            </div>

            <div className="navbar-collection-item">
              <Link className="Link" to={"Savat"}>
                <CiShoppingBasket />
                <span>Savat</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
