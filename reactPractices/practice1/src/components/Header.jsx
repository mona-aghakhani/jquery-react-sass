import React from "react";
import logo from "./logo.PNG";
const Header = () => {
  return (
    <div className="header-container">
      <div className="line-green"></div>
      <div className="header-text">
        <button className="btn">فروشگاه من</button>
        <div className="right">
          <div className="navbar-link">
            <div>
              <a href="#">سوالات متداول</a>
            </div>
            <div>
              <a href="#">پشتیبانی</a>
            </div>
            <div>
              <a href="#">کسب و کار</a>
            </div>
            <div>
              <a href="#">درباره ما</a>
            </div>
          </div>
          <img className="logo" src={logo} />
        </div>
      </div>
    </div>
  );
};
export default Header;
