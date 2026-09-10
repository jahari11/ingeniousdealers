import React, { useState } from "react";
import servicesData from "./servicesData";


export default function ServiceBtns({dealerCity,filterItemsByCity, menuItems, filterItems, setItems}) {

  return (
    <div className="service-btns">
      <div className="service-btns-title">
        <span>Choose your service:</span>
      </div>
      {
        menuItems.map(val => (
          <button className="service-btn" onClick={() => filterItems(val)}>{val}</button>
        ))
      }
      <div className="service-btns-title">
        <span>Choose your city:</span>
      </div>
      {
        dealerCity.map(cityVal => (
          <button className="service-btn" onClick={()=> filterItemsByCity(cityVal)}>{cityVal}</button>
        ))
      }
      <button className="service-btn" onClick={() => setItems(servicesData)}>All</button>
    </div>
  );
}
