import React from "react"


export default function ServiceSearch () {
    return (
        <>
        <div className="service-search">
            <div className="input-container">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" className="input-txt" placeholder="Search your service"/>
            </div>
            <div className="input-container">
            <i class="fa-solid fa-location-dot"></i>
            <input type="text" className="input-txt" placeholder="Choose your city"/>
            </div>
        </div>
        </>
    )
}