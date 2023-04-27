import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="logo" />
        <p className="text-secondary mt-3">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>
          {<span className="fw-bold">{moment().format("dddd")} </span>}
          {moment().format("MMMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Header;
