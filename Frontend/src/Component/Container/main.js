import React, { useState } from "react";
import "./main.css";

export default function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [comment, setComment] = useState("");
  const [isBreakIn, setIsBreakIn] = useState(true);
  const [message, setMessage] = useState("");

  const handleLoginToggle = () => {
    setIsLoggedIn((prevState) => !prevState);
    setMessage(
      isLoggedIn
        ? "You are successfully logged out!"
        : "You are successfully logged in!"
    );
  };

  const handleActivityToggle = () => {
    setIsBreakIn((prevState) => !prevState);
    setMessage(
      isBreakIn
        ? "You have successfully broken in!"
        : "You have successfully broken out!"
    );
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <div className="cont">
        <div className="msg">
          <div className="c1">Welcome msg</div>
        </div>
        <div className="login">
          <div className="activity">
            <button className="login-button" onClick={handleLoginToggle}>
              {isLoggedIn ? "Logout" : "Login"}
            </button>
            <button className="break-button" onClick={handleActivityToggle}>
              {isBreakIn ? "Break In" : "Break Out"}
            </button>
            <div>
              <input
                type="text"
                value={comment}
                onChange={handleInputChange}
                placeholder="Enter your comment"
                className="comment-input"
              />
            </div>
          </div>
        </div>
      </div>
      <div>{message && <div className="login-message">{message}</div>}</div>
    </>
  );
}
