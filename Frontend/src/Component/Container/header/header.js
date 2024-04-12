import React from "react";
// import "./header.css";
import pozent from "./Pozent.jpg";

function Header() {
  return (
    <div className="main">
      <div className="">
        <div>
          <img src={pozent} alt="" className="logo" />
        </div>
        <div>ATTENDANCE MANAGEMENT</div>
        <div>PROFILE</div>
      </div>
    </div>
  );
}

export default Header;
