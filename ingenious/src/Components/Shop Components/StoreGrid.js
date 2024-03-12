import React from "react";
import storeData from "./storeData";



export default function StoreGrid () {
    return (<>
        <div className="store--list">
            <h1>Store List</h1>
        </div>
        <div className="store--grid-wrapper">
            {storeData.map(store => (
                <div className="store--grid">
                    <img src={store.storeImage} alt="" className="store--img" />
                    <h3>{store.storeName}</h3>
                    <p>{store.storeLocation}</p>
                </div>
            ))}
        </div>
        </>
    )
}