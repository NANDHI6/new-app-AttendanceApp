import React from "react";
import "./header.css";
import Pozent from "./Pozent.jpg";
export default function Header() {
  return (
    <div className="head">
      <div className="items">
        <div className="logo">
          <img src={Pozent} alt="" className="logo" />
        </div>
        <div className="title">ATTENDANCE MANAGEMENT SYSTEM</div>
        <div className="profile"></div>
      </div>
    </div>
  );
}
