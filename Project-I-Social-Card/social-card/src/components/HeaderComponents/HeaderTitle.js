import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent";
import moment from "moment";

const currentDate = moment().format("dddd, MMMM D, YYYY");

const HeaderTitle = () => {
  return (
    <div className="title">
      <div className="header-title">
        <h2>Lambda School</h2>
        <p>{currentDate}</p>
      </div>
      <HeaderContent />
    </div>
  );
};

export default HeaderTitle;
