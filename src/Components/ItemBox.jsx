import React, { useEffect, useState } from "react";
import "./style.css";

const ItemBox = ({ veri, index }) => {
  return (
    <div id={`${index}`} className={`item-box`}>
      <img
        className="country-flag"
        src={`https://flagsapi.com/${veri?.code}/shiny/64.png`}
        alt={`Api Error :  Flag of ${veri?.name}`}
      />
      <div className="otherBox">
        <div className="detailText">Code <span>{veri?.code}</span></div>
        <div className="detailText">
          Country Name <span>{veri?.name}</span>
        </div>
        <div className="detailText">
          Spoken language <span>{veri?.languages[0]?.name}</span>{" "}
        </div>
        <div className="detailText">
          Capital <span>{veri?.capital}</span>{" "}
        </div>
        <div className="detailText">
          Currency <span>{veri?.currency}</span>
        </div>
        <div className="detailText">
          Continent <span>{veri?.continent?.name}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default ItemBox;
