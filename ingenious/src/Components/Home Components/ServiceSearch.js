import React from "react"


export default function ServiceSearch () {
    return (
        <>
        <div className="service-search-wrapper">
            <h3 className="service-search-title">Discover Amazing Services</h3>
            <p className="service-search-description">Find the perfect service providers in your city with our intelligent search</p>
            <div className="service-search">
                <div className="input-container">
                    <div className="input-icon-wrapper">
                        <i className="fa-solid fa-briefcase service-icon"></i>
                    </div>
                    <input type="text" className="input-txt" placeholder="Search your service"/>
                </div>
                <div className="input-container">
                    <div className="input-icon-wrapper">
                        <i className="fa-solid fa-map-marker-alt city-icon"></i>
                    </div>
                    <input type="text" className="input-txt" placeholder="Choose your city"/>
                </div>
            </div>
        </div>
        </>
    )
}