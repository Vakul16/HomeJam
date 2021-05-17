import React, { Component } from "react";
import Nav from "../NavigationComp/Nav";
import "./Home.css";
import { ReactComponent as LoveIcon } from "../assets/images/homeImgs/Label+Icon.svg";
import { ReactComponent as VectorIcon } from "../assets/images/homeImgs/Vector+Icon.svg";
export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Nav />

        <div class="text-container">
          <h1>Cari Cari</h1>
          <p>
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </p>
        </div>
        <div class="lader">
          <div>
            <div className="btn-lader" alt="pic">
              <LoveIcon />
            </div>
          </div>
          <div>
            <div className="btn2-lader" alt="pic">
              <VectorIcon />
            </div>
          </div>
          <div>
            <div className="btn2-lader" alt="pic">
              <VectorIcon />
            </div>
          </div>
          <div>
            <div className="btn2-lader" alt="pic">
              <VectorIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
