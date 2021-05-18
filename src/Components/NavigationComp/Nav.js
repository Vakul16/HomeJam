import React, { Component } from "react";
import homeJamLogo from "../assets/images/navImgs/homeJamLogo.png";
// imported search icon from font-awesome
import { FaSearch } from "react-icons/fa";
import "./Nav.css";
// svg's which imported from assests/images/navigation images folder
import { ReactComponent as VectorNavIcon } from "../assets/images/navImgs/VectorNav+Icon.svg";

export class Nav extends Component {
  render() {
    return (
      <nav>
        {/* Navigation */}
        <img src={homeJamLogo} className="logo" alt="logo" />
        <ul>
          <div className="search-icon">
            {/* imported from font awesome */}
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
              {/* svg icon from images/ navigation images folder */}
              <VectorNavIcon />
            </a>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Nav;
