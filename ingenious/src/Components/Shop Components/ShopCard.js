import React from "react";
import ShopCardIcon from "./ShopCardIcon";


export default function ShopCard () {
    return (
        <div className="shop--wrapper">
            <div className="shop--card--header">
            <span >Dealers Top Picks of The Month</span>
            </div>
        <div className="shop--card">
            <div className="dropdown">
                <select name="" id="shop--location--dropdown">
                    <option value="new-york">New York</option>
                    <option value="atlanta">Atlanta</option>
                    <option value="los-angeles">Los Angeles</option>
                </select>
                <span className="custom-arrow "></span>
            </div>
            <div className="dropdown">
                <select name="" id="shop--category--dropdown">
                    <option value="screenprint">Screenprint</option>
                    <option value="airbrush">Airbrush</option>
                    <option value="dtg">DTG</option>
                    <option value="tailoring">Tailoring</option>
                </select>
                <span className="custom-arrow "></span>
            </div>
            <div className="dropdown">
                <select name="" id="shop--category--brand">
                    <option value="ingenious">Ingenious</option>
                    <option value="ingenious">Ingenious</option>
                    <option value="ingenious">Ingenious</option>
                    <option value="ingenious">Ingenious</option>
                </select>
                <span className="custom-arrow "></span>
            </div>
        </div>
        <ShopCardIcon />
        <ShopCardIcon />
        <ShopCardIcon />
        </div>
    )
}