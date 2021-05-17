import React, { Component } from "react";
import homeJamLogo from "../assets/images/navImgs/homeJamLogo.png";
import { FaSearch } from "react-icons/fa";
import "./Nav.css";
import { ReactComponent as VectorNavIcon } from "../assets/images/navImgs/VectorNav+Icon.svg";

export class Nav extends Component {
  render() {
    return (
      <nav>
        <img src={homeJamLogo} className="logo" alt="logo" />
        <ul>
          <div className="search-icon">
            <FaSearch />
          </div>
          <div className="nav-icon">
            <a href="#">Search</a>
          </div>
          <div className="nav-icon">
            <a href="#">Help</a>
          </div>
          <div className="nav-icon">
            <a href="#">Account</a>
          </div>
          <div className="nav-icon">
            <a>
              {" "}
              <VectorNavIcon />
            </a>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Nav;
