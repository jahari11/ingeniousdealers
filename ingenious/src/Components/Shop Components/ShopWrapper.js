import React from "react";
import ShopCard from "./ShopCard";
import Map from './Map'


export default function ShopWrapper () {
    return (
        <div className="shop--map--wrap">
            <ShopCard />
            <Map />
        </div>
    )
}