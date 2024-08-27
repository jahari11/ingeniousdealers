import React, {useState} from "react";
import ShopCardIcon from "./ShopCardIcon";
import DropDown from "./DropDown";



export default function ShopCard () {

   const options1 = ["New York", "Miami", "Los Angeles"];
   const options2 = ["Screenprint", "DTG", "Airbrush", "Tailoring"];
    return (
        <div className="shop--wrapper">
            <div className="shop--card--header">
            <h2 className="text-xl font-bold uppercase text-black text-center sm:text-7xl">Dealers top picks of the month</h2>
            </div>
            <div className="flex justify-center gap-4">
            <DropDown options={options1} label="City" />
            <DropDown options={options2} label="Service" />
            </div>
        <div className="sm:flex justify-center gap-4 mt-4">
        <ShopCardIcon />
        <ShopCardIcon />
        <ShopCardIcon />
        </div>
        </div>
    )
}