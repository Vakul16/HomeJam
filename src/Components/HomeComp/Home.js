import React, { Component } from "react";
import Nav from "../NavigationComp/Nav";
import "./Home.css";
// svg's which imported from assests/images/home images folder
import { ReactComponent as LoveIcon } from "../assets/images/homeImgs/Label+Icon.svg";
import { ReactComponent as VectorIcon } from "../assets/images/homeImgs/Vector+Icon.svg";
export class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* Navigation Component */}
        <Nav />

        <div class="text-container">
          {/* Main Home Component Text */}
          <h1>Cari Cari</h1>
          <p>
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </p>
        </div>
        <div class="lader">
          <div>
            <div className="btn-lader" alt="pic">
              {/* svg icon from images/ home images folder */}
              <LoveIcon />
            </div>
          </div>
          <div>
            <div className="btn2-lader" alt="pic">
              {/* svg icon from images/ home images folder */}
              <VectorIcon />
            </div>
          </div>
          <div>
            <div className="btn2-lader" alt="pic">
              {/* svg icon from images/ home images folder */}
              <VectorIcon />
            </div>
          </div>
          <div>
            <div className="btn2-lader" alt="pic">
              {/* svg icon from images/ home images folder */}
              <VectorIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
