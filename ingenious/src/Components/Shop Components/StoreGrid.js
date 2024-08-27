import React from "react";
import storeData from "./storeData";
import { Link } from "react-router-dom";



export default function StoreGrid () {
    return (
    <>
        <div className="store--list">
        <h2 className="text-xl font-bold uppercase text-black text-center sm:text-6xl">Store List</h2>
        </div>
        <div className="w-full px-2">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {storeData.map(store => (
                <div>
                    <Link to={`/store/${store.id}`}>
                    <img src={store.storeImage} alt="" className="h-40 w-full max-w-full rounded-lg object-cover object-center" />
                    <h3 className="text-center font-bold">{store.storeName}</h3>
                    <p className="text-center">{store.storeLocation}</p>
                    </Link>
                </div>
            ))}
        </div>
        </div>
        </>
    )
}