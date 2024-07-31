import React from "react";
import storeData from "./storeData";
import { Link } from "react-router-dom";



export default function StoreGrid () {
    return (
    <>
        <div className="store--list">
            <h1>Store List</h1>
        </div>
        <div className="grid justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {storeData.map(store => (
                <div>
                    <Link to={`/store/${store.id}`}>
                    <img src={store.storeImage} alt="" className="store--img" />
                    <h3>{store.storeName}</h3>
                    <p>{store.storeLocation}</p>
                    </Link>
                </div>
            ))}
        </div>
        </>
    )
}