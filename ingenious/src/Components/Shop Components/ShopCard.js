import React, {useState} from "react";
import ShopCardIcon from "./ShopCardIcon";



export default function ShopCard () {

    return (
        <div className="shop--wrapper">
            <div className="shop--card--header">
            <h2 className="text-xl font-bold uppercase text-black text-center sm:text-7xl">Dealers top picks of the month</h2>
            </div>
        <ShopCardIcon />
        </div>
    )
}