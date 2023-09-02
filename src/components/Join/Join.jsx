import React, { useState } from "react";
import "./Join.css";

const Join = () => {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form onSubmit={handleSubmit} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            autoComplete="off"
            value={input}
            onChange={handleOnChange}
          />
          <button type="submit" className="btn btn-j">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
